import React from "react";
import { useState } from "react";
import validate from "./validate.js";

function Contact() {
  const initialState = {
    name: "",
    email: "",
    asunto: "",
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

  function handleSubmit(e) {
    e.preventDefault();
    //Enviar al back
    setInput(initialState);
  }

  return (
    <div className="contact" id="contact">
      <h2>Contacto</h2>
      <div>
        <p>
          Completa el siguiente formulario y me pondre en contacto lo más pronto
          posible.
        </p>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="Usuario"
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
              className={error.name && "danger"}
            />
          </div>
          {error.name && <p className="danger">{error.name}</p>}
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={input.email}
              placeholder="usuario@mail.com"
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
              className={error.email && "danger"}
            />
          </div>
          {error.email && <p className="danger">{error.email}</p>}
          <div>
            <label>Asunto: </label>
            <input
              type="text"
              name="asunto"
              value={input.asunto}
              placeholder="Asunto a tratar"
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
              className={error.asunto && "danger"}
            />
          </div>
          {error.asunto && <p className="danger">{error.asunto}</p>}
          <div>
            <label>Mensaje: </label>
            <textarea
              type="textarea"
              name="messaje"
              value={input.messaje}
              placeholder="Escribe aquí tu mensaje"
              onChange={(e) => handleOnChange(e)}
              onBlur={(e) => handleOnBlur(e)}
              className={error.messaje && "danger"}
            />
          </div>
          {error.messaje && <p className="danger">{error.messaje}</p>}
          <div>
            <button
              type="submit"
              disabled={
                !input.name ||
                !input.email ||
                !input.asunto ||
                !input.messaje ||
                Object.keys(error).length > 0
              }
            >
              {" "}
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
