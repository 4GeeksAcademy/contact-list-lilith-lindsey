import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const agendaSlug = "lilith9313";


  const createAgenda = () => {
    fetch(`${store.baseUrl}agendas/${agendaSlug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: agendaSlug }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log("Agenda created:", data))
      .catch((err) => console.error(err));
  };


  const createContact = () => {
    fetch(`${store.baseUrl}agendas/${agendaSlug}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Contact created:", data);
        getAllContacts(); 
      })
      .catch((err) => console.error(err));
  };

 
  const updateContact = (id) => {
    fetch(`${store.baseUrl}agendas/${agendaSlug}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Contact updated:", data);
        getAllContacts();
      })
      .catch((err) => console.error(err));
  };

  
  const deleteContact = (id) => {
  fetch(`${store.baseUrl}agendas/${agendaSlug}/contacts/${id}`, {
    method: "DELETE",
  })
    .then((resp) => {
      if (!resp.ok) throw new Error("Delete failed");
      return resp.text(); 
    })
    .then(() => {
      console.log(`Contact ${id} deleted`);
      getAllContacts(); 
    })
    .catch((err) => console.error("Error deleting:", err));
};


  const getAllContacts = () => {
    fetch(`${store.baseUrl}agendas/${agendaSlug}/contacts/`)
      .then((resp) => resp.json())
      .then((data) => {
        setContacts(data.contacts || []);
        console.log("Contacts loaded:", data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    createAgenda();
    getAllContacts();
  }, []);

  return (
    <div className="text-center mt-5">

      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <button onClick={createContact}>Add Contact</button>
      </div>

      
      <div>
        {contacts.map((contact) => (
          <div key={contact.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <p>
              <b>{contact.name}</b> — {contact.phone} — {contact.email} — {contact.address}
            </p>
            <button onClick={() => updateContact(contact.id)}>Update</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
