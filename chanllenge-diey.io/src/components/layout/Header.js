import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Alert from "../Alert";
import useEmail from "../../util/useEmail";

function header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { onSendEmail, isEmailSend, closeEmailAlert } = useEmail();

  function handleMenu() {
    setOpen(open => !open);
  }

  return (
    <>
      <style jsx>{`
        .button-bg-black {
          background-color: rgb(33, 33, 33);
        }

        @media (min-width: 1024px) {
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

      {isEmailSend && <Alert closeAlert={closeEmailAlert} />}

      <nav className="z-10 sticky top-0 flex justify-between flex-wrap bg-white py-3 shadow">
        <div className="flex items-center flex-shrink-0 pl-5 lg:pl-12">
          <img src="/Logo.svg" alt="Logo" />
        </div>

        <div className="block lg:hidden pl-5 lg:px-12">
          <button className="flex items-center px-3 py-2" onClick={handleMenu}>
            {open ? (
              <img src="/menu_close.svg" alt="menu close" />
            ) : (
              <img src="/menu_open.svg" alt="menu open" />
            )}
          </button>
        </div>

        <div
          className={`obsolute h-screen lg:h-10 border-t-2 lg:border-0 my-4 lg:my-0 px-6 md:px-8 lg:px-12 w-full lg:w-auto lg:block lg:flex-grow lg:flex lg:items-center ${!open &&
            "hidden"}`}
        >
          <div className="text-3xl py-2 lg:text-sm lg:flex-grow">
            <Link href="/">
              <a
                onClick={handleMenu}
                className={`block mt-4 lg:inline-block lg:mt-0 mr-8 ${
                  router.pathname === "/" ? "font-bold" : "text-gray-600"
                }`}
              >
                Servicios
              </a>
            </Link>
            <Link href="/register">
              <a
                onClick={handleMenu}
                className={`block mt-4 lg:inline-block lg:mt-0 ${
                  router.pathname === "/register"
                    ? "font-bold"
                    : "text-gray-600"
                }`}
              >
                Registrate
              </a>
            </Link>
          </div>
          <div className="my-10 lg:my-0 mx-4 lg:mx-0">
            <form
              type="POST"
              onSubmit={onSendEmail}
              className="flex flex-col lg:flex-row"
            >
              <input
                className="border border-black rounded inline-block text-sm px-6 py-3 lg:py-2 my-6 lg:my-0 text-gray-800 placeholder-gray-800"
                type="email"
                name="email"
                placeholder="Tu dirección de email"
              />
              <button
                type="submit"
                className="border border-black rounded-b-lg lg:rounded-r-lg button-bg-black text-white px-6 py-3 lg:py-2"
              >
                Hablemos
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default header;
