import { useEffect, useState } from "react";

const convertSecondsToHMS = (timeInSeconds) => {
  timeInSeconds = Number(timeInSeconds);

  const h = Math.floor(timeInSeconds / 3600);
  const m = Math.floor((timeInSeconds % 3600) / 60);
  const s = Math.floor((timeInSeconds % 3600) % 60);

  const hDisplay = h < 10 ? "0" + h : h;
  const mDisplay = m < 10 ? "0" + m : m;
  const sDisplay = s < 10 ? "0" + s : s;

  return `${hDisplay}:${mDisplay}:${sDisplay}`;
};

const Article = ({ title = "", children = null }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    console.log("ARTICLE IS MOUNTED");

    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    // cleanup quand le composant est démonté
    return () => {
      console.log("ARTICLE UNMOUNTED");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <p>Temps de lecture : {convertSecondsToHMS(elapsedTime)}</p>
      {children}
    </div>
  );
};

export default Article;
