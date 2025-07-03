import { ReactNode } from "react";

export const Layout = () => {
  return (
    <div className="mt-6 px-6 hidden md:flex md:items-center sm:justify-center border">
      <menu className="flex container max-w-2/3">
        <div className="border border-blue-500">
          <button className="border border-orange-500">Rafael</button>
        </div>
        <div className="flex flex-1  justify-center items-center  border border-red-500">
          <div>Sobre</div>
          <div>Projetos</div>
          <div>Skills</div>
        </div>
        <div className="border border-yellow-500">Meu Resumo</div>
      </menu>
    </div>
  );
};
