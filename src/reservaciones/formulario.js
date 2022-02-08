import React, { useState } from "react";
import Select from "react-select-virtualized";
import "./form.css";

export const Formulario = () => {
	const [invitado, setInvitado] = useState("");
	const [mostrarCantidadDeInvitados, setMostarCantidadDeInvitados] =
		useState(false);
	const [invitadosDeInvitado, setInvitadosDeInvidato] = useState("");
	const [rsvpRomance, setRsvpRomance] = useState(false);
	const [confirmados, setConfirmados] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (invitado !== "") {
			if (
				parseInt(confirmados) <= invitado.invitados &&
				parseInt(confirmados) > 0
			) {
				// console.log(
				// 	invitado.value,
				// 	invitado.invitados,
				// 	confirmados,
				// 	rsvpRomance
				// );
				alert("Gracias por tu confirmacion.");
			} else {
				alert("Favor de colocar la cantidad correcta.");
			}
		} else {
			alert("Favor de buscar y seleccionar tu Nombre.");
		}
	};

	const handleChange = (option) => {
		if (option !== null) {
			setInvitado(option);
			setMostarCantidadDeInvitados(true);
			setInvitadosDeInvidato(option.invitados);
		} else {
			setInvitado("");
			setMostarCantidadDeInvitados(false);
			setInvitadosDeInvidato("");
			setConfirmados(0);
		}
	};

	const options = [
		{
			value: 1,
			label: `guiyep`,
			invitados: 3,
		},
		{
			value: 2,
			label: `2guiyep`,
			invitados: 4,
		},
		{
			value: 3,
			label: `3guiyep`,
			invitados: 6,
		},
		{
			value: 4,
			label: `4guiyep`,
			invitados: 5,
		},
		{
			value: 5,
			label: `5guiyep`,
			invitados: 7,
		},
	];

	return (
		<>
			<div className="formulario-invitados">
				<label>Nombre de Invitado:</label>
				<Select
					options={options}
					value={invitado}
					onChange={(optionSelected) => {
						handleChange(optionSelected);
					}}
				/>
				<br />
				{mostrarCantidadDeInvitados && (
					<>
						<div>
							<label>Cantidad de Personas:</label>
							<span className="invitado">
								{invitadosDeInvitado !== "" && invitadosDeInvitado}
							</span>
						</div>
						<br />
						<div>
							<label>Personas Confirmadas:</label>
							<span className="invitado-confirmado">
								<input
									type="number"
									min="0"
									max={invitado.invitados}
									onChange={(e) => setConfirmados(e.target.value)}
								/>
							</span>
						</div>
						<br />
					</>
				)}

				<div className="form-check">
					<label className="form-check-label">
						Reservacion con Bodas Romance
					</label>
					<input
						type="checkbox"
						className="form-check-input"
						onChange={() => {
							setRsvpRomance(!rsvpRomance);
						}}
					/>
				</div>
				<br />
			</div>
			<div onClick={handleSubmit} className="btn-rsvp">
				{" "}
				Confirmar{" "}
			</div>
		</>
	);
};
