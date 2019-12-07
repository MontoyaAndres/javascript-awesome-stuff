import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";

function Card({ title, image, imageAlt, information }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <>
      <style jsx>{`
        .bg-gray {
          background-color: rgb(248, 249, 250);
        }

        .bounce {
          animation-name: bounce;
          animation-duration: 1000ms;
          animation-delay: 50ms;
        }

        @keyframes bounce {
          0%,
          60%,
          75%,
          90%,
          100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: translate3d(0px, 3000px, 0px);
          }
          60% {
            opacity: 1;
            transform: translate3d(0px, -25px, 0px);
          }
          75% {
            transform: translate3d(0px, 10px, 0px);
          }
          90% {
            transform: translate3d(0px, -5px, 0px);
          }
          100% {
            transform: none;
          }
        }
      `}</style>

      <div ref={ref}>
        <div
          className={`bg-gray mx-4 md:mx-10 lg:mx-20 py-6 lg:py-10 my-20 rounded-lg border md:flex md:items-center ${
            inView ? "bounce" : ""
          }`}
        >
          <div className="px-4 md:px-12 md:w-2/5">
            <h2 className="font-black text-2xl md:text-3xl pb-10">{title}</h2>
            <img className="pb-6 md:px-0" src={image} alt={imageAlt} />
          </div>

          <div className="px-4 md:px-12 md:w-1/2">
            {information.map(({ title, description }, i) => (
              <Fragment key={i}>
                <h3 className="font-bold text-xl py-6">{title}</h3>
                <p className="pb-6 text-gray-800">{description}</p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
