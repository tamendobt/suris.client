import axios from "axios"

export const getArticulosByDeposito = async () =>
{
   return  await axios.get("http://localhost:5154/api/Articulos?deposito=1").then(response=> response.data)
    .catch(err => {
        console.log(err);
        return[];
    })
}