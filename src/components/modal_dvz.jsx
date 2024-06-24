import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { getCaracteristicas } from "../service/caracteristicas";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

export function ModalDvz ({openModal, closeModal, selectKey}){
    const [responseCarac, setResponseCarac] = useState(null)
    
    useEffect(() =>{
      if(openModal){
        const fetchCaracteristicas = async () =>{
          const data = await getCaracteristicas({id: selectKey})
          setResponseCarac(data)
        }

        fetchCaracteristicas()
      }

    }, [openModal, selectKey])


    return(
      
      <Modal style={{ maxHeight: '100vh', overflowY: 'auto' }} isOpen={openModal} onClose={closeModal} size="full" >
        {responseCarac !== null && (
        <ModalContent>
              <ModalHeader className="flex flex-col gap-1 text-warning title-modal">Caracteristicas de {responseCarac.name}</ModalHeader>
              <ModalBody>
                <p>Descripción: {responseCarac.description}</p>
                <Divider className="my-4" />
                <h3 className="title-modal text-warning" style={{fontSize: '1rem'}}>FASES</h3>
                  <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {responseCarac.transformations.map(fases =>(
                      <Card shadow="sm"  key={fases.id} className="custom-card" >
                        <CardBody className="overflow-visible p-0" >
                          <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"

                            alt={responseCarac.name}
                            className="fases-img"
                            src={fases.image}
                          />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                          <b>{fases.name}</b>
                          {/* <p className="text-default-500">{fases.ki}</p> */}
                        </CardFooter>
                      </Card>
                    ))}
                    
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning"  onClick={closeModal}>
                  Cerrar
                </Button>
              </ModalFooter>
        </ModalContent>
        )}
      </Modal>
    )

}