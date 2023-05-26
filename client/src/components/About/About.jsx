import photo from "../../images/photo.png";
import styles from "./About.module.css";
const About = () => {
	return(
		<div className={styles.box}>
			<div className={styles.container}>
				<h1 className={styles.tittle}>Julio Sanchez</h1>
				<div className={styles.content}>
					<div className={styles.containerImage}>
						<img  className={styles.img} src={photo} alt="Julio" />
					</div>
					
					<div className={styles.containerText}>
						<h2 className={styles.subtittle}>About me</h2>
						<p className={styles.description}>Tecnico titulado en Mecatrónica Industrial. Actualmente me encuentro estudiando en el bootcamp de SoyHenry la carrera de Desarrollador Web Full Stack. Con conocimientos en las siguientes tecnologias: JavaScript, HTML, CSS, React, Redux, Nodejs, PostgreSQL y Sequelize. Soy una persona alegre, que le encantan los retos y poder aprender dia a dia mas cosas, quiero poder ayudar a que siga creciendo la comunidad de programadores y tambien poder seguir aprendiendo de ellos. </p>
					</div>
				</div>
				<div className={styles.buttons}>
					<button className={styles.github}>
						<svg xmlns="http://www.w3.org/2000/svg" className={styles.logoGithub} viewBox="0 0 64 64" width="48px" height="48px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/></svg>
					</button>
					<button className={styles.linkedin}>
						<svg xmlns="http://www.w3.org/2000/svg" className={styles.logoLinkedin} viewBox="0 0 48 48" width="48px" height="48px"><path d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5 C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0 c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"/></svg>
					</button>
				</div>
			</div>
		</div>
		
	)
}

export default About;