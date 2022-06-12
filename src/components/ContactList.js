import React, { useState } from "react";
import AddContact from "./AddContact";
import Contact from "./Contact";

const ContactList = () => {
  const [contactList, setContactList] = useState([
    {
      name: "messi",
      number: "3716666666",
      isOnline: true,
      contactId: new Date(),
    },
    {
      name: "pepito",
      number: "9999999999",
      isOnline: false,
      contactId: new Date(),
    },
    {
      name: "pepa",
      number: "333333333333",
      isOnline: true,
      contactId: new Date(),
    },
  ]);

  const removeContact = (contactId) => {
    const newList = contactList.filter(
      (contact) => contact.contactId !== contactId
    );
    setContactList([...newList]);
  };

  const addContact = (nameContact, phoneNumber) => {
    const newList = [
      ...contactList,
      {
        name: nameContact,
        number: phoneNumber,
        isOnline: false,
        contactId: new Date(),
      },
    ];
    setContactList(newList);
  };

  const changeStatus = (status, id) => {
    const newList = contactList.map(contact => contact.contactId === id ? {name: contact.name, number: contact.number, isOnline : status, contactId: contact.contactId} : contact);
    setContactList(newList);
  };
  return (
    <div>
      <AddContact addContact={addContact} ContactList={ContactList} />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone number</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <Contact
          contactList={contactList}
          removeContact={removeContact}
          changeStatus={changeStatus}
        />
      </table>
    </div>
  );
};

export default ContactList;
