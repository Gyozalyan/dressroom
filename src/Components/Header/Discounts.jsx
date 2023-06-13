import { Container } from "react-bootstrap"
import '../../App.css'
import styles from './Header.module.css'


const Discounts = () =>{

    return(

        <div className={styles.discounts}>
             <div className={`${styles.box} ${styles.grey}`}>
        <div className={styles.bigText}>Free Shipping & Returns</div>
        <div className={styles.smallText}>BUY NOW</div>
      </div>
      <div className={`${styles.box} ${styles.pink}`}>
        <div className={styles.bigText}>20% Discount for all dresses</div>
        <div className={styles.smallText}>USE CODE: Colorlib</div>
      </div>
      <div className={`${styles.box} ${styles.darkGrey}`}>
        <div className={styles.bigText}>20% Discount for students</div>
        <div className={styles.smallText}>USE CODE: Colorlib</div>
      </div>    
        </div>

    )

}

export default Discounts