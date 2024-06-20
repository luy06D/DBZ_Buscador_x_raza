import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

function ListDvz ({responsedbz}) {
    return(
        <div className="tarjeta gap-2 grid grid-cols-2 sm:grid-cols-4">
            {responsedbz.map( response => (
              <Card isFooterBlurred className="w-full h-[300px]" key={response.id}>
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="card-name text-warning">{response.name}</p>
                
                </CardHeader>
                <Image
                  removeWrapper
                  alt={response.name}
                  className="z-0 w-full h-full"
                  src={response.image}
                />
                <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    {/* <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    /> */}
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/80">Ki: {response.ki}</p>
                      <p className="text-tiny text-white/80">Raza: {response.race}</p>
                    </div>
                  <Button radius="full" size="sm" key={response.id}>Ver mas</Button>
                  </div>
                </CardFooter>
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