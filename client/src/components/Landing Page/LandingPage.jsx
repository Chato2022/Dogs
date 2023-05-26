import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>HENRY DOGS</h1>
            <button className={styles.btn} onClick={()=>navigate("/home")}>Next Page</button>
        </div>
    )
}

export default LandingPage;