import { ContactMe } from "@/components/ContactMeButton/ContactMe";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { CardSkillProjectsData } from "@/utils/data/CardSkillData";
import { CardProject } from "@/components/CardProject/CardProject";

const Page = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Projetos!</title>
      </Head>
      <Layout>
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <Image
            alt=""
            src={"/images/construindo.jpg"}
            width={250}
            height={250}
            className="md:mt-16 lg:mt-0 mt-8 sm:mt-0 shadow  rounded-lg  "
          />

          <div className="w-full  mt-8 sm:mt-6 flex flex-col justify-center items-center">
            <h1 className="w-[310px] sm:w-[500px] text-[20px] sm:text-[25px] lg:text-[29px] font-semibold text-center">
              "Uma amostra concreta do meu trabalho e da minha dedicação como
              profissional."
            </h1>
            <h2 className="w-[310px] text-[13px] lg:text-[14px] sm:w-[400px] lg:w-[500px] text-gray-800 text-center mt-4 sm:mt-2 lg:mt-2">
              "Projetos que representam minha evolução e comprometimento com
              qualidade."
            </h2>

            <ContactMe />
          </div>
        </div>
        {/*parte branca */}
        <div className="w-full bg-white mt-4 pt-12">
          <h1 className=" text-center  text-2xl   font-semibold ">Projetos</h1>

          <section className="mt-14 flex flex-col  gap-12 w-full justify-center items-center pb-16">
            {CardSkillProjectsData.item.map((item, index) => (
              <CardProject item={item} key={index} />
            ))}
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Page;
