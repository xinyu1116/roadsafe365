import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Teaser from "@/components/Teaser";
import Abstract from "@/components/Abstract";
import Highlights from "@/components/Highlights";
import Overview from "@/components/Overview";
import Statistics from "@/components/Statistics";
import Tasks from "@/components/Tasks";
import Examples from "@/components/Examples";
import Benchmark from "@/components/Benchmark";
import Download from "@/components/Download";
import BibTeX from "@/components/BibTeX";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Teaser />
        <Abstract />
        <Highlights />
        <Overview />
        <Statistics />
        <Tasks />
        <Examples />
        <Benchmark />
        <Download />
        <BibTeX />
      </main>
      <Footer />
    </>
  );
}
