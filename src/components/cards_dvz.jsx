import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

function ListDvz ({responsedbz}) {
    return(
        <div className="tarjeta gap-2 grid grid-cols-2 sm:grid-cols-4">
            {responsedbz.map( response => (
              <Card className="py-4" key={response.id}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{response.name}</h4>
                <small className="text-default-500">Ki: {response.ki}</small>
                <p className="text-tiny uppercase font-bold"></p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={response.name}
                  className="object-cover rounded-xl"
                  src={response.image}
                  width={270}
                />
              </CardBody>
            </Card>
            ))}

        </div>

  
    )
}


function NoResponse(){
    return(
        <p>No hay resultado para la busqueda</p>
    )
}

export function Personajes ({responsedbz}){
  
    const hasResponse = responsedbz && responsedbz.length > 0    
    return(
        hasResponse  ? <ListDvz responsedbz={responsedbz} /> 
        : <NoResponse/>
    )

}