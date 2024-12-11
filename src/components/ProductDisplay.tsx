import React from "react";
import Producto from "@/types/Producto";
import ProductoCard from "@/components/ProductCard";

interface ProductDisplayProps {
  productos: Producto[];
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ProductDisplay;
