import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "pages/inicio";
import NovoVideo from "pages/novoVideo";
import PageNotFound from "pages/PageNotFound"; 

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/novoVideo" element={<NovoVideo />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
