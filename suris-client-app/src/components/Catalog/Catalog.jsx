import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CatalogCard } from "./Card/CatalogCard";
import { getArticulosByDeposito } from "@/services/articulo.service";

export const Catalog = () => {


  const [articulos , setArticulos ] = useState([]);

  const fetchArticulos = useCallback( async () => {
    const articulos = await getArticulosByDeposito()
    setArticulos (articulos)
  },[])

  useEffect(() => {
  fetchArticulos()
  }, [fetchArticulos]);

  
  return (
    <div className="flex space-x-10">
      {articulos.map((a,index)=> {
        console.log(articulos)
       return  <CatalogCard props={a} key= {index}/>
      })}
      <Button>Agregar Pedido</Button>
    </div>
  );
};
