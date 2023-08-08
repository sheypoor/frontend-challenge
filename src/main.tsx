import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/router.tsx";
import "./assets/styles/base-style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <main>
            <div className="main-content">
                <RouterProvider router={router} />
            </div>
        </main>
    </React.StrictMode>,
);
