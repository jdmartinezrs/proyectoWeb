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




export const getAllcamisetaInformation = async() =>{
    let res = await fetch("http://localhost:5501/camiseta")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            Name: val.nombre,
            Image: val.imagen,
            Price: val.precio,

        }
    })
    return dataUpdate;
};

export const getAllpantalonInformation = async() =>{
    let res = await fetch("http://localhost:5501/pantalon")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            
            Name: val.nombre,
            Image: val.imagen,
            Price: val.precio,

        }
    })
    return dataUpdate;
};



