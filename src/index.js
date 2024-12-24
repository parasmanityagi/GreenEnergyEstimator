import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import ContextProvider from "./context/GeeContext";
let root = createRoot(document.getElementById('root'));

root.render(
    <ContextProvider>
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
        </BrowserRouter>
    </ContextProvider>
)
