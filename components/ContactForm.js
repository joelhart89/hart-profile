import React, { useState } from "react";
import Modal from "react-modal";

const ContactForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Form</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form className="p-4 bg-white rounded-lg shadow-md">
          <label className="block font-bold mb-2 text-gray-700">
            Name:
            <input
              className="form-input mt-1 block w-full"
              type="text"
              name="name"
            />
          </label>
          <label className="block font-bold mb-2 text-gray-700">
            Email:
            <input
              className="form-input mt-1 block w-full"
              type="email"
              name="email"
            />
          </label>
          <label className="block font-bold mb-2 text-gray-700">
            Message:
            <textarea className="form-input mt-1 block w-full" name="message" />
          </label>
          <input className="btn btn-blue mt-4" type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ContactForm;
