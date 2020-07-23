import React from "react"

const TblDiscos = (props) => (

    <table>
        <thead>
            <tr>
                <th>Artista</th>
                <th>Álbum</th>
                <th>Ano</th>
                <th>Gravadora</th>
                <th>Gênero</th>
            </tr>
        </thead>
        <tbody>
            {props.discos.length > 0 ? (
                props.discos.map((disco) => (
                    <tr key={disco.id}>
                        <td>{disco.artista}</td>
                        <td>{disco.titulo}</td>
                        <td>{disco.ano}</td>
                        <td>{disco.gravadora}</td>
                        <td>{disco.genero}</td>
                        <td>
                            <button onClick={() => props.editDisco(disco)} className="button muted-button">Editar</button>
                            <button onClick={() => props.deleteDisco(disco.id)} className="button muted-button">X</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>Nenhum cadastro</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default TblDiscos