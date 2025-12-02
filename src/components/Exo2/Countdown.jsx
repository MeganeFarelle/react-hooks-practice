import { useEffect, useState } from "react";

export default function Countdown() {
  const [startValue, setStartValue] = useState(10);
  const [count, setCount] = useState(10);

  useEffect(() => {
    setCount(startValue);
  }, [startValue]);

  useEffect(() => {
    if (count <= 0) return;

    const interval = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div style={{ 
      padding: "20px", 
      background: "#fafafa",
      borderRadius: "6px",
      border: "1px solid #ddd"
    }}>
      <h2 style={{ marginBottom: "10px" }}>Compte à rebours</h2>

      <input
        type="number"
        value={startValue}
        onChange={(e) => setStartValue(Number(e.target.value))}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "120px",
          marginBottom: "15px"
        }}
      />

      <p style={{ fontSize: "20px" }}>
        Décompte : <strong>{count}</strong>
      </p>
    </div>
  );
}
