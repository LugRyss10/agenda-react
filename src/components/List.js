import React, { useState } from "react";

const List = () => {
    const [contacts, setContacts] = useState([]);

    const  getContacts = () => {
        fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => setContacts(data))
    }

    const listContacts = () => {
        getContacts()

        return (
            <div class="table-responsive container">
                <div class="alert alert-secondary mt-4 mb-4" role="alert">
                    <h1> Contactos agregados: {contacts.length}</h1>
                </div>
                <table class="table border table-hover">
                    <thead class="thead-white text-white">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    {
                        contacts.map(contact => 
                            <tbody class="text-white">
                                <tr key={contact.telefono}>
                                    <td>{contact.nombre}</td>
                                    <td>{contact.apellido}</td>
                                    <td>{contact.telefono}</td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        )
    }
    
    return (
        <div>
        {listContacts()}
        </div>
    )
}

export default List