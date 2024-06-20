
//Retornamos la data del API
export const getPersonajes = async({search})=>{

    if(search == '') return
    const response = await fetch(`https://dragonball-api.com/api/characters?name=${search}`)
    const data = await response.json()
    return data
}