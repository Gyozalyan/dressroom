import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
// import './styles.css';
import AOS from 'aos';
import '../../App.css'
import Carousel from 'react-bootstrap/Carousel';

function YourComponent() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Handle slide change event
    const carouselElement = document.getElementById('carouselExample');
    carouselElement.addEventListener('slide.bs.carousel', function (e) {
      const slideIndex = e.to;
      const slideElement = e.relatedTarget;

      // Remove existing AOS classes
      const aosElements = slideElement.querySelectorAll('[data-aos]');
      aosElements.forEach((element) => {
        element.classList.remove('aos-init', 'aos-animate');
      });

      // Initialize AOS on the current slide after a small delay
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
    });

    return () => {
      // Cleanup AOS on component unmount
      AOS.refreshHard();
    };
  }, []);

  return (
    <Carousel id="carouselExample" fade>
      <Carousel.Item>
          <div
                        className='text1'
                        data-aos="fade-up"
                        data-aos-delay="800"
                      ></div>

                      <h6
                        className="freeShippingtext"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        data-aos-anchor='.text1'
                      >
                       ggggg
                      </h6>
                      <h1
                        className="summerCollectionText"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-anchor='.text1'
                      >
                      sdfsdfsdf
                      </h1>

                      <button
                        className="actionButton"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-anchor='.text1'            >
                       sfhsfhsfhfh
                      </button>
        <img
          src='https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
          className="d-block w-100"
          alt="Slide 1"
          data-aos="fade-up"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div
                        className='text2'
                        data-aos="fade-up"
                        data-aos-delay="800"
                      ></div>

                      <h6
                        className="freeShippingtext"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        data-aos-anchor='.text2'
                      >
                       ggggg
                      </h6>
                      <h1
                        className="summerCollectionText"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-anchor='.text2'
                      >
                      sdfsdfsdf
                      </h1>

                      <button
                        className="actionButton"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-anchor='.text2'            >
                       sfhsfhsfhfh
                      </button>
        <img
          src='https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
          className="d-block w-100"
          alt="Slide 2"
          data-aos="fade-up"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div
                        className='text3'
                        data-aos="fade-up"
                        data-aos-delay="800"
                      ></div>

                      <h6
                        className="freeShippingtext"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        data-aos-anchor='.text3'
                      >
                       ggggg
                      </h6>
                      <h1
                        className="summerCollectionText"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-anchor='.text3'
                      >
                      sdfsdfsdf
                      </h1>

                      <button
                        className="actionButton"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-anchor='.text3'            >
                       sfhsfhsfhfh
                      </button>
        <img
          src='https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
          className="d-block w-100"
          alt="Slide 3"
          data-aos="fade-up"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default YourComponent;
