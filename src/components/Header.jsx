import React, {useState} from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

let hamButton = document.getElementById('hamButton');



function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {
          cars && cars.map((car,index) => {
            return(
              <a href="" key={index}>{car}</a>

            )
          })
        }
        {/* <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
        <a href="">Solar Panel</a>
        <a href="">Solar Roof</a> */}
      </Menu>
      <RightMenu>
        <a href="" className='menu'>Shop</a>
        <a href="" className='menu'>Account</a>
        <MenuBtn onClick={() => {
          setIsOpen(!isOpen)
          hamButton.style.display = 'block'
        }}>Menu</MenuBtn>
      </RightMenu>
      <BurgerNav id='hamButton'>
        <CloseWrapper onClick={() => {
          setIsOpen(!isOpen)
          hamButton.style.display = 'none'
        }}>
          <CustomClose src='images/xmark-solid.svg'/>
        </CloseWrapper>
        <li><a href="">Model S</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Solar Roof</a></li>
        <li><a href="">Solar Panel</a></li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model 3</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

const RightMenu = styled.div`
  a {
    font-weight: 600;
    margin-right: 10px;
  } 
  @media (max-width: 1024px) {
    .menu{
      display: ${props => props.isOpen ? 'block' : 'none'};
    }
  }
`

const MenuBtn = styled.a`
  cursor: pointer;
  border-radius: 8px;
  padding: 3px 11px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    
  }
`

const CustomMenu = styled(MenuBtn)`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  display: none;
  transition: all 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  a{
    font-weight: 600;

  }
`

const CustomClose = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  /* position: absolute; */
  /* right: 20px; */

`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
