import React, { useState } from 'react'
import axios from 'axios'

import TblDiscos from './tables/TblDiscos'
import AddDiscoForm from './forms/AddDiscoForm'
import EditDiscoForm from './forms/EditDiscoForm'


const App = () => {

	const estadoInicial = { id: 0, artista: '', titulo: '', ano: '', gravadora: '', genero: '' }

	//placeholder
	var discosData = [
		{ id: -1, artista: 'Tiririca', titulo: 'Dança da Rapadura', ano: '1997', gravadora: 'Sony Music', genero: 'Comédia' },
	]
	
	axios.get('http://localhost:3001/getDiscos').then((response) => {
		
		for (let index = 0; index < response.data.length; index++) {
			
			response.data[index].id = index
			discosData.push(response.data[index])		
		}
	}).catch((error) => {
		console.error(error)
	})
	
	const [arrayDiscos, setDiscos] = useState(discosData)
	const [editing, setEditing] = useState(false)
	const [currentDisco, setCurrentDisco] = useState(estadoInicial)

	console.log(arrayDiscos)

	//adiciona disco
	const addDisco = (disco) => {
		disco.id = arrayDiscos.length + 1
		setDiscos([...arrayDiscos, disco])	//append
	}

	//deleta disco por id
	const deleteDisco = (id) => {
		setEditing(false)

		setDiscos(arrayDiscos.filter((disco) => disco.id !== id))
	}

	//edita a linha selecionada
	const editDisco = (disco) => {
		setEditing(true)

		setCurrentDisco({ id: disco.id, artista: disco.artista, titulo: disco.titulo, ano: disco.ano, gravadora: disco.gravadora, genero: disco.genero })
	}

	//refresh
	const updateDisco = (id, updatedDisco) => {
		setEditing(false)

		setDiscos(arrayDiscos.map((disco) => (disco.id === id ? updatedDisco : disco)))
	}

	return (
		<div className="container">
			<h1>DB discos</h1>
			<div className="flex-row">
				<div className="flex-large">

					{editing ? (
						<div>
							<h2>Editar disco</h2>
							<EditDiscoForm
								setEditing={setEditing}
								currentDisco={currentDisco}
								updateDisco={updateDisco}
							/>
						</div>
					) : (
							<div>
								<h2>Adicionar disco</h2>
								<AddDiscoForm addDisco={addDisco} />
							</div>
						)}
				</div>
				<div className="flex-large">
					<h2>Cadastrados</h2>
					<TblDiscos discos={arrayDiscos} editDisco={editDisco} deleteDisco={deleteDisco}/>					
				</div>
			</div>
		</div>
	)
}

export default App