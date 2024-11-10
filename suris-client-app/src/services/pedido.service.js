import axios from "axios"

export const createPedido = async (data) =>
{
   return  await axios.post("http://localhost:5154/api/Pedidos",data).then((response )=>
{
    console.log(response.data)
    return response.data
})
    .catch((err) => {
   return  err.response
    })
}