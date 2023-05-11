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
  Spinner,
} from "@chakra-ui/react";

import { useMutation } from "@tanstack/react-query";

import { useRef } from "react";

import { amarillo } from "../styles/utils/colores";

import { formatDate } from "../utils/formatDate";

const ModalComponent = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: "agrearTarea",
    mutationFn: (tarea) =>
      fetch("http://localhost:4000/tareas", {
        method: "POST",
        body: JSON.stringify(tarea),
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Button bg={amarillo} onClick={onOpen}>
        Agregar Tarea
      </Button>

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
            <FormControl
              as="form"
              onSubmit={(e) => {
                e.preventDefault();
                const tarea = {
                  titulo: e.target.titulo.value,
                  descripcion: e.target.descripcion.value,
                  fecha: formatDate(),
                  archivo: e.target.archivo.value,
                  estado: "Pendiente",
                };
                mutate(tarea);
                onClose();
              }}
            >
              <FormLabel>Tarea</FormLabel>
              <Input placeholder="Tarea de..." ref={initialRef} id="titulo" required />

              <FormLabel>Descripcion de la tarea</FormLabel>
              <Textarea as={Input} placeholder="Descripcion" id="descripcion" required />

              <FormLabel>Archivos opcionales</FormLabel>
              <Input
                placeholder="Subir pdf opcional"
                type="file"
                id="archivo"
                isRequired={false}
              />
              <ModalFooter>
                <Button bg={amarillo} mr={3} type="submit">
                  {isLoading ? <Spinner /> : "Enviar"}
                </Button>
                <Button onClick={onClose} colorScheme="red">
                  Cancelar
                </Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
