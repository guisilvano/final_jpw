import React, { useState, useEffect } from 'react'

const EditDiscoForm = (props) => {
    const [disco, setDisco] = useState(props.currentDisco)

    useEffect(() => {
        setDisco(props.currentDisco)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setDisco({ ...disco, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateDisco(disco.id, disco)
            }}
        >
            <label>Artista</label>
            <input
                type="text"
                name="artista"
                value={disco.artista}
                onChange={handleInputChange}
            />
            <label>Album</label>
            <input
                type="text"
                name="titulo"
                value={disco.titulo}
                onChange={handleInputChange}
            />
            <label>Ano</label>
            <input
                type="text"
                name="ano"
                value={disco.ano}
                onChange={handleInputChange}
            />
            <label>Gravadora</label>
            <input
                type="text"
                name="gravadora"
                value={disco.gravadora}
                onChange={handleInputChange}
            />
            <label>Gênero</label>
            <input
                type="text"
                name="genero"
                value={disco.genero}
                onChange={handleInputChange}
            />
            <button>Atualizar</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancela
        </button>
        </form>
    )
}

export default EditDiscoForm