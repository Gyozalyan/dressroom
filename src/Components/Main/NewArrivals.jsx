import styles from './Main.module.css'

const NewArrivals = () =>{

    const categories = ['ALL', 'WOMAN', 'MAN', 'ACCESSORIES', 'SHOES', 'KIDS']

    return(
        <div className={styles.allCategories}>
            <h2>NEW ARRIVALS</h2>
            <div className={styles.categories}>
          {
            categories.map((category, index)=>{
                return <a href='https://www.google.com/' key={index}> {category}</a> 
            })
          }
            
        </div>
        </div>
    )

}

export default NewArrivals