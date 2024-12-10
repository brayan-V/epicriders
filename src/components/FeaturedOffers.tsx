import React from "react";
import Producto from "@/types/Producto";
import ProductoCard from "@/components/ProductoCard";
interface OfertasProps {
  productos: Producto[];
}
const FeaturedOffers: React.FC<OfertasProps> = ({ productos }) => (
    <section className="offers py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ofertas Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
  
  export default FeaturedOffers;
  