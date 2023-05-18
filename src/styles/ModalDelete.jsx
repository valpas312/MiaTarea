import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Spinner,
  } from '@chakra-ui/react'

import { useMutation } from '@tanstack/react-query'
import { API_URL } from '../utils/API_URL'

// eslint-disable-next-line react/prop-types
const ModalDelete = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { mutate, isLoading } = useMutation({
        mutationKey: 'eliminarTarea',
        mutationFn: (id) => fetch(`${API_URL}/tareas/${id}`, {
            method: 'DELETE',
        }),
    })

    const handleDelete = () => {
        mutate(id)
        onClose()
    };

  return (
    <>
      <Button onClick={onOpen} colorScheme='red'>Eliminar Tarea</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          Estas seguro que deseas eliminar esta tarea?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => handleDelete()}>
              {
                isLoading ? <Spinner /> : 'Eliminar'
              }
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDelete