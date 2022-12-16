import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contacto</h2>
      <p>
        Completa el siguiente formulario y me pondre en contacto lo más pronto
        posible.
      </p>

      <form>
        <div>
          <input required type="text" name="name" placeholder="Nombre" />
          <input required type="email" name="email" placeholder="Email" />
          <input required type="text" name="asunto" placeholder="Asunto" />
          <textarea
            required
            type="textarea"
            name="messaje"
            placeholder="Mensaje"
          />
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
