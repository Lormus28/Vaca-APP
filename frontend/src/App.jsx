import "./App.css";
import { Amigos } from "./components/Amigos";
import { Gastos } from "./components/Gastos";
import { Grupos } from "./components/Grupos";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("amigos");
  const mostrarAmigos = ()=> setTab("amigos");
  const mostrarGastos = ()=> setTab("gastos");
  const mostrarGrupos = ()=> setTab("grupos");

  return(
    <div>
            <div>
                <span></span>
                <span>
                    Mi Vaquita
                </span>
                <span></span>
            </div>
            <ul>
                <li onClick={mostrarAmigos}>Amigos</li>
                <li onClick={mostrarGastos}>Gastos</li>
                <li onClick={mostrarGrupos}>Grupos</li>
            </ul>
            <div>
              {tab === "amigos" && <Amigos></Amigos>}
              {tab === "gastos" && <Gastos></Gastos>}
              {tab === "grupos" && <Grupos></Grupos>}
            </div>
        </div>
  )
}

export default App;
