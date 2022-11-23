import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent } from '@mui/material'
import './about.scss';
// import Image from 'react-bootstrap/Image';

function About(props)
 {
    return (
      <>
      <section>
       <h2>We are Apple Seed Studios</h2>
       <p>  We are a group of Software Developers dedicated to growing our skills. Planting one seed at a time, we can grow an orchard, and project by project, we can make a craft.</p>
       </section>
      {/* <Image/> */}
      <Carousel className="Carousel">
        <Card className="Card">
          <img
            className="d-block w-100"
            src="../../../Adrian.jpg"
            alt="Adrian Cosme-Halverson"
          />
          < CardContent>
          <div>
            <h3>Adrian Cosme-Halverson</h3>
            <p>Fire support specialist 4+ years of honorable military service. Seasoned individual with professional work experience in a variety of dynamic and fast-paced environments. Experience in a multitude of work environments form professional office experience to months long austere environment training.</p>
            </div>
          </ CardContent>
        </Card>

        <Card className="Card">
          <img
            className="d-block w-100"
            src="../../../Rhea.jpg"
            alt="Rhea Mimi Carillo"
          />

          < CardContent>
            <h3>Rhea Mimi Carillo</h3>
            <div>
            <p>
            Hi friend! I'm Rhea :cherry_blossom:. I use she/her pronouns. My background is in civil engineering but I'm now enjoying my work as a professional computer-puzzle-solver :). I like working with Java, Python, and primarily the MERN stack with JavaScript.
            </p>
            </div>
          </ CardContent>
        </Card>
        
        <Card className="Card">
          <img
            className="d-block w-100"
            src="../../../Robert.png"
            alt="Robert McCreary"
          />

          < CardContent>
            <h3>Robert McCreary</h3>
            <div>
            <p>
            Hi! I'm interested in building tech for the education space. I like using the MERN stack, Ruby on Rails, and Python to apps for students and teachers.
            </p>
            </div>
          </ CardContent>
        </Card>

        <Card className="Card">
          <img
            className="d-block w-100"
            src="../../../Jordan.jpg"
            alt="Jordan Yamada"
          />

          < CardContent>
          <div>
            <h3>Jordan Yamada</h3>
            <p>
              Howdy. I'm a Marine Vet turned Software Developer. My strong sense of curiousity lead me here. I love the mix of creative and puzzle solving elements that coding brings about. I'm also an avid lover of all things pumpkin spiced.
            </p>
            </div>
          </ CardContent>
        </Card>
      </Carousel>
      </>
    )
  }

export default About;
