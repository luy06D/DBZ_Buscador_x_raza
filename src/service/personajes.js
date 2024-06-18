

export const getPersonajes = async({search})=>{

    if(search == '') return

    fetch(`https://dragonball-api.com/api/characters?race=${search}`)
    .then(response => response.json())
    .then(data =>{
      return data

    })

}