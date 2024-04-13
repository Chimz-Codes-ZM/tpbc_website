import Layout from "./components/layout";
import Beliefs from "./sections/homepage/beliefs";
import Events from "./sections/homepage/events";
import Hero from "./sections/homepage/hero";
import Join from "./sections/homepage/join_us";

export default function Home() {
  return (
    <div className="relative bg-[#F0EEED]">
      <Layout>
        <Hero />
        <Join />
        <Beliefs />
        <Events />
      </Layout>
    </div>
  );
}
