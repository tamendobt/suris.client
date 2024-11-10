import { SelectItem, SelectTrigger } from "@/components/ui/select"
import { Select, SelectContent, SelectValue } from "@radix-ui/react-select"
import { useState } from "react";


export const CatalogSelect= ({props,handleChange})=>
{

    const [selectedVendedor, setSelectedVendedor] = useState("");

    return (
<Select value = {selectedVendedor} onValueChange={(value) => {
    setSelectedVendedor(value)
    handleChange(value)
}}>
  <SelectTrigger className="w-[300px]">
    <SelectValue placeholder="Vendedores" />
  </SelectTrigger>
  <SelectContent>
    {props.map( (v,index)=>
    (
        <SelectItem key={index} value = {v.descripcion}>{v.descripcion}</SelectItem>
    ))}
  </SelectContent>
</Select>
    )
}