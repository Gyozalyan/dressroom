import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Main.module.css'
// import './styles.css';
import '../../App.css'

function ShowAccessoriesBags() {
  return (
    <Container
      style={{ margin: 0, padding: 0, width: '100%', 'maxWidth': '100%' }}
    >
      <Row style={{ margin: 0, padding: 0 }}>
        

        <Col
          className={`${styles.shopaccessories} ${styles.hovering1}`}
          style={{
            backgroundImage:
              'url("https://preview.colorlib.com/theme/karl/img/bg-img/bg-2.jpg.webp")',
          }}
        >
          <div className={styles.content}>
            <h6 className={styles.onAccessories}> ON ACCESSORIES</h6>
            <strong>
              <h1 className={styles.sale}>
                {' '}
                SALE <br />
                30%
              </h1>
            </strong>
            <button
                        className={styles.actionButton}
                       
                       
                      > Shop Now </button>
          </div>
        </Col>
        <Col
          className={`${styles.shopaccessories} ${styles.hovering2}`}
          style={{
            backgroundImage:
              'url("https://preview.colorlib.com/theme/karl/img/bg-img/bg-3.jpg.webp")',
          }}
        >
          <div className={styles.content}>
            <h6 className={styles.onAccessories}>
              {' '}
              IN BAGS EXCEPTING THE NEW COLLECTION
            </h6>
            <strong>
              <h1 className={styles.sale}>
                {' '}
                DESIGNER <br />
                BAGS
              </h1>
            </strong>
            <button
                        className={styles.actionButton}
                       
                       
                      > Shop Now </button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowAccessoriesBags
