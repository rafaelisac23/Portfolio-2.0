import ContactForm from "@/components/ContactForm/contactForm";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Contato!</title>
      </Head>
      <Layout>
        <div className=" flex flex-col mt-8  items-center  min-h-[475px] md:flex-row justify-center gap-10">
          <div className="flex flex-col w-[300px] ">
            <div>
              <h1 className="text-center font-semibold">
                Entre em contato através:
              </h1>

              <div className="flex flex-col justify-center items-center gap-8 pb-4">
                <a
                  href="https://wa.me/5512991901969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2  mt-8 bg-gray-950 text-white px-3 py-2  rounded-lg shadow-2xl shadow-gray-950 hover:scale-105 w-44 sm:w-56 sm:text-lg"
                >
                  <FaWhatsapp /> WhatsApp
                </a>

                <a
                  href="https://www.linkedin.com/in/rafael-isac-7b2270180/"
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-gray-950 text-white px-3 py-2  rounded-lg shadow-2xl shadow-gray-950 hover:scale-105 w-44 sm:w-56 sm:text-lg "
                >
                  <FaLinkedin /> Linkedin
                </a>

                <a
                  href="https://github.com/rafaelisac23"
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-gray-950 text-white px-3 py-2  rounded-lg shadow-2xl shadow-gray-950 hover:scale-105 w-44 sm:w-56 sm:text-lg"
                >
                  <FaGithub /> Github
                </a>
              </div>
            </div>
          </div>
          {/*Contatos */}
          {/*Email */}
          <div className="my-10">
            <ContactForm />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page;
