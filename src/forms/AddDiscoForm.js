import React, { useState } from 'react'

const AddDiscoForm = (props) => {


    const initialFormState = { id: null, artista: '', titulo: '', ano: '', gravadora: '', genero: '' }
    const [disco, setDisco] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setDisco({ ...disco, [name]: value })
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (!disco.titulo || !disco.artista) return      //adiciona apenas se ambos os campos album/artista estiverem preenchidos

            props.addDisco(disco)
            setDisco(initialFormState)
        }}
        >
            <label>Artista</label>
            <input type="text" name="artista" value={disco.artista} onChange={handleInputChange} />
            <label>Álbum</label>
            <input type="text" name="titulo" value={disco.titulo} onChange={handleInputChange} />
            <label>Ano</label>
            <input type="text" name="ano" value={disco.ano} onChange={handleInputChange} />
            <label>Gravadora</label>
            <input type="text" name="gravadora" value={disco.gravadora} onChange={handleInputChange} />
            <label>Gênero</label>
            <input type="text" name="genero" value={disco.genero} onChange={handleInputChange} />
            <button>Adicionar novo</button>
        </form>
    )
}

export default AddDiscoForm