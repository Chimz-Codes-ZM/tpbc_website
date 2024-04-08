import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Welcome from "./sections/welcome";
import Layout from "./components/layout";

export default function Home() {
  return (
    <div className="relative bg-[#F0EEED]">
      <Layout>
      <div className="min-h-96 flex flex-cold justify-center items-center font-bold text-3xl text-secondary">
        Home Page
      </div>
      </Layout>
    </div>
  );
}
