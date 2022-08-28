import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
  const data = [
  {
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    image: "/images/model-s.jpg"

  },
  {
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    image: "/images/model-x.jpg"
  },
  {
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    image: "/images/model-y.jpg"
  },
  {
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    image: "/images/model-3.jpg"
  },
  {
    title: "Solar Panels",
    description: "Lowest Cost Solar Panels in America",
    leftBtnText: "Order Now",
    rightBtnText: "Learn More",
    image: "/images/solar_panel.jpg"
  },
  {
    title: "Solar Roof",
    description: "Produce Clean Energy From Your Roof",
    leftBtnText: "Order Now",
    rightBtnText: "Learn More",
    image: "/images/solar-roof.jpg"
  },
  {
    title: "Accessories",
    description: "",
    leftBtnText: "Shop Now",
    rightBtnText: "",
    image: "/images/accessories.jpg"
  }

]


  return (
    <Container>
      {
          data.map(item => (
            <Section key={item.title} {...item} />
          )
        )
      }
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
