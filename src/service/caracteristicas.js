
export const getCaracteristicas = async({id}) =>{

    if(id === '') return
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data = await response.json()
    return data

}
