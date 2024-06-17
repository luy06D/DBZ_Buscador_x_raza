import {Input, Button} from "@nextui-org/react"
import './App.css'

function App() {
  return (
    <div className="cabezera">
      <header>
      <h1>DVZ BUSCADOR POR RAZA</h1>
      <form action="">
        <Input type="text" placeholder="Saiyan , Human, Namekian" />
        <Button color="primary" variant="shadow">Buscar</Button>
  
      </form>
      </header>
      <main>
      <p>AQUI TODO EL CONTENIDO </p>
      </main>
    </div>
  
  )
}

export default App
