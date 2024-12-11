import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import FeaturedOffers from "@/components/FeaturedOffers";
import FooterComponent from "@/components/Footer";
import ProductoList from "@/components/ProductList";
import { Productos, Promociones } from "@/data/products";

export default function Home() {
  
  return (
    
    <>
      <Head>
        <title>EpicRiders</title>
        <meta
          name="description"
          content="Tu tienda de accesorios de equitación y deportes."
        />
      </Head>
      <HeroSection />
      <FeaturedOffers productos={Promociones} />
      <ProductoList productos={Productos} />
      <FooterComponent />
    </>
  );
}
