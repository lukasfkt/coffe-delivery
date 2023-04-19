import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import "./global.scss";

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
