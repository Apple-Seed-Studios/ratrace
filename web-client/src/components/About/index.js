import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent } from '@mui/material'
import './about.scss';
// import Image from 'react-bootstrap/Image';

function About(props)
 {
    return (
      <>
       <h2>ABOUT US PAGE...</h2>
      {/* <Image/> */}
      <Carousel className="Carousel">
        <Card>
          <img
            className="d-block w-100"
            src="../../../Adrian.jpg"
            alt="Adrian Cosme-Halverson"
          />
          < CardContent>
            <h3>Adrian Cosme-Halverson</h3>
            <p>Fire support specialist 4+ years of honorable military service. Seasoned individual with professional work experience in a variety of dynamic and fast-paced environments. Experience in a multitude of work environments form professional office experience to months long austere environment training.</p>
          </ CardContent>
        </Card>

        <Card>
          <img
            className="d-block w-100"
            src="../../../Rhea.jpg"
            alt="Rhea Mimi Carillo"
          />

          < CardContent>
            <h3>Rhea Mimi Carillo</h3>
            <p>
              Air traffic control 5+ years of honorable military service. Experience in troubleshooting, time management, and risk management.
            </p>
          </ CardContent>
        </Card>
        
        <Card>
          <img
            className="d-block w-100"
            src="../../../Robert.png"
            alt="Robert McCreary"
          />

          < CardContent>
            <h3>Robert McCreary</h3>
            <p>
              Air traffic control 5+ years of honorable military service. Experience in troubleshooting, time management, and risk management.
            </p>
          </ CardContent>
        </Card>
        <Card>
          <img
            className="d-block w-100"
            src="../../../Jordan.jpg"
            alt="Jordan Yamada"
          />

          < CardContent>
            <h3>Jordan Yamada</h3>
            <p>
              Air traffic control 5+ years of honorable military service. Experience in troubleshooting, time management, and risk management.
            </p>
          </ CardContent>
        </Card>
      </Carousel>
      </>
    )
  }

export default About;
