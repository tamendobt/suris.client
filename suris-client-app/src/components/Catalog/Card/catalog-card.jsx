import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

    export const CatalogCard = ({ props, handleSelectedCard, isChecked
    }) => {
    const { codigo, descripcion, precio, deposito } = props;

    const handleSelect = () => {
        handleSelectedCard(props, !isChecked);
      };

    return (
        <Card>
        <CardHeader>
            <input type="checkbox"
            checked={isChecked} onChange={handleSelect}
            />
            <CardTitle>{descripcion}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{codigo}</p>
            <p>{precio}$</p>
        </CardContent>
        <CardFooter>Deposito : {deposito}</CardFooter>
        </Card>
    );
    };