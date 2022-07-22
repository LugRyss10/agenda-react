import React, {useState} from "react";

const Add = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {nombre, apellido, telefono};

        fetch ('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(() => {
            alert('Contacto Agregado')
        })
    }

    return (
        <nav>
            <div class="container card from-group">
                <h2 class="mt-3 mb-3"> Agregar contacto </h2>
                <form onSubmit={handleSubmit}>
                    <label class="font-weight-bold">Nombre</label>
                    <input class="form-control" type="text"  required value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <label class="font-weight-bold">Apellido</label>
                    <input class="form-control" type="text" required value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                    <label class="font-weight-bold">Telefono</label>
                    <input class="form-control" type="text" required value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                    <button class="btn btn-outline-secondary mt-2 mb-3 col-12"> Agregar </button>
                </form>
            </div>
        </nav>
    )
}

export default Add