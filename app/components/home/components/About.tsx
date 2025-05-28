import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-row justify-between px-10 xl:px-40">
      <div className="flex flex-col gap-5 lg:gap-10 lg:mt-[3rem]">
        <div>
          <p className="text-brand text-[18px] lg:text-[36px] font-bold md:leading-10">
            À PROPOS DE NOUS
          </p>
          <p className="text-brand text-[13px] lg:text-[24px] font-bold">
            DIGITALYNX, C&apos;EST QUOI ?
          </p>
        </div>
        <div className="lg:w-[500px] text-[12px] lg:text-[16px] flex flex-col gap-1 lg:gap-4 font-[300]">
          <p>
            Découvrez Digitalynx , L&apos;artisan de votre succès en ligne. Nous
            sommes une équipe passionnée, spécialisée dans le marketing digital,
            avec une expertise pointue en création de sites web. Chez
            Digitalynx, nous croyons fermement en la puissance d&apos;une
            présence en ligne pour propulser les entreprises vers de nouveaux
            sommets.
          </p>
          <p>
            Notre mission est de transformer vos idées en une présence numérique
            convaincante. Que vous soyez une start-up ambitieuse ou une
            entreprise établie cherchant à évoluer, notre expertise et notre
            créativité dans la conception de sites web sont à votre service.
          </p>
          <p>
            Chez Digitalynx, nous plaçons l&apos;accent sur l&apos;innovation,
            la qualité et la satisfaction client. Explorez avec nous les
            possibilités infinies du monde digital, et laissez-nous vous aider à
            atteindre vos objectifs en ligne.
          </p>
          <p>
            Découvrez comment nous pouvons transformer votre présence en ligne
            dès aujourd&apos;hui !
          </p>
        </div>
      </div>
      <video
        className="hidden lg:block rounded-[30px] w-[353px] h-[618px] object-cover object-[85%]"
        src={"/assets/videos/about.mp4"}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default About;
