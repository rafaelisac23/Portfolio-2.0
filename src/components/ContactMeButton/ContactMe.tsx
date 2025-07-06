import Link from "next/link";

export const ContactMe = () => {
  return (
    <Link
      href={"/contact"}
      className="bg-gray-950 text-white px-3 py-2 mt-4 rounded-lg shadow-2xl shadow-gray-950 hover:scale-105"
    >
      Entre em contato
    </Link>
  );
};
