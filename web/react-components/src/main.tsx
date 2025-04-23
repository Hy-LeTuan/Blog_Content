import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import PageLayout from "./components/PageLayout.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PageLayout>
            <App />
        </PageLayout>
    </StrictMode>,
);
