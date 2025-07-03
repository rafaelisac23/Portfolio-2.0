import { Layout } from "@/components/layout/Layout";
import { SidebarOverlay } from "@/components/layout/SideMenu";

const Page = () => {
  return (
    <div className="w-full border">
      <Layout />
      <SidebarOverlay />

      <div>a</div>
    </div>
  );
};

export default Page;
