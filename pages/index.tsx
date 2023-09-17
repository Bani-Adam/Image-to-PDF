import PDFMerger from "../components/pdfmerger/components/PDFMerger/PDFMerger";
import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PDF Kita</title>
        <meta
          name="description"
          content="Konversi gambar ke PDF dan gabung PDF dengan cepat"
        />
      </Head>
      <div className="w-screen min-h-screen flex flex-col justify-center items-center flex-0 bg-white dark:bg-black lg:py-12 py-8">
        <Navbar />
        <main className="w-screen flex flex-row flex-1 justify-center items-center lg:px-16 px-8">
          <PDFMerger />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
