export default function Card({ user, open, onToggle }) {
  return (
    <div
      className="bg-[#1f1f1f] border border-gray-500 p-4 rounded-md cursor-pointer transition-all"
      onClick={onToggle}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold">{user.name}</h3>

        <div
          className="
            w-6 h-6 rounded-full bg-blue-400 
            flex items-center justify-center 
            text-black font-bold text-lg
          "
        >
          {open ? "−" : "+"}
        </div>
      </div>

      {/* CONTENT */}
      {open ? (
        <div className="text-gray-200 mt-3 text-sm leading-relaxed">
          <p><span className="font-semibold">Email :</span> {user.email}</p>
          <p>
            <span className="font-semibold">Adresse :</span>{" "}
            {user.address.street}, {user.address.city}
          </p>
        </div>
      ) : (
        <div className="text-gray-500 text-center mt-6">…</div>
      )}
    </div>
  );
}
