import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { useRef } from "react";

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Button onClick={onOpen}>Agregar Tarea</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agrega una tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tarea</FormLabel>
              <Textarea as={Input} placeholder="Tarea" ref={initialRef} />

              <FormLabel>Detalles</FormLabel>
              <Input placeholder="Detalle" />

              <FormLabel>Fecha de entrega</FormLabel>
              <Input placeholder="Fecha de entrega estimada" />

              <FormLabel>Archivos opcionales</FormLabel>
              <Input placeholder="Archivos opcionales" type="file" />
              <Input placeholder="Archivos opcionales" type="file" />
              <Input placeholder="Archivos opcionales" type="file" />
              <Input placeholder="Archivos opcionales" type="file" />

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Enviar
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
