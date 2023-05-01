import React, { useRef } from "react";
import { useState } from "react";
import validate from "./validate.js";
import emailjs, { init } from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();
  const initialState = {
    user_name: "",
    user_email: "",
    message: "",
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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p90uwjy",
        "template_q7rdisd",
        form.current,
        "JTkpBPGkQn8Cs1mdP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mensaje enviado, gracias por contactarme.",
      showConfirmButton: false,
      timer: 4000,
    });
    setInput(initialState);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col bg-background lg:py-28 pt-20 pb-8" id="contact">
        <div className="flex flex-col text-white items-center ">
          <div className="mb-5">
            <p className="text-center text-4xl font-bold">Contacto</p>
          </div>
          <div className="pb-10 md:mx-0 mx-10">
            <p className="md:font-bold  md:text-lg text-justify">
              Completa el siguiente formulario y me pondre en contacto lo más
              pronto posible.
            </p>
          </div>
          <div className="flex bg-cards md:px-20 md:pt-10 md:pb-10 py-8 px-10 rounded-xl  items-center">
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
              <div className="flex md:flex-row flex-col items-center ">
                <div className="flex mb-3 md:mr-3">
                  <input
                    className="rounded-md md:p-4  py-4 px-8 text-background bg-[#EEEEEE]  focus:outline-secondary"
                    type="text"
                    name="user_name"
                    value={input.user_name}
                    placeholder="Empresa / Nombre"
                    onChange={(e) => handleOnChange(e)}
                    onBlur={(e) => handleOnBlur(e)}
                  />
                </div>

                <div className="flex mb-3">
                  <input
                    className="rounded-md md:p-4  py-4 px-8 text-background bg-[#EEEEEE]  focus:outline-secondary"
                    type="email"
                    name="user_email"
                    value={input.user_email}
                    placeholder="Email"
                    onChange={(e) => handleOnChange(e)}
                    onBlur={(e) => handleOnBlur(e)}
                  />
                </div>
              </div>
              {error.user_name && (
                <p className="text-red-700 font-bold text-center">
                  {error.user_name}
                </p>
              )}
              {error.user_email && (
                <p className="text-red-700 font-bold text-center">
                  {error.user_email}
                </p>
              )}

              <div className="flex flex-col pb-5">
                <textarea
                  className="rounded-md pb-40 md:px-2 py-3 px-8 text-background bg-[#EEEEEE] focus:outline-secondary"
                  name="message"
                  value={input.message}
                  placeholder="Escribe aquí tu mensaje"
                  onChange={(e) => handleOnChange(e)}
                  onBlur={(e) => handleOnBlur(e)}
                />
              </div>
              {error.message && (
                <p className="text-red-700 font-bold text-center">
                  {error.message}
                </p>
              )}

              <div className="flex flex-col items-center">
                <button
                  className="bg-primary hover:bg-secondary p-3 rounded-xl text-xl font-bold w-40 text-black "
                  type="submit"
                  value="Send"
                  disabled={
                    !input.user_name ||
                    !input.user_email ||
                    !input.message ||
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
    </React.Fragment>
  );
}

export default Contact;
