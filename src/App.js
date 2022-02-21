import "./App.css";
import { Formulario } from "./reservaciones/formulario";
import playa from "./img/playa.png";
import capilla from "./img/capilla.png";
import logoP from "./img/logo_pinterest.png";
import liverpool from "./img/liverpool.png";
import amazon from "./img/amazon.png";

function App() {
	return (
		<>
			<div className="portada" id="portada">
				<div className="container">
					{/* <!-- DONDE --> */}
					<div className="capilla-container">
						<h2 className="titulo-donde">Donde</h2>
						<h4>Ceremonia Religiosa</h4>
						<p>Capilla Nuestra Señora de Guadalupe</p>
						<p>5:00pm</p>
						<img src={capilla} className="capilla-img" />
					</div>
					<div className="playa-container">
						<h4>Recepción</h4>
						<p>Playa del hotel | Por definir</p>
						<p>8:00pm</p>
						<img src={playa} className="playa-img" />
					</div>
					{/* <!-- DONDE --> */}
					<hr />
					{/* <!-- DRESS CODE --> */}
					<div className="dress-container">
						<h2 className="titulo-dress-code">Dress Code</h2>

						<h4>Vestimenta Formal</h4>
						<br />
						<div>
							<span>Mujeres - Vestido largo</span>
							<p>(No corto)</p>

							<span>Hombres - Traje de lino</span>
							<p>(No Guayabera)</p>
						</div>
						<br />
						<p>* BLANCO SOLO PARA LOS NOVIOS *</p>
						<div>
							<p>Ejemplos de vestimenta:</p>
							<a href="https://pin.it/2QlVnSy" target="blank">
								<img
									src={logoP}
									width="40"
									height="40"
									className="logo-pinterest"
								/>
							</a>
						</div>
					</div>
					{/* <!-- DREES CODE --> */}
					<hr />
					{/* <!-- RESERVACIONES --> */}
					<h2 className="titulo-dress-code">Reservaciones</h2>
					<div className="reservaciones-container">
						<p className="romance">Romance Bodas en Playa</p>
						<p className="numero">WhatsApp: (81) 2031 4908</p>
						<p className="correo">Bodas1@bodasromance.com</p>
						<br />
						<p>Lista de precios</p>
						<a href="./files/precios.pdf" target="blank">
							Click aqui
						</a>
					</div>
					{/* <!-- RESERVACIONES --> */}
					<hr />
					{/* <!-- MESA DE REGALOS --> */}
					<h2 className="titulo-dress-code">Mesa de Regalos</h2>
					<div className="mesa-liverpool">
						<p>
							<b>No. Evento 50814933</b>
						</p>
						<img src={liverpool} alt="no-evento-mesa-regalos-liverpool" />
					</div>
					<div className="mesa-amazon">
						<a
							href="https://www.amazon.com.mx/wedding/arturo-garcia-fuentes-leslie-cecilia-rivera-ravelo-monterrey-august-2022/registry/3JXHNK4XTDB7L"
							target="blank"
						>
							<img src={amazon} alt="link-mesa-regalos-amazon" />
						</a>
					</div>
					<hr />
					{/* <!-- MESA DE REGALOS --> */}
					{/* <!-- CONFIRMACIONES --> */}
					<h2 className="titulo-dress-code">Confirmaciones</h2>
					<Formulario />
					{/* <!-- CONFIRMACIONES --> */}
				</div>
			</div>
		</>
	);
}

export default App;
