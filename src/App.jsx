import { useCallback, useState } from "react"
import {Input, Button} from "@nextui-org/react"
import './App.css'
import {Personajes} from './components/cards_dvz'
import { getPersonajes } from "./service/personajes"
import { useSearch } from "./hooks/useSearch"
import debounce from "just-debounce-it"



function App() {

  const [response , setResponse] = useState(null)
  const {search, setSearch, error} = useSearch()


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
      <form className="form-search" onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={search} className="mt-3 mb-3" type="text" placeholder="Saiyan , Human, Namekian" />
        <Button type="submit" color="warning" variant="shadow">Buscar</Button>
      </form>
        {error && <p className="mb-3" style={{color: '#F5A524'}}>{error}</p>}
      </header>
      <main >
        <Personajes responsedbz={response}/>
      </main>
    </div>
  
  )
}

export default App
