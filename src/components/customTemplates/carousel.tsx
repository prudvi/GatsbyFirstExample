import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import { Link, graphql } from 'gatsby'
let colorNames = [
  "#5D8AA8",
  "#FOF8FF",
  "#E32636",
  "#EFDECD",
  "#E52B50",
  "#CD2682",
  "#F19CBB",
  "#FFBF00",
  "#9966CC",
  "#464451",
  "#8DB600"
];
interface CarouselTemplateProps {
    pastDayIteration: any;
}

export const CarouselTemplate = (props: CarouselTemplateProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
    const pastDaysList = props.pastDayIteration(100);
  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text"
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            //background: "yellow"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 10,
            height: 20,
            minWidth: 20,
            alignSelf: "center",
            position: "absolute",
            textAlign: "center",
            right: 0,
            zIndex: 1000
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 10,
            height: 20,
            minWidth: 20,
            alignSelf: "center",
            position: "absolute",
            textAlign: "center",
            left: 0,
            zIndex: 1000
          }
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 8,
              width: 8,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 8,
              width: 8,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={25}
        //speed={400}
        delay={1000}
        //autoplay={true}
      >
        {pastDaysList.map((item: any, index: any) => {
          let val = index % 10;
          //const dateValueItem = item.value.split("-");
          return (
            <div
              style={{
                background: colorNames[val],
                width: 66,
                height: 30,
                border: "2px solid white",
                textAlign: "center",
                lineHeight: "30px",
                boxSizing: "border-box",
                color: "red",
                margin: 13,
                padding: 3,
                borderRadius: "20%"
              }}
              key={index}
              className={"carouselItem"}
            >

<Link to={`/security/${item.value}`} className="linkStyle">
{item.label}
              </Link>
              
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
