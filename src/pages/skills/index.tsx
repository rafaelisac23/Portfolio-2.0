import { CardSkill } from "@/components/CardSkill/CardSkill";
import { ContactMe } from "@/components/ContactMeButton/ContactMe";
import { Layout } from "@/components/layout/Layout";
import { SkillTableItem } from "@/components/SkillsTableItem/SkillsTableItem";
import {
  CardSkillLanguageData,
  CardSkillFrontEndData,
  CardSkillDataBaseData,
  CardSkillToolsData,
  CardSkillCursosData,
} from "@/utils/data/CardSkillData";
import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="w-full ">
      <Head>
        <title>Skills!</title>
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full min-h-screen  flex flex-col justify-center items-center"
        >
          <Image
            alt=""
            src={"/images/skills.jpg"}
            width={250}
            height={250}
            className="md:mt-16 lg:mt-0 mt-8 sm:mt-0 shadow  rounded-lg  "
          />

          <div className="w-full  mt-8 sm:mt-6 flex flex-col justify-center items-center">
            <h1 className="w-[310px] sm:w-[500px] text-[20px] sm:text-[25px] lg:text-[29px] font-semibold text-center">
              "Um pouco do que sou capaz de construir!"
            </h1>
            <h2 className="w-[310px] text-[13px] lg:text-[14px] sm:w-[400px] lg:w-[500px] text-gray-800 text-center mt-4 sm:mt-2 lg:mt-2">
              Conheça um pouco das habilidades e aprendizados que adquiri com o
              tempo.
            </h2>

            <ContactMe />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full  flex flex-col justify-center items-center "
        >
          {/*Conteudo Skills Mobile*/}
          <div className="w-full flex flex-col  justify-center items-center lg:hidden">
            <CardSkill CardSkillData={CardSkillLanguageData} />
            <CardSkill CardSkillData={CardSkillFrontEndData} />
            <CardSkill CardSkillData={CardSkillDataBaseData} />
            <CardSkill CardSkillData={CardSkillToolsData} />
          </div>
          {/*Conteudo Skills Mobile*/}

          {/*Conteudo Desktop*/}
          <div className="w-full  hidden justify-center  lg:flex">
            {/*parte branca */}
            <div className="w-[1000px] bg-white flex-col p-2 rounded-lg">
              {/*head */}
              <div className="flex gap-1 w-full ">
                <div className="bg-gray-200 min-w-64  h-10 pl-1 flex items-center rounded-tl-md">
                  Categoria
                </div>
                <div className=" flex-1 bg-gray-200  h-10 pl-1 flex items-center rounded-tr-md">
                  Skills&Tools
                </div>
              </div>
              {/*head */}

              {/*body */}
              <div className=" flex flex-col">
                <SkillTableItem data={CardSkillLanguageData} />
                <SkillTableItem data={CardSkillFrontEndData} />
                <SkillTableItem data={CardSkillDataBaseData} />
                <SkillTableItem data={CardSkillToolsData} />
              </div>
              {/*body */}
            </div>
            {/*parte branca */}
          </div>
          {/*Conteudo Desktop*/}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full bg-white mt-20 flex flex-col justify-center items-center pt-10 pb-14"
        >
          <h1 className="text-[25px]">Cursos</h1>
          <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 mt-10 justify-items-center gap-2">
            {CardSkillCursosData.item
              .sort((a, b) => a.text.localeCompare(b.text))
              .map((item) => (
                <p className="text-[14px] md:text-[17px]  " key={item.id}>
                  <span className="font-semibold">
                    {item.text.split("-")[0]}
                  </span>
                  -{item.text.split("-")[1]}
                </p>
              ))}
          </div>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Page;
