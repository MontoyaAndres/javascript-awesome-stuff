import React from "react";
import useResize from "../util/useResize";

function Contact() {
  const { width } = useResize();

  return (
    <>
      <style jsx>{`
        .bg-black {
          background-color: #202124;
        }

        .font-bold-title {
          font-family: "Gordita-Bold", sans-serif;
          font-weight: 500;
          font-size: 2rem;
        }

        .contact-desktop {
          display: none;
        }

        .contact-mobile {
          display: block;
        }

        @media (min-width: 640px) {
          .font-bold-title {
            font-size: 2.8rem;
          }
        }

        @media (min-width: 768px) {
          .contact-desktop {
            display: block;
          }

          .contact-mobile {
            display: none;
          }

          .pt-40 {
            padding-top: 15rem;
          }

          .font-bold-title {
            font-size: 3.8rem;
          }

          .rounded-b-lg {
            border-bottom-left-radius: 0;
          }

          .rounded {
            border-radius: 0;
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
          }
        }
      `}</style>

      <div className="bg-black relative flex flex-col justify-center md:flex-row lg:justify-between">
        <div className="w-full sm:4/5 md:w-3/4 lg:w-3/5 px-4 sm:pl-8 pb-20 md:pb-64 pt-10 lg:pt-10 lg:pl-32 xl:pl-64 absolute md:relative order-2">
          <h2 className="font-bold-title text-white pb-8 md:pb-10">
            Comunícate con nosotros.
          </h2>

          <div className="flex flex-col md:flex-row">
            <input
              className="w-full md:w-3/5 border border-white rounded inline-block text-lg px-6 py-3 md:px-3 md:py-2 my-3 md:my-0 text-gray-100 placeholder-gray-100 bg-transparent"
              type="email"
              placeholder="Tu dirección de email"
            />
            <button className="border border-white rounded-b-lg md:rounded-r-lg bg-white text-black px-6 py-3 md:px-12 md:py-2 font-bold">
              Hablemos
            </button>
          </div>
        </div>

        <img
          className="w-full md:w-2/4 lg:w-2/5 order-1 pb-40 md:pb-0 md:absolute bottom-0 left-0"
          src={width >= 768 ? "/Contactanos_web.svg" : "/Contactanos_movil.svg"}
        />

        <img
          className="w-full md:w-2/5 lg:w-2/4 order-3 md:absolute md:bottom-0 md:right-0"
          src={
            width >= 768 ? "/Contactanos_web_2.svg" : "/Contactanos_movil_2.svg"
          }
        />
      </div>
    </>
  );
}

export default Contact;
