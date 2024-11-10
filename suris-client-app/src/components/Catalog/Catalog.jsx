import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CatalogCard } from "./Card/catalog-card";
import { getArticulosByDeposito } from "@/services/articulo.service";
import { getVendedores } from "@/services/vededor.service";
import { CatalogSelect } from "./Select/catalog-select";
import { createPedido } from "@/services/pedido.service";
import { CatalogAlert } from "./Alert/catalog-alert";

export const Catalog = () => {
  const [articulos, setArticulos] = useState([]);
  const [vendedores, setVendedores] = useState([]);

  const [articulosSelected, setArticulosSelected] = useState([]);
  const [vendedorSelected, setVendedorSelected] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const fetchArticulos = useCallback(async () => {
    const articulos = await getArticulosByDeposito();
    setArticulos(articulos);
  }, []);

  const fetchVendedores = useCallback(async () => {
    const vendedoresRes = await getVendedores();
    setVendedores(vendedoresRes.vendedores);
  }, []);

  useEffect(() => {
    fetchArticulos();
    fetchVendedores();
  }, [fetchArticulos, fetchVendedores]);

  const handleVendedorChange = (value) => {
    setVendedorSelected(value);
  };
  const handleArticuloCheck = (articulo, checked) => {
    if (checked) {
      setArticulosSelected((prevState) => [...prevState, articulo]);
    } else {
      setArticulosSelected((prevState) =>
        prevState.filter((a) => a.codigo !== articulo.codigo)
      );
    }
  };

  const handleAddPedido = async () => {
    setErrorMessage();
    setSuccessMessage();
    try {
      if (articulosSelected.length === 0)
        setErrorMessage("Debe seleccionar un articulo");
      else if (!vendedorSelected)
        setErrorMessage("Debe seleccionar un vendedor");
      else {
        setErrorMessage();

        const pedidoData = {
          articulos: articulosSelected,
          vendedor: vendedorSelected,
        };
        const response = await createPedido(pedidoData);
        if (response.success) {
          setSuccessMessage(response.message);
        } else {
          setErrorMessage(response.data.message +  " Articulo: "+ response.data.codigo);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-col">
{
  errorMessage ? <CatalogAlert title= "Error" message ={errorMessage} variant="destructive"/> : <></>
}
{
  successMessage ? <CatalogAlert title= "Success" message ={successMessage} variant="default"/> : <></>
}
      <div className="flex space-x-10 p-6">
        {articulos.map((a, index) => (
          <CatalogCard
            props={a}
            key={index}
            handleSelectedCard={handleArticuloCheck}
            isChecked={articulosSelected.some((art) => art.codigo === a.codigo)}
          />
        ))}
      </div>
      <div className="">
        <CatalogSelect props={vendedores} handleChange={handleVendedorChange} />
        <Button onClick={handleAddPedido}>Agregar Pedido</Button>
      </div>
    </div>
  );
};
