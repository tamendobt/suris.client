import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";



export const AppRouter= ({children}) => 
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path= "/" element= {<Navigate to="/catalog"/>}></Route>
            <Route path= "/catalog" element = {<Catalog/>}></Route>
            <Route path= "*" element= {<Navigate to="/catalog"/>}></Route>
        </Routes>
        {children}
        </BrowserRouter>
    )
}