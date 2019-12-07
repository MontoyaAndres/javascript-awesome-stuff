import React from "react";
import dynamic from "next/dynamic";

import Card from "../components/Card";

const DynamicContact = dynamic(() => import("../components/Contact"), {
  ssr: false
});

function index() {
  return (
    <>
      <style jsx>{`
        .font-black {
          color: rgb(33, 33, 33);
          font-family: "Gordita-Bold", sans-serif;
          font-weight: 500;
        }

        .fadeIn {
          animation-name: fadeIn;
          animation-duration: 1000ms;
          animation-fill-mode: both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>
      <div className="bg-white shadow">
        <h1 className="text-5xl lg:text-6xl font-black text-center pt-24 fadeIn">
          Nuestros servicios.
        </h1>

        <Card
          title="Consultorías y estrategias."
          image="/Consultoria.png"
          imageAlt="Consultoria"
          information={[
            {
              title: "Auditoria UI/UX",
              description:
                "Entiende como puedes abordar los problemas desde la perspectiva de tus usuarios, identifica oportunidades y crea productos innovadores que sean escalables visualmente y fáciles de usar."
            },
            {
              title: "Estrategia de producto",
              description:
                "Entiende como puedes abordar los problemas desde la perspectiva de tus usuarios, identifica oportunidades y crea productos innovadores que sean escalables visualmente y fáciles de usar."
            },
            {
              title: "Metodologías agiles",
              description:
                "Entiende como puedes abordar los problemas desde la perspectiva de tus usuarios, identifica oportunidades y crea productos innovadores que sean escalables visualmente y fáciles de usar."
            }
          ]}
        />

        <Card
          title="Diseño."
          image="/Diseno.png"
          imageAlt="Diseño"
          information={[
            {
              title: "Branding",
              description:
                "Construimos marcas con personalidad especialmente diseñada para atraer y enamorar a tus usuarios/clientes. Miramos todos los puntos necesarios: Competencias, estrategia de comunicación, implementación, etc."
            },
            {
              title: "Diseño UI/UX",
              description:
                "Creamos experiencias digitales consistentes que basados en las necesidades de tus usuarios/clientes den como resultado interfaces de usuario atractivas y fáciles de usar."
            },
            {
              title: "Prototipado",
              description:
                "Diseñamos prototipos de productos digitales tan clicables que parecerán la versión final. Úsalo para testear con tus usuarios, descubre cosas interesantes y mejóralo."
            }
          ]}
        />

        <Card
          title="Desarrollo."
          image="/Desarrollo.png"
          imageAlt="Desarrollo"
          information={[
            {
              title: "Sitios web",
              description:
                "Diseñamos y desarrollamos sitios web que cuenten una historia apegada a tu marca enfocado en cumplir tus objetivos. Recabar datos o vende un producto/servicio."
            },
            {
              title: "Aplicaciones web",
              description:
                "Diseñamos y desarrollamos aplicaciones web simples y complejas con enfoque en UX y escalabilidad. Construimos software que no apesta y que es fácil de mantener."
            },
            {
              title: "Aplicaciones progresivas",
              description:
                "Diseñamos y desarrollamos aplicaciones web progresivas que funcionan como nativas de Android y iOs, pero sin toda la complejidad de desarrollar para cada dispositivo. Enfoque en mantenimiento y escalabilidad."
            }
          ]}
        />

        <DynamicContact />
      </div>
    </>
  );
}

export default index;
