import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaPreview from "../components/pages/preview";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      <EdinaPreview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
