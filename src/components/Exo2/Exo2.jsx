import { useState } from "react";
import TitleComponent from "./TitleComponent";
import Countdown from "./Countdown";

export default function Exo2() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ 
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px",
      background: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Modifier le document.title
      </h1>

      <label style={{ display: "block", marginBottom: "15px" }}>
        <input 
          type="checkbox" 
          checked={show} 
          onChange={() => setShow(!show)} 
          style={{ marginRight: "8px" }}
        />
        Afficher le champ titre
      </label>

      {show && <TitleComponent />}

      <Countdown />
    </div>
  );
}
