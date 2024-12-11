import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToCategories = () => {
    const categorySection = document.getElementById("categories");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section {...{ className: "hero bg-cover bg-center text-white p-10" }}>
      <motion.div
        {...{
          className: "container mx-auto text-end",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          {...{
            className: "text-4xl md:text-6xl font-bold px-10",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          EpicRiders
        </motion.h1>
        <motion.p
          {...{
            className: "mt-4 text-lg md:text-2xl",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Pasión y competitividad en un solo lugar
        </motion.p>
        <motion.div
          {...{
            className: "mt-8",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9 }}
        >
          <motion.button
            {...{
              className:
                "inline-block px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300",
              onClick: scrollToCategories,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ¡Descubre Más!
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
