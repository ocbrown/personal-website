import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Home from "@/components/Home";


const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Oliver Brown</title>
      </Head>
      <Home/>
      
    </MainLayout>
  );
};

export default Index;
