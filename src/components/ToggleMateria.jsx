import React, { useState } from "react";

const ToggleMateria = ({ materia, mesas, planDeEstudio }) => {
	const baseURL = "https://www.google.com/calendar/render?action=TEMPLATE";

	// Estado para controlar la visibilidad del contenido adicional
	const [isVisible, setIsVisible] = useState(false);

	// Función para alternar la visibilidad
	const toggleVisibility = () => {
		setIsVisible(prevState => !prevState);
	};

	// Formato de fecha para mostrar de forma consistente
	const formatDate = (date) => new Date(date).toLocaleDateString("es-ES");

	// Componente para manejar los botones "Ver más" y "Agendar"
	const renderMesasButtons = () => (
		<>
			<md-filled-tonal-button
				disabled={!mesas?.length}
				className="w-full text-on-primary"
			>
				Ver Mas
			</md-filled-tonal-button>
			<md-filled-button
				href={mesas?.length > 0 && mesas[0]?.fecha
					? `${baseURL}&text=Mesa+de+${materia}&dates=${new Date(mesas[0].fecha).toISOString().replace(/-|:|\.\d+/g, "")}`
					: "#"}
				target="_blank"
				rel="noopener noreferrer"
				className="w-full"
				disabled={!mesas?.length}
			>
				Agendar
			</md-filled-button>
		</>
	);

	// Componente para mostrar información de la mesa
	const renderMesaInfo = () => (
		<div className="bg-secondary text-on-secondary rounded-2xl p-2.5 flex flex-col lg:flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
			{mesas?.length > 0 ? (
				<>
					<p className="text-title-medium relative flex-1 flex items-center justify-center">
						Próxima Mesa:
					</p>
					<p className="text-center text-title-small relative flex items-center justify-center">
						{mesas[0].fecha > new Date()
							? formatDate(mesas[0].fecha)
							: formatDate(new Date())}
					</p>
				</>
			) : (
				<p className="text-title-medium relative flex-1 flex items-center justify-center">
					No hay fechas
				</p>
			)}
		</div>
	);

	return (
		<div className="flex flex-col gap-2.5 h-min w-full">
			<div className="bg-on-primary rounded-br-[14px] rounded-bl-[14px] p-1.5 flex flex-row gap-2.5 items-center w-full justify-center self-stretch shrink-0 relative">
				<h3 className="text-primary text-center text-headline-small relative flex-1 flex items-center justify-center text-pretty">
					{materia}
				</h3>
				<md-outlined-button class="hidden lg:block" trailing-icon onClick={toggleVisibility}>
					{!isVisible ? (
						<>
							Mas Info
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" slot="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
						</>
					) : (
						<>
							Menos Info
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" slot="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
						</>)}

				</md-outlined-button>
				<md-outlined-icon-button toggle class="lg:hidden" trailing-icon onClick={toggleVisibility}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" slot="selected"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
				</md-outlined-icon-button>
			</div>

			{isVisible && (
				<div className="flex w-full flex-col sm:flex-row gap-2 p-2">
					{/* Información sobre las mesas */}
					<div className="flex-1 border border-outline rounded-3xl p-2 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden">
						{renderMesaInfo()}
						<div className="flex flex-col lg:flex-row gap-2.5 w-full">
							{renderMesasButtons()}
						</div>
					</div>

					{/* Información sobre el plan de estudio */}
					<div className="flex-2 border border-outline rounded-3xl p-2 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden">
						<div className="bg-secondary text-on-secondary rounded-2xl p-2.5 flex flex-col lg:flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
							<div className="text-title-medium relative self-stretch flex items-center justify-center">
								Plan de Estudio:
							</div>
						</div>

						<div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
							<div className="flex flex-col lg:flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
								<md-filled-tonal-button
									disabled={!planDeEstudio}
									className="w-full text-on-primary"
								>
									Ver
								</md-filled-tonal-button>
								<md-elevated-button
									disabled={!planDeEstudio}
									className="w-full"
								>
									Descargar
								</md-elevated-button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ToggleMateria;
