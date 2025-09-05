import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StallPageScreen } from "./screens/StallPageScreen/StallPageScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <StallPageScreen />
  </StrictMode>,
);
