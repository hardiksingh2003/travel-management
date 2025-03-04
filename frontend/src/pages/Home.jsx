import React from 'react'
import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'

import Subtitle from './../shared/subtitle'
import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import NewsLetter from '../shared/Newsletter'

const Home = () => {
   return (
     <>
       {/* ========== HERO SECTION ========== */}
       <section>
         <Container>
           <Row>
             <Col lg="6">
               <div className="hero__content">
                 <div className="hero__subtitle d-flex align-items-center">
                   <Subtitle subtitle={"Prepare, Explore, and Discover:"} />
                   <img src={worldImg} alt="" />
                 </div>
                 <h1>
                   Your Gateway to Seamless Travel—Plan, Book, and Explore with{" "}
                   <span className="hightlight"> Ease!</span>
                 </h1>
                 <p>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                   Molestiae tempora dignissimos, animi praesentium molestias
                   perferendis porro expedita delectus. Soluta natus porro.
                 </p>
               </div>
             </Col>

             <Col lg="2">
               <div className="hero__img-box">
                 <img src={heroImg} alt="" />
               </div>
             </Col>
             <Col lg="2">
               <div className="hero__img-box hero__video-box mt-4">
                 <video src={heroVideo} alt="" controls />
               </div>
             </Col>
             <Col lg="2">
               <div className="hero__img-box mt-5">
                 <img src={heroImg02} alt="" />
               </div>
             </Col>

             <SearchBar />
           </Row>
         </Container>
       </section>
       {/* ============================================================== */}

       {/* ==================== HERO SECTION START ====================== */}
       <section>
         <Container>
           <Row>
             <Col lg="3">
               <h5 className="services__subtitle">What we serve</h5>
               <h2 className="services__title">We offer our best services</h2>
             </Col>
             <ServiceList />
           </Row>
         </Container>
       </section>

       {/* ========== FEATURED TOUR SECTION START ========== */}
       <section>
         <Container>
           <Row>
             <Col lg="12" className="mb-5">
               <Subtitle subtitle={"Explore"} />
               <h2 className="featured__tour-title">Our featured tours</h2>
             </Col>
             <FeaturedTourList />
           </Row>
         </Container>
       </section>
       {/* ========== FEATURED TOUR SECTION END =========== */}

       {/* ========== GALLERY SECTION START ============== */}
       <section>
         <Container>
           <Row>
             <Col lg="12">
               <Subtitle subtitle={"Gallery"} />
               <h2 className="gallery__title">
                 Visit our customers tour gallery
               </h2>
             </Col>
             <Col lg="12">
               <MasonryImagesGallery />
             </Col>
           </Row>
         </Container>
       </section>
       {/* ========== GALLERY SECTION END ================ */}

       <NewsLetter />
     </>
   );
}

export default Home