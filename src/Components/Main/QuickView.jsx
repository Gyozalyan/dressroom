import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Main.module.css";
import 'aos/dist/aos.css'
import ProductModal from "./ProductModal";
import { useState } from "react";

const QuickView = () => {
  const products = [
    {
      image:
        "https://preview.colorlib.com/theme/karl/img/product-img/product-1.jpg.webp",
      price: '$39.9',
      description: "Fashion Dress",
    },
    {
      image:
      "https://preview.colorlib.com/theme/karl/img/product-img/product-2.jpg.webp",
      price: '$39.9',
      description: "Fashion Dress",
    },
    {
      image:
      "https://preview.colorlib.com/theme/karl/img/product-img/product-3.jpg.webp",
      price: '$39.9',
      description: "Fashion Dress",
    },
    {
      image:
      "https://preview.colorlib.com/theme/karl/img/product-img/product-5.jpg.webp",
      price: '$39.9',
      description: "Fashion Dress",
    },
    {
      image:
      "https://preview.colorlib.com/theme/karl/img/product-img/product-4.jpg.webp",
      price: '$39.9',
      description: "Fashion Dress",
    },
    {
      image:
      "https://preview.colorlib.com/theme/karl/img/product-img/product-6.jpg.webp",
      price: '$39.9',
      description: "Fashion Dress",
    },
  ];

  const [isShown, setIsShown] = useState(false)
  const [imageAddress, setImageAddress] = useState('')

  const onHide =()=>{
    setIsShown(false)
  }

  return (
    <Container> 
      <Row>
        {products.map((product, index) => {
          return (
            <Col xs={12} md={4} lg={4} className={styles.galleryItem} key={index} id={index} >
              <div className={styles.productImg} data-aos="fade-up" data-aos-delay={index * 200}>
                <img src={product.image} alt="fashion" />

                    <div className={styles.productQuickView}>
                        <a href="#"
                         onClick = {(event)=>{
                            event.preventDefault()
                            setIsShown(true)
                            setImageAddress(product.image)
                         }}
                         
                         >
                        +
                        </a>
                    </div>

              </div>
              
              <div className={styles.description}>
                    <h4>{product.price}</h4>    
                    <h5>{product.description}</h5>
                    <Button variant="success">Add to card</Button>
                </div>
            </Col>
          );
        })}
      </Row>
    <ProductModal isShow={isShown} onHide={onHide} image={imageAddress}/>
    </Container>
  );
};

export default QuickView;
