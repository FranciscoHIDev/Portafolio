import React, { useRef } from "react";
import { useState } from "react";
import validate from "./validate.js";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const initialState = {
    name: "",
    email: "",
    messaje: "",
  };
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState({});

  function handleOnChange(e) {
    // setInput((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleOnBlur(e) {
    let objError = validate(input);
    setError(objError);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       process.env.REACT_APP_SERVICE_ID,
  //       form.current,
  //       process.env.REACT_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <div className="flex flex-col bg-green-300 py-20" id="contact">
      <div className="flex flex-col text-white items-center ">
        <div className="mb-5">
          <p className="text-center text-4xl font-bold">Contacto</p>
        </div>
        <div className="pb-5">
          <p className="font-bold  text-lg">
            Completa el siguiente formulario y me pondre en contacto lo más
            pronto posible.
          </p>
        </div>
        <div className="flex bg-purple-500 px-20 pt-8 pb-10 rounded-xl  items-center">
          <form ref={form} onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-row ">
              <div className="flex mb-3 mr-3">
                <input
                  className="rounded-md p-4 text-orange-400"
                  type="text"
                  name="name"
                  value={input.name}
                  placeholder="Empresa / Nombre"
                  onChange={(e) => handleOnChange(e)}
                  onBlur={(e) => handleOnBlur(e)}
                />
              </div>

              <div className="flex mb-3">
                <input
                  className="rounded-md p-4 text-orange-400 "
                  type="email"
                  name="email"
                  value={input.email}
                  placeholder="Email"
                  onChange={(e) => handleOnChange(e)}
                  onBlur={(e) => handleOnBlur(e)}
                />
              </div>
            </div>
            {error.name && (
              <p className="text-red-700 font-bold text-center">{error.name}</p>
            )}
            {error.email && (
              <p className="text-red-700 font-bold text-center">
                {error.email}
              </p>
            )}

            <div className="flex flex-col pb-5">
              <textarea
                className="rounded-md pb-40 px-2 py-3 text-orange-400"
                name="messaje"
                value={input.messaje}
                placeholder="Escribe aquí tu mensaje"
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
              />
            </div>
            {error.messaje && (
              <p className="text-red-700 font-bold text-center">
                {error.messaje}
              </p>
            )}

            <div className="flex flex-col items-center">
              <button
                className="bg-red-300 p-3 rounded-xl text-xl font-bold w-40 "
                type="submit"
                disabled={
                  !input.name ||
                  !input.email ||
                  !input.messaje ||
                  Object.keys(error).length > 0
                }
              >
                {" "}
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
