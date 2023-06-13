import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './Main.module.css'

function ImgCarousel() {
  const [index, setIndex] = useState(0)
  const images = [
    'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ]

  const texts = [
    {
      class: 'text1',
      text1: '*Only today we offer free shipping',
      text2: 'Fashion trends',
      button: 'Shop now',
    },
    {
      class: 'text2',
      text1: '*Only today we offer free shipping',
      text2: 'SUMMER COLLECTION',
      button: 'CHECK COLLECTION',
    },
    {
      class: 'text3',
      text1: '*Only today we offer free shipping',
      text2: 'WOMEN FASHION',
      button: 'CHECK COLLECTION',
    },
  ]

  const handleSelect = (selectedIndex) => {
    const y = selectedIndex
    setIndex(y)
  }

  useEffect(() => {
    // AOS.refresh()

    setInterval(() => {
      AOS.init({
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: true,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });
    }, 100);
  }, [index])



  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        // onSelect={changeSlide}
        prevIcon={false}
        nextIcon={false}
        interval={2000}
        pause={false}
      >
        {images.map((image, imgindex) => {
          return (
            <Carousel.Item key={imgindex}>
              {texts.map((text, textIndex) => {
                if (textIndex === imgindex) {
                  return (
                    <div key={textIndex}>
                      <div
                        className={text.class}
                        data-aos="fade-up"
                        data-aos-delay="800"
                      ></div>

                      <h6
                        className="freeShippingtext"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        data-aos-anchor={text.class}
                      >
                        {text.text1}
                      </h6>
                      <h1
                        className="summerCollectionText"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-anchor={text.class}
                      >
                        {text.text2}
                      </h1>

                      <button
                        className={styles.actionButton}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-anchor={text.class}
                      >
                        {text.button}
                      </button>
                      <img
                        className="d-block w-100"
                        src={image}
                        data-aos="fade-up"
                        alt="img"
                      />
                    </div>
                  )
                }
              })}
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default ImgCarousel
