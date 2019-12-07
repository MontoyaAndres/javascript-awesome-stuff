import React from "react";

function Footer() {
  return (
    <div className="bg-white shadow p-10 md:flex md:justify-around md:items-center">
      <div className="md:px-10 lg:pr-40">
        <img src="/Logo.svg" />

        <p className="text-gray-800 py-6">
          Hablemos -{" "}
          <a href="mailto:team@dohnny.com" className="">
            team@dohnny.com
          </a>
        </p>
      </div>

      <div className="sm:flex sm:flex-auto">
        <ul>
          <li className="text-black pl-2 pr-20 py-3">Servicios</li>
          <li className="text-black pl-2 pr-20 py-3">Nosotros</li>
          <li className="text-black pl-2 pr-20 py-3">Casos de éxito</li>
          <li className="text-black pl-2 pr-20 py-3">Keywords</li>
        </ul>
        <ul>
          <li className="text-black px-2 py-3">Dribbble</li>
          <li className="text-black px-2 py-3">Facebook</li>
          <li className="text-black px-2 py-3">Twitter</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
