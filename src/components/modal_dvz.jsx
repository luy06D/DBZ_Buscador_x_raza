import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { getCaracteristicas } from "../service/caracteristicas";
import { useEffect, useState } from "react";

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
      
      <Modal  isOpen={openModal} onClose={closeModal} size="4xl" >
        {responseCarac !== null && (
        <ModalContent>
              <ModalHeader className="flex flex-col gap-1 text-warning title-modal">Caracteristicas de {responseCarac.name}</ModalHeader>
              <ModalBody>
                {/* <p>Descripción: {responseCarac.description}</p> */}
                  <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {responseCarac.transformations.map(fases =>(
                      <Card shadow="sm" key={fases.id} >
                        <CardBody className="overflow-visible p-0" style={{ height: '200px' }}>
                          <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            height="100%"
                            alt={responseCarac.name}
                            className="z-0 w-full h-full object-contain"
                            src={fases.image}
                          />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                          {/* <b>{item.title}</b> */}
                          {/* <p className="text-default-500">{item.price}</p> */}
                        </CardFooter>
                      </Card>
                    ))}
                    
                  </div>
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