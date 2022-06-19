import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CustomLayout from '../components/layout';
// styles
import { pageStyles } from '../css/styles';
import './../css/styles.scss';
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <CustomLayout pageTitle="Home Page">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/dog.webp"
        />

        <Carousel axis="vertical">
          <div>
            <StaticImage alt="Test Image"
              src="../images/image2.webp" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <StaticImage alt="Test Image1" src="../images/image3.webp" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <StaticImage alt="Test Image3" src="../images/image4.webp" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>

      </CustomLayout>
    </main>
  )
}

export default IndexPage
