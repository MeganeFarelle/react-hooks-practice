import { useState } from "react";
import Article from "./Article";

export default function Exo1() {
  const [showArticle, setShowArticle] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Comprendre useEffect</h1>

      <button onClick={() => setShowArticle((prev) => !prev)}>
        {showArticle ? "Hide article" : "Show article"}
      </button>

      {showArticle && (
        <Article title="Hello world">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque
            architecto ipsum quibusdam, justo incidunt ipsa sed repudiandae
            aspernatur exercitationem.
          </p>
        </Article>
      )}
    </div>
  );
}
