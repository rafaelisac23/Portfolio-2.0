import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar Desktop */}
      <nav className="hidden md:flex  w-[70%] xl:w-[40%] justify-around items-center fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg py-3 z-50 ">
        <button className="bg-blue-800 px-4 py-1 rounded-md text-white shadow-xl hover:scale-105">
          RAFAEL
        </button>

        <div className="flex w-2/4 justify-around items-center">
          <Link
            href={"/contact"}
            className={
              path === "/contact"
                ? "bg-gray-950 px-2 py-2 rounded-lg text-white shadow-xl"
                : "hover:bg-gray-100 hover:px-2 hover:py-2 hover:rounded-lg hover:text-black hover:shadow-xl "
            }
          >
            Contatos
          </Link>
          <Link
            href={"/projects"}
            className={
              path === "/projects"
                ? "bg-gray-950 px-2 py-2 rounded-lg text-white shadow-xl"
                : "hover:bg-gray-100 hover:px-2 hover:py-2 hover:rounded-lg hover:text-black hover:shadow-xl "
            }
          >
            Projetos
          </Link>
          <Link
            href={"/skills"}
            className={
              path === "/skills"
                ? "bg-gray-950 px-2 py-2 rounded-lg text-white shadow-xl"
                : "hover:bg-gray-100 hover:px-2 hover:py-2 hover:rounded-lg hover:text-black hover:shadow-xl  "
            }
          >
            Skills
          </Link>
        </div>

        <Link
          href={"/"}
          className={
            path === "/"
              ? "bg-gray-950 px-2 py-2 rounded-lg text-white shadow-xl hover:scale-105"
              : "hover:bg-gray-100 hover:px-2 hover:py-2 hover:rounded-lg hover:text-black hover:shadow-xl "
          }
        >
          Meu Resumo
        </Link>
      </nav>

      {/* Botão hamburguer (Mobile) */}
      <button
        className="flex flex-col justify-center items-center w-10 h-10 p-2 bg-blue-700 rounded md:hidden fixed top-3 left-3 z-50"
        onClick={() => setIsOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Conteúdo com padding-top suficiente */}
      {/* Estrutura para fixar o footer na base */}
      <div className="min-h-screen flex flex-col">
        {/* Conteúdo com padding-top e que ocupa espaço restante */}
        <main className="pt-20 md:pt-24 flex-grow">{children}</main>

        {/* Footer fixado ao fim da tela quando o conteúdo for curto */}
        <footer className="w-full text-center py-4 text-[12px] sm:text-sm text-gray-500 bg-black">
          © {new Date().getFullYear()} Rafael Isac. Todos os direitos
          reservados.
        </footer>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu lateral mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
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
          <Link
            href="/"
            className={
              path === "/"
                ? "block text-black hover:text-blue-500"
                : `block text-gray-700 hover:text-blue-500`
            }
          >
            Meu resumo
          </Link>
          <Link
            href="/contact"
            className={
              path === "/contact"
                ? "block text-black hover:text-blue-500"
                : `block text-gray-700 hover:text-blue-500`
            }
          >
            Contatos
          </Link>
          <Link
            href="/projects"
            className={
              path === "/projects"
                ? "block text-black hover:text-blue-500"
                : `block text-gray-700 hover:text-blue-500`
            }
          >
            Projetos
          </Link>
          <Link
            href="/skills"
            className={
              path === "/skills"
                ? "block text-black hover:text-blue-500"
                : `block text-gray-700 hover:text-blue-500`
            }
          >
            Skills
          </Link>
        </nav>
      </aside>
    </>
  );
};
