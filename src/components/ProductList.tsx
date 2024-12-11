import React, { useState } from "react";
import Producto from "@/types/Producto";
import ProductFilter from "@/components/ProductFilter";
import ProductDisplay from "@/components/ProductDisplay";

interface ProductoListProps {
  productos: Producto[];
}

const ProductoList: React.FC<ProductoListProps> = ({ productos }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  // Generar lista de categorías
  const categories = ["Todas", ...new Set(productos.map((p) => p.category))];

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === "Todas"
      ? productos
      : productos.filter((producto) => producto.category === selectedCategory);

  return (
    <section id="categories" className="product-list py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Explora Nuestro Catálogo</h2>
        
        {/* Filtros de productos */}
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Mostrar productos */}
        <ProductDisplay productos={filteredProducts} />
      </div>
    </section>
  );
};

export default ProductoList;
