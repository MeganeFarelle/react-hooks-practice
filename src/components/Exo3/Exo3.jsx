import { useEffect, useState } from "react";
import CardList from "./CardList";
import ScrollTopButton from "./ScrollTopButton";

export default function Exo3() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white p-6">
      {/* HEADER */}
      <h1 className="text-center text-4xl font-bold text-blue-300">
        Introduction to React
      </h1>

      <div className="max-w-4xl mx-auto mt-8">
        <CardList users={users} />
      </div>

      <ScrollTopButton />
    </div>
  );
}
