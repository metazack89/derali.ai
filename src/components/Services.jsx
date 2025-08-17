import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Publicidad digital",
      description:
        "Convertimos ideas audaces en soluciones digitales que conectan e inspiran...",
      icon: assets.ads_icon,
    },
    {
      title: "Gestión de contenidos",
      description: "Te ayudamos a ejecutar tu plan y entregar resultados.",
      icon: assets.marketing_icon,
    },
    {
      title: "Redacción de contenidos",
      description:
        "Te ayudamos a diseñar una estrategia de marketing que realmente da resultados.",
      icon: assets.content_icon,
    },
    {
      title: "Marketing en redes sociales",
      description:
        "Creamos contigo una presencia fuerte en redes sociales que genera interacción real.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="¿Cómo te ayudamos hoy?"
        desc="De la estrategia a la acción, diseñamos soluciones digitales que hacen crecer tu negocio."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
