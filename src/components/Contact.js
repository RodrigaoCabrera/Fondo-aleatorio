import React from "react";
import "./contact.css";

const Contact = ({ contactList, removeContact, changeStatus }) => {
    
  return (
    <>
      {contactList.map((contact) => {
        return (
          <tbody key={contact.contactId}>
            <tr>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <div className={`status-btn ${contact.isOnline ? 'online' : 'offline'}`}>
                    <button onClick={() => changeStatus(!contact.isOnline, contact.contactId)}>
                        {contact.isOnline ? 'on' : 'off'}
                    </button>
                </div>
              </td>
              <td>
                <button className="btn delete-button" onClick={() => removeContact(contact.contactId)}>Delete</button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Contact;
