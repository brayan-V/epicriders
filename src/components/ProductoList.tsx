import React from "react";
import Producto from "@/types/Producto";
import ProductoCard from "@/components/ProductoCard";

interface ProductoListProps {
  productos: Producto[];
}

const ProductoList: React.FC<ProductoListProps> = ({ productos }) => {
  return (
    <section className="movie-list py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Explora Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductoList;
