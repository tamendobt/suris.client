import axios from "axios"

export const getVendedores = async () =>
{
   return  await axios.get("https://run.mocky.io/v3/c70569d3-9e72-48fb-8e77-3b8b00ceb0bc").then(response=> response.data)
    .catch(err => {
        console.log(err);
        return[];
    })
}