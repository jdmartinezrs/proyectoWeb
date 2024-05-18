export const getAbrigoInfo =async()=>{
    let res = await fetch("http://localhost:5501/abrigo")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        dataUpdate.push({
            name: val.nombre,
            image: val.imagen,
            price: val.precio,
            id: val.id

        })
    })
    return dataUpdate
}

export const getCamisetaInfo =async()=>{
    let res = await fetch("http://localhost:5501/camiseta")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        dataUpdate.push({
            name: val.nombre,
            image: val.imagen,
            price: val.precio,
            id: val.id

        })
    })
    return dataUpdate
}


export const getPantalonInfo =async()=>{
    let res = await fetch("http://localhost:5501/pantalon")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        dataUpdate.push({
            name: val.nombre,
            image: val.imagen,
            price: val.precio,
            id: val.id

        })
    })
    return dataUpdate
}


