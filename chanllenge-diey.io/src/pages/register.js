import React from "react";

import useEmail from "../util/useEmail";
import Alert from "../components/Alert";

const Contact = () => (
  <>
    <img className="py-4" src="/Se_cliente.svg" alt="Se cliente" />

    <div className="py-8">
      <p className="font-bold">
        Llámanos <span className="text-gray-600">- + 52 33 26 20 86 08</span>
      </p>
      <p className="font-bold">
        Envía un email <span className="text-gray-600">- team@dohnny.com</span>
      </p>
    </div>
  </>
);

function register() {
  const { onSendEmail, isEmailSend, closeEmailAlert } = useEmail();

  return (
    <div className="flex flex-col lg:flex-row flex-wrap shadow">
      <style jsx>{`
        .text-black {
          color: rgb(32, 33, 36);
        }

        .font-bold {
          font-family: "Gordita-Bold", sans-serif;
          font-weight: 500;
        }

        .bg-black {
          background-color: rgb(33, 33, 33);
        }

        .contact-desktop {
          display: none;
        }

        .contact-mobile {
          display: block;
        }

        @media (min-width: 1024px) {
          .contact-desktop {
            display: block;
          }

          .contact-mobile {
            display: none;
          }
        }
      `}</style>

      <div className="bg-white p-10 lg:w-3/5">
        <div>
          {isEmailSend && <Alert closeAlert={closeEmailAlert} />}

          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl pb-8">
            Conviértete en nuestro cliente.
          </h2>
          <p className="text-black text-xl">
            Nos gusta involucrarnos por completo con nuestros clientes, eso
            quiere decir que la colaboración con nosotros puede ser larga. Los
            mejores resultados se obtienen trabajando juntos y por periodos
            largos. Ingresa tus datos en el siguiente formulario y en un par de
            días nuestro equipo se pondrá en contacto contigo. Sin compromisos.
          </p>
        </div>

        <div className="contact-desktop">
          <Contact />
        </div>
      </div>

      <div className="bg-black text-center px-12 py-8 lg:w-2/5">
        <h3 className="font-black text-3xl pb-10 text-white font-medium">
          Llena el formulario
        </h3>

        <form type="POST" onSubmit={onSendEmail}>
          <input
            className="bg-black border border-gray-600 placeholder-gray-300 text-gray-300 rounded w-full p-4 my-2"
            type="text"
            name="name"
            placeholder="Tu nombre"
          />

          <input
            className="bg-black border border-gray-600 placeholder-gray-300 text-gray-300 rounded w-full p-4 my-2"
            type="text"
            name="company"
            placeholder="Nombre de tu compañia"
          />

          <input
            className="bg-black border border-gray-600 placeholder-gray-300 text-gray-300 rounded w-full p-4 my-2"
            type="email"
            name="email"
            placeholder="Dirección Email"
          />

          <input
            className="bg-black border border-gray-600 placeholder-gray-300 text-gray-300 rounded w-full p-4 my-2"
            type="tel"
            name="tel"
            placeholder="Numero de teléfono"
          />

          <textarea
            className="bg-black border border-gray-600 placeholder-gray-300 text-gray-300 rounded w-full p-4 pb-10 my-2"
            type="text"
            name="description"
            placeholder="¿En qué podemos ayudarte?"
          />

          <div className="block text-right">
            <button
              type="submit"
              className="bg-white text-black px-16 py-2 mt-8 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div className="contact-mobile bg-white p-10">
        <Contact />
      </div>

      <div className="border border-b-1"></div>
    </div>
  );
}

export default register;
