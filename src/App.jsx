import {Input, Button} from "@nextui-org/react"
import './App.css'
import responseDBZ from './api-json/json-true'
import { useState } from "react"



function App() {
  const [search, setSearch] = useState()


  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)

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
        <ul className="cards">{responseDBZ.map(response => (
          <li key={response.id}>
            <h3>{response.name}</h3>
            <p>{response.ki}</p>
            <img src={response.image} alt="" />
          </li>
        ))}</ul>
      </main>
    </div>
  
  )
}

export default App
