import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebarRtl from "../components/pages/home-sidebar-rtl";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home Sidebar Rtl" />
      <HomeSidebarRtl />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
