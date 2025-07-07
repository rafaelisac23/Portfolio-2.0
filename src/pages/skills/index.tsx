import { CardSkill } from "@/components/CardSkill/CardSkill";
import { Layout } from "@/components/layout/Layout";
import {
  CardSkillLanguageData,
  CardSkillFrontEndData,
  CardSkillDataBaseData,
  CardSkillToolsData,
} from "@/utils/data/CardSkillData";

const Page = () => {
  return (
    <div className="w-full ">
      <Layout>
        <div className="w-full  flex flex-col justify-center items-center ">
          <h1 className="font-semibold text-black text-2xl mt-4 mb-6">
            Minhas Skills e Stacks
          </h1>
          {/*Conteudo Skills Mobile*/}
          <div className="w-full flex flex-col  justify-center items-center lg:hidden">
            <CardSkill CardSkillData={CardSkillLanguageData} />
            <CardSkill CardSkillData={CardSkillFrontEndData} />
            <CardSkill CardSkillData={CardSkillDataBaseData} />
            <CardSkill CardSkillData={CardSkillToolsData} />
          </div>
          {/*Conteudo Skills Mobile*/}

          {/*Conteudo Desktop*/}
          <div className="w-full border flex justify-center">
            {/*parte branca */}
            <div className="w-[1000px] bg-white flex-col p-2 rounded-lg">
              {/*head */}
              <div className="flex gap-1 w-full ">
                <div className="bg-gray-200 min-w-64  h-10 pl-1">Categoria</div>
                <div className="bg-yellow-500 flex-1">Skills&Tools</div>
              </div>
              {/*head */}

              {/*body */}
              <div className="bg-blue-500">b</div>
              {/*body */}
            </div>
            {/*parte branca */}
          </div>
          {/*Conteudo Desktop*/}
        </div>
      </Layout>
    </div>
  );
};

export default Page;
