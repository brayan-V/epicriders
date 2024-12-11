import React from "react";

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-6 flex justify-center space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 border rounded ${
            selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
