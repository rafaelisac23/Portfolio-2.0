import { useState } from "react";

export const SidebarOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o menu */}
      <button
        className="flex flex-col justify-center items-center w-10 h-10 m-4 p-2 bg-blue-700 rounded md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Overlay escuro atrás do menu */}
      {isOpen && (
        <div
          className="fixed inset-0 opacity-5 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu lateral sobreposto */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold bg-blue-700 text-white px-3 py-1 rounded-xl">
            Menu
          </h2>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Página 1
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Página 2
          </a>
        </nav>
      </aside>
    </>
  );
};
