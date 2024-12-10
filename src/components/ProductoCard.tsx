import React from "react";
import Swal from "sweetalert2";
import Producto from "@/types/Producto"; // Ruta absoluta para la interfaz
import Image from "next/image";

interface productosProps {
  producto: Producto;
}

const ProductoCard: React.FC<productosProps> = ({ producto }) => {
  // Usa el src directamente desde el objeto producto
  const imageSrc = `/${producto.image}`;

  const showDetails = () => {
    Swal.fire({
      title: `<span class="swal-title">${producto.name}</span>`,
      html: `<div class="swal-html">Descripcion: ${producto.description}<br>Precio ${formattedPrice}<br>Tallas: ${producto.size}</div>`,
      imageUrl: imageSrc,
      imageWidth: 300,
      imageAlt: `${producto.name} Poster`,
      confirmButtonText: "COMPRAR",
      cancelButtonText: "Cerrar",
      showCancelButton: true,
      customClass: {
        confirmButton: 'swal-button',
        cancelButton: 'swal-button-cancel'
      },
      preConfirm: () => {
        Swal.fire({
          title: "COMPRA EXITOSA!!!",
          text: "Tu compra ha sido exitosa, pronto recibirás un correo electrónico con los detalles de tu compra.",
          icon: "success"
        });
      }
    });
  };
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(producto.price);
  return (
    <div className="movie-card" onClick={showDetails}>
      <div className="image-container">
        <Image
          src={imageSrc}
          width={768}
          height={768}
          alt={producto.name}
        />
      </div>
      <h3>{producto.name}</h3>
      <p >{formattedPrice}</p>
    </div>
  );
};

export default ProductoCard;
