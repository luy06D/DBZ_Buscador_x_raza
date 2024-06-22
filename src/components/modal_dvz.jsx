import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";


export function ModalDvz ({openModal, closeModal, selectKey}){

    return(
      
      <Modal  isOpen={openModal} onClose={closeModal} size="4xl" >

        <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Caracteristicas del personaje</ModalHeader>
              <ModalBody>
                <p>La key es : {selectKey}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"  onClick={closeModal}>
                  Cerrar
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    )

}