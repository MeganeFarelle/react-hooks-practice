import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", checkVisibility);

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6
        bg-blue-500 text-white w-12 h-12 
        rounded-full shadow-xl text-3xl
        flex items-center justify-center
        hover:bg-blue-600 transition
      "
    >
      ↑
    </button>
  );
}
