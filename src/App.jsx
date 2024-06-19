import { useCallback, useRef, useState } from "react"
import {Input, Button} from "@nextui-org/react"
import './App.css'
import {Personajes} from './components/cards_dvz'
import { getPersonajes } from "./service/personajes"
import debounce from "just-debounce-it"



function App() {
  const [search, setSearch] = useState('')
  const [response , setResponse] = useState(null)
  

  const debounceFetchPersonajes = useCallback(
    debounce( search =>{
      fetchPersonajes({search})
    }, 700), []
  )


  //Toma la data retornada de getPersonajes y actualiza el estado response
  const fetchPersonajes = async ({search}) =>{
    const data = await getPersonajes({search})
    setResponse(data)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    fetchPersonajes();
  }
  
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceFetchPersonajes(newSearch);

  }

  
  return (
    <div className="cabezera">
      <header>
      <h1 className="mt-4 title">DVZ BUSCADOR POR RAZA</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={search} className="mt-3 mb-3" type="text" placeholder="Saiyan , Human, Namekian" />
        <Button type="submit" color="primary" variant="shadow">Buscar</Button>
      </form>
      </header>
      <main >
        <Personajes responsedbz={response}/>
      </main>
    </div>
  
  )
}

export default App
