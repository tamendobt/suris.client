import axios from "axios"

export const getVendedores = async () =>
{
   return  await axios.get("https://run.mocky.io/v3/f86ed577-ebb6-45f2-b427-6dfee334966c").then(response=> response.data)
    .catch(err => {
        console.log(err);
        return[];
    })
}