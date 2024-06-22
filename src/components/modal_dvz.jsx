import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { getCaracteristicas } from "../service/caracteristicas";
import { useEffect, useState } from "react";

export function ModalDvz ({openModal, closeModal, selectKey}){
    const [responseCarac, setResponseCarac] = useState(null)

    useEffect(() =>{
      if(openModal){
        const fetchCaracteristicas = async () =>{
          const data = await getCaracteristicas({id: selectKey})
          console.log(data)
          setResponseCarac(data)
        }

        fetchCaracteristicas()
      }

    }, [openModal, selectKey])


    return(
      
      <Modal  isOpen={openModal} onClose={closeModal} size="4xl" >
        {responseCarac !== null && (
        <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Caracteristicas de {responseCarac.name}</ModalHeader>
              <ModalBody>
                <p>La key es : {selectKey}</p>
                <p>Descripción: {responseCarac.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"  onClick={closeModal}>
                  Cerrar
                </Button>
              </ModalFooter>
        </ModalContent>
        )}
      </Modal>
    )

}