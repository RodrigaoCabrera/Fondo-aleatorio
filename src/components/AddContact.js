import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [nameContact, setNameContact] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');

  const addNewContact = (e) => {
    const data = e.target.value;
    const typeInput = e.target.name;
    if (typeInput === "name") {
      setNameContact(data);
    } else {
      setPhoneNumber(data);
    }    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(nameContact, phoneNumber);
    setNameContact('');
    setPhoneNumber('');
  };

  return (
    <form className="add-contact" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-contact-input"
        placeholder="Name"
        value={nameContact}
        name="name"
        onChange={addNewContact}
      />
      <input
        type="text"
        className="add-contact-input"
        placeholder="phone number"
        value={phoneNumber}
        name="phone"
        onChange={addNewContact}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddContact;
