import React from "react";

import Refont from "@/public/assets/icons/refont.svg";
import ArrowClick from "@/public/assets/icons/arrow-click.svg";
import Seo from "@/public/assets/icons/seo.svg";
import Ecommerce from "@/public/assets/icons/ecommerce.svg";
import Responsive from "@/public/assets/icons/responsive.svg";
import Star from "@/public/assets/icons/star.svg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center services-background px-3 xl:px-2 my-5"
    >
      <div className="flex flex-col gap-3 w-[250px] lg:w-[550px]">
        <div>
          <p className="text-brand font-bold text-center text-[18px] lg:text-4xl">
            NOS SERVICES
          </p>
          <p className="text-brand font-medium text-[13px] lg:text-2xl text-center">
            RENFORCEZ VOTRE PRESENCE EN LIGNE
          </p>
        </div>
        <p className="text-[12px] lg:text-xl font-extralight text-center">
          Nous proposons plusieurs services afin de faire promouvoir votre
          identité digitale sur le web
        </p>
      </div>
      <div className="w-full mt-[5rem] lg:px-24">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-10 place-items-center">
          <ServiceCard
            icon={Refont}
            title="REFONTE DESIGN"
            description="Transformez votre présence en ligne avec notre service de refonte design l'élégance qui capte, la fonctionnalité qui convertit."
          />
          <ServiceCard
            icon={ArrowClick}
            title="CRÉATION DE SITE VITRINE"
            description="Alliez esthétique et efficacité pour marquer votre empreinte dans le monde digital."
          />
          <ServiceCard
            icon={Seo}
            title="REFERENCEMENT SEO"
            description="Boostez votre visibilité en ligne avec notre expertise en référencement SEO. Grimpez les classements, dominez les résultats de recherche, et laissez votre site briller devant votre audience -cible."
          />
          <ServiceCard
            icon={Ecommerce}
            title="CRÉATION DE SITE E-COMMERCE"
            description="Transformez vos visiteurs en clients avec notre service de création de sites e-commerce. Alliez design captivant et fonctionnalités avancées pour une expérience d'achat en ligne exceptionnelle"
          />
          <ServiceCard
            icon={Responsive}
            title="SITE RESPONSIVE"
            description="Adaptez-vous à chaque écran avec notre service de site responsive. Offrez une expérience utilisateur fluide, quel que soit le dispositif, pour conquérir votre audience où qu'elle soit."
          />
          <ServiceCard
            icon={Star}
            title="CRÉATION DE LOGO"
            description="Façonnez l'identité visuelle de votre marque avec notre service de création de logo."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
