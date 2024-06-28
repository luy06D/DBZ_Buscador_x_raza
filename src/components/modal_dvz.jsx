import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { getCaracteristicas } from "../service/caracteristicas";
import { useCallback, useEffect, useState } from "react";
import { Divider, Spinner, ScrollShadow } from "@nextui-org/react";
import debounce from "just-debounce-it";

export function ModalDvz ({openModal, closeModal, selectKey}){
    const [responseCarac, setResponseCarac] = useState(null)
    const [loading, setLoading] = useState(false)

    // fetch envie la key para la peticion y actualiza responceCarac
    const fetchCaracteristicas = useCallback (async () =>{
      setLoading(true)
      const data = await getCaracteristicas({id: selectKey})
      setResponseCarac(data)
      setLoading(false)
    }, [selectKey])

    /**Debounce para demorar milisegundos cada que se haga una 
    Nueva petición**/
    const debounceFetchCarac = useCallback(
      debounce(() =>{
        fetchCaracteristicas()
      }, 1000), [fetchCaracteristicas]
    )

    useEffect(() =>{
      if(closeModal){
        setResponseCarac(null)
      }

    }, [openModal])


    useEffect(() =>{
      if(openModal){
        debounceFetchCarac()
      }

    }, [openModal, selectKey])


    return(
      
      <Modal style={{ maxHeight: '100vh', overflowY: 'auto' }} isOpen={openModal} onClose={closeModal} size="full" >
        {loading ? (
          <ModalContent>
            <Spinner label="Cargando..." color="warning" className="mt-7"/>
          </ModalContent>
        ) : responseCarac !== null ? (
        <ModalContent>
              <ModalHeader  className="flex flex-col gap-1 text-warning title-modal">Caracteristicas de {responseCarac.name}</ModalHeader>
              <ModalBody>
                <p>Descripción: {responseCarac.description}</p>
                <Divider className="my-4" />
                <h3 className="title-modal text-warning" style={{fontSize: '1rem'}}>TRANSFORMACIONES</h3>
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
                          <p className="text-default-600">Ki :{fases.ki}</p>
                        </CardFooter>
                      </Card>
                ))}
                  </div>
                  <Divider className="my-4" />
                <div className="container section-planet">
                  <h3 className="title-modal text-warning" style={{fontSize: '1rem'}}>PLANETA DE ORIGEN</h3>
                  <div className="section-origin">
                    <ScrollShadow hideScrollBar className="w-[300px] h-[400px] text-origin">
                      <div className="container mt-3">
                        <p>{responseCarac.originPlanet.description}</p>
                      </div>
                    </ScrollShadow>
                    <Card shadow="sm"  className="custom-card" >
                          <CardBody className="overflow-visible p-0" >
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={responseCarac.name}
                              className="fases-img"
                              src={responseCarac.originPlanet.image}
                            />
                          </CardBody>
                    </Card> 
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning"  onClick={closeModal}>
                  Cerrar
                </Button>
              </ModalFooter>
        </ModalContent>
        ): null }
      </Modal>
    )

}