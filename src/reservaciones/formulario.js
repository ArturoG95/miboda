import React, { useEffect, useState } from "react";
import Select from "react-select-virtualized";
import {
	fetchRequest,
	fetchRequestWithFormData,
} from "../helpers/fetchRequest";
import "./form.css";

export const Formulario = () => {
	const [invitado, setInvitado] = useState("");
	const [mostrarCantidadDeInvitados, setMostarCantidadDeInvitados] =
		useState(false);
	const [invitadosDeInvitado, setInvitadosDeInvidato] = useState("");
	const [rsvpRomance, setRsvpRomance] = useState(false);
	const [confirmados, setConfirmados] = useState(0);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		getInvitados();
	}, []);

	const getInvitados = async () => {
		const resp = await fetchRequest("guests", "GET");
		const body = await resp.json();
		setOptions(
			body.invitados.map((invitado) => ({
				label: invitado.invitado,
				value: invitado.cantidadPersonas,
				key: invitado._id,
				rsvp: invitado.rsvpRomance,
				confirmadas: invitado.personasConfirmadas,
			}))
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (invitado !== "") {
			if (
				parseInt(confirmados) <= invitado.value &&
				parseInt(confirmados) > 0
			) {
				let confirmacion = {
					personasConfirmadas: parseInt(confirmados),
					rsvpRomance,
					confirmado: true,
					_id: invitado.key,
				};

				enviarConfirmacion(confirmacion);
			} else {
				alert("Favor de colocar la cantidad correcta.");
			}
		} else {
			alert("Favor de buscar y seleccionar tu Nombre.");
		}
	};

	const enviarConfirmacion = async (confirmacion) => {
		const resp = await fetchRequest(`update-confirmation`, confirmacion, "PUT");
		const body = await resp.json();
		if (body.ok) {
			alert(`Gracias por tu confirmacion, ${invitado.label}`);
			setInvitado("");
			setMostarCantidadDeInvitados(false);
			setInvitadosDeInvidato("");
			setConfirmados(0);
			setRsvpRomance(false);
		} else {
			alert(`Hablar con el Adminsitrador`);
		}
	};
	const handleChange = (option) => {
		if (option !== null) {
			setInvitado(option);
			setMostarCantidadDeInvitados(true);
			setInvitadosDeInvidato(option.value);
			setConfirmados(option.confirmadas);
			setRsvpRomance(option.rsvp);
		} else {
			setInvitado("");
			setMostarCantidadDeInvitados(false);
			setInvitadosDeInvidato("");
			setConfirmados(0);
			setRsvpRomance(false);
		}
	};

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
									max={invitado.value}
									value={confirmados ? confirmados : 0}
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
						checked={invitado.rsvp ? true : false}
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
