import styles from "./DetailPage.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const DetailPage = () => {
    const {id} = useParams();
    const [breed, setBreed] = useState({})

    //recopilar la informacion de la API con el axios
    useEffect(() => {
		axios(`http://localhost:3001/dogs/${id}`).then(({ data }) => {
			if (data.name) {
				setBreed(data);
			} else {
				window.alert('No hay razas con ese ID');
			}
		});
		return setBreed({});
	}, [id]);
    //Renderizado
    return(
        <div className={styles.container}>
            <div className={styles.box}>
				<h1 className={styles.tittle}>{breed.name}</h1>
                <div className={styles.imageAndDataContainer}>
                    <img className={styles.img} src={breed.image} alt={breed.name} />
                    <div className={styles.infoContainer}>
                        <div className={styles.information}>
                            <div className={styles.dataContainer}>
                                <h2 className={styles.subtitle} >WEIGHT</h2>
                                <div className={styles.dataMinMax}>
                                    <div className={styles.data}>
                                        <h3>Min</h3>
                                        <p className={styles.dataText}>{breed.minWeight}Kg</p>
                                    </div>
                                    <div className={styles.data}>
                                        <h3>Max</h3>
                                        <p className={styles.dataText}>{breed.maxWeight}Kg</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.dataContainer}>
                                <h2 className={styles.subtitle}>HEIGHT</h2>
                                <div className={styles.dataMinMax}>
                                    <div className={styles.data}>
                                        <h3>Min</h3>
                                        <p className={styles.dataText}>{breed.minHeight}cm</p>
                                    </div>
                                    <div className={styles.data}>
                                        <h3>Max</h3>
                                        <p className={styles.dataText}>{breed.maxHeight}cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.dataContainer}>
                                <h2 className={styles.subtitle}>LIFE SPAN</h2>
                                <div className={styles.data}>
                                    <p className={styles.dataText}>{breed.life_span}years</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.temperamentsContainer}>
                            {/* se agrega el signo ?, para que sea un ternario y verificar si el dato origin existe en todos los personajes */}
                            <h2 className={styles.subtitle}>TEMPERAMENTS</h2>
                            <ul className={styles.temperaments}>
                                {
                                    breed.Temperaments?.map((temperament,index) => {
                                        return(
                                            <li key={`${temperament.id}+${index}`} className={styles.temperament}>{temperament.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>    
				</div>
			</div>
        </div>
    )
}

export default DetailPage;