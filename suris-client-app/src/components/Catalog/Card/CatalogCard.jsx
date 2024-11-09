import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export const CatalogCard = ({props}) => {

  const {codigo,descripcion , precio,deposito} = props;
    console.log(props)
    return (
        <Card>
            <CardHeader>
            <CardTitle>{descripcion}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Precio: {precio}$</p>W
                <p>Codigo: {codigo}</p>
            </CardContent>
            <CardFooter>Deposito : {deposito}</CardFooter>
        </Card>
    )
}