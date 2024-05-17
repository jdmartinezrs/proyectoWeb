export const getAllAbrigoInformation = async () => {
    let res = await fetch("http://localhost:5501/abrigo");
    let data = await res.json();
    return data.map(val => ({
        Name: val.nombre,
        Price: val.precio
    }));
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



