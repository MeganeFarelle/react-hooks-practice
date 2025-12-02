import { useState } from "react";
import Card from "./Card";

export default function CardList({ users }) {
  const [openIndex, setOpenIndex] = useState(0); // comme le PDF (2e carte ouverte)

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pb-20">
      {users.map((user, index) => (
        <Card
          key={user.id}
          user={user}
          open={openIndex === index}
          onToggle={() => toggleCard(index)}
        />
      ))}
    </div>
  );
}
