import { useEffect, useRef, useState } from "react"

export function useSearch (){
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const inputVoid = useRef(true)

    useEffect(() =>{
    
        if(inputVoid.current){
          inputVoid.current = search === ''
          return
        }
    
        //Operadores ternarios
        search === '' ? setError('Ingrese una raza de personaje DBZ')
        : setError('')
    
    
      }, [search])

      return {search, setSearch, error}

}
