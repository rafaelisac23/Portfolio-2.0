import { useState } from "react";

type Props = {
  open: (state: boolean) => void;
};

export const EmailModal = ({ open }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white  p-6 rounded-xl shadow-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Concluído</h2>
        <p className="mb-4">Email enviado com sucesso</p>
        <button
          onClick={() => open(false)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
