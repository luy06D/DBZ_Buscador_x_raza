
function ListDvz ({responsedbz}) {
    return(
        <ul className="cards">{responsedbz.map(response => (
            <li key={response.id}>
              <h3>{response.name}</h3>
              <p>{response.ki}</p>
              <img src={response.image} alt="" />
            </li>
          ))}</ul>
    )
}


function NoResponse(){
    return(
        <p>No hay resultado para la busqueda</p>
    )
}

export function Personajes ({responsedbz}){
    console.log(responsedbz)
    // const hasResponse = responsedbz.length > 0    
    return(
        responsedbz  ? <ListDvz responsedbz={responsedbz} /> 
        : <NoResponse/>
    )

}