import Image from "next/image";
import header from "./components/header"
import Hero from "./components/hero";
import Product from "./components/product";
import Testinomal from "./components/testinomal";
import Footer from "./components/footer";




export default function Home() {
  return (
    <main>
    <Hero/>
    <Product/>
    <Testinomal/>
    <Footer/>
    </main>
  );
}
