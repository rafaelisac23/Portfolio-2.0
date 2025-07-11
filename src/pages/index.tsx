import { ContactMe } from "@/components/ContactMeButton/ContactMe";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Meu Portfolio</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full min-h-screen flex flex-col justify-center items-center"
        >
          <Image
            alt=""
            src={"/images/Personagem.jpg"}
            width={250}
            height={250}
            className="md:mt-16 lg:mt-0 mt-8 sm:mt-0 shadow  rounded-lg  "
          />

          <div className="flex justify-center items-center  mt-12 not-even: gap-2 rounded-md bg-white shadow-2xl shadow-gray-950 border-gray-200 border w-[250px] p-1">
            <span className="font-bold  rounded-md text-red-500 bg-gray-300 px-1">
              Olá!
            </span>
            <p className="text-gray-700">
              Eu Sou{" "}
              <span className="font-semibold text-black">Rafael Isac</span>
            </p>
          </div>

          <div className="w-full  mt-8 sm:mt-6 flex flex-col justify-center items-center">
            <h1 className="w-[310px] sm:w-[500px] text-[20px] sm:text-[25px] lg:text-[29px] font-semibold text-center">
              "Eu construo soluções Front-end que realmente funcionam!"
            </h1>
            <h2 className="w-[310px] text-[13px] lg:text-[14px] sm:w-[400px] lg:w-[500px] text-gray-800 text-center mt-4 sm:mt-2 lg:mt-2">
              Código, bugs e café da manhã mantêm tudo funcionando. Transformo
              problemas complexos em soluções práticas e funcionais.
            </h2>

            <ContactMe />
          </div>
        </motion.div>
        {/*parte branca */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full bg-white mt-20 flex flex-col items-center py-20  "
        >
          <div className="flex flex-col gap-6 md:flex-row justify-center items-center">
            <div className="w-[300px] h-[300px] md:w-[330px] md:h-[330px] ">
              <img
                src="/images/PersonagemMesa.jpg"
                alt=""
                className="w-full h-full rounded-lg "
              />
            </div>

            <div className="w-[300px] sm:w-[400px]  mt-10 md:mt-0 ">
              <h1 className=" text-[25px] sm:text-[25px] lg:text-[29px] font-semibold text-center md:text-start">
                Um pouco sobre mim
              </h1>
              <h2 className="text-gray-800 text-center md:text-start">
                {"(&meu codigo)"}
              </h2>
              <p className="text-justify mt-3 text-gray-800 md:text-[14px]">
                Sou um desenvolvedor front-end que escreve código que não apenas
                funciona — ele resolve problemas. Trabalho principalmente com
                React e Next.js, criando interfaces modernas, rápidas e
                intuitivas.
              </p>
              <p className="text-justify mt-4  text-gray-800 md:text-[14px] mb-6 ">
                Gosto de construir soluções que escalem, façam sentido e se
                mantenham firmes sob pressão (na maioria das vezes). Desafios
                complexos? Pode mandar. Transformo caos em soluções limpas,
                funcionais e bem pensadas.
              </p>

              <ContactMe />
            </div>
          </div>
        </motion.div>

        {/*Curriculo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full py-14"
        >
          <div className="flex flex-col  justify-center items-center sm:flex-row sm:gap-4 ">
            <img
              src="/images/curriculo.jpg"
              alt=""
              className="w-[300px] h-[300px] rounded-lg shadow"
            />

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[25px] sm:text-[25px] lg:text-[29px] font-semibold mt-4">
                Ficou interessado ?
              </h1>

              <ContactMe />
              <p className="mt-7 font-semibold">Ou</p>
              <h2 className="font-semibold">Baixe meu curriculo:</h2>
              <a
                className="bg-gray-950 text-white px-3 py-2 mt-4 rounded-lg shadow-2xl shadow-gray-950 hover:scale-105"
                href="/curriculo.pdf"
                download
              >
                Currículo
              </a>
            </div>
          </div>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Page;
