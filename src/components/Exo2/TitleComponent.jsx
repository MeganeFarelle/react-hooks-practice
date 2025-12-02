import { useEffect, useState } from "react";

export default function TitleComponent() {
  const [title, setTitle] = useState("Titre par défaut");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ marginBottom: "10px" }}>Titre dynamique</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "100%",
          marginBottom: "20px"
        }}
        placeholder="Tapez un titre…"
      />

      <div 
        style={{ 
          height: "150vh", 
          border: "1px solid #ddd", 
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#888",
          marginBottom: "20px"
        }}
      >
        Faites défiler la page 👇
      </div>

      <p>Position Y du scroll : <strong>{Math.round(scrollY)}px</strong></p>
    </div>
  );
}
