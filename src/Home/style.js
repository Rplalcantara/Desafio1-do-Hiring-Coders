import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerExterno = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-wrap: nowrap;
  width: 90vw;
  margin-bottom: 50px;
  padding-bottom: 50px;
`;

const flicker = keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {

text-shadow:
0 0 4px #ddd,
0 0 11px #ddd,
0 0 19px #ddd,
0 0 40px #BE1C1C,
0 0 80px #BE1C1C,
0 0 90px #BE1C1C,
0 0 100px #BE1C1C,
0 0 150px #BE1C1C;

}

20%, 24%, 55% {        
text-shadow: none;
}   
`;

export const ContainerHeader = styled.div`
  width: 90vw;
  max-width: 1600px;
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: right;
  
  @media (max-width: 600px) {
    margin-top: 2rem;
    justify-self: center;
  }
`;

export const MenuItem = styled(Link)`
  color: #ddd;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0;
  text-decoration: none;
`;

export const Title = styled.header`
  display: flex;
  justify-self: center;
  align-self: start;
  margin-top: 2rem;
  animation-name: ${flicker};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  font-size: 4rem;
  font-weight: bold;
  color: #ddd;
  text-shadow: 0 0 7px #ddd, 0 0 10px #ddd, 0 0 21px #ddd, 0 0 42px #be1c1c,
    0 0 82px #be1c1c, 0 0 92px #be1c1c, 0 0 102px #be1c1c, 0 0 151px #be1c1c;
`;

export const Container1 = styled.div`
  width: 90vw;
  max-width: 1600px;
  margin: 0 "auto";
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const flicker2 = keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {

text-shadow:
0 0 4px #ddd,
0 0 11px #ddd,
0 0 19px #ddd,
0 0 40px #BE1C1C,
0 0 80px #BE1C1C,
0 0 90px #BE1C1C,
0 0 100px #BE1C1C,
0 0 150px #BE1C1C;

}

20%, 24%, 55% {        
text-shadow: none;
}   
`;

export const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Child2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Cadrastro = styled.h2`
    justify-self: center;
    align-self: center;
    animation-name: ${flicker2};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    font-size: 3rem;
    font-weight: 600;
    color: #ccc;
    text-shadow:
    0 0 7px #ccc,
    0 0 10px #ccc,
    0 0 21px #ccc,
    0 0 42px #BE1C1C,
    0 0 82px #BE1C1C,
    0 0 92px #BE1C1C,
    0 0 102px #BE1C1C,
    0 0 151px #BE1C1C;
}
`;

export const Desc = styled.h3`
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #eee;
`;

export const Desc2 = styled.h4`
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ddd;
`;

const updown = keyframes`
  0% {top: 0px;}
  10% {top: 4px;}
  20% {top: 8px;}
  30% {top: 12px;}
  40% {top: 16px;}
  50% {top: 20px;}
  60% {top: 16px;}
  70% {top: 12px;}
  80% {top: 8px;}
  90% {top: 4px;}
  100% {top: 0px;}
`;

export const Image = styled.img`
  display: flex;
  width: 90%;
  position: relative;
  animation-name: ${updown};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2rem;
  justify-items: stretch;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const Input = styled.input`
  margin-right: "auto";
  color: #000;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: -sans-serif;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0.4rem;

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0;
    justify-self: stretch;
    align-self: stretch;
  }
`;

export const Btn = styled.button`
  margin-left: "auto";
  background-color: #be1c1c;
  color: #eee;
  font-size: 1rem;
  font-weight: bold;
  font-family: -sans-serif;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.4rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    margin-top: 5px;
    border-radius: 0;
    width: 100%;
    justify-self: stretch;
    align-self: stretch;
  }
`;

export const Obrigado = styled.h5`
  display: flex;
  justify-self: center;
  align-self: start;
  animation-name: ${flicker2};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  font-size: 3.5rem;
  font-weight: 600;
  color: #ccc;
  text-shadow: 0 0 7px #ccc, 0 0 10px #ccc, 0 0 21px #ccc, 0 0 42px #be1c1c,
    0 0 82px #be1c1c, 0 0 92px #be1c1c, 0 0 102px #be1c1c, 0 0 151px #be1c1c;
`;

export const Container2 = styled.div`
  width: 90vw;
  height: 50vh;
  max-width: 1600px;
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const SecondChild = styled.div`
  display: grid;
  height: 90%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 2.3rem;
  margin-right: 2.3rem;
  font-size: 1.5rem;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Bonkai = styled(Link)`
    text-decoration: none; 
`

export const TopText = styled.div`
  width: 100%;
  color: #000;
  font-size: 2rem;
  font-weight: 600;
  justify-self: center;
  background-color: #991e1e;
`;

export const CenterImg = styled.img`
  justify-self: center;
  width: 100%;
  vertical-align: middle;
`;

export const BotText = styled.div`
  width: 100%;
  color: #000;
  font-size: 1.5rem;
  font-weight: 800;
  justify-self: center;
  background-color: #991e1e;
  margin-bottom: 5px;
`;

export const Foot = styled.footer`
  color: #fff;
  width: 100%;
  font-size: 0.7rem;
  display: inline-block;
  text-align: center;
`;

export const IconBox = styled.div`
  width: 100%;
  min-height: 2rem;  
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icond3 = keyframes`
  0% {
    text-shadow: 5px 4px #be1c1c, -5px -6px #000AA9;
  }
  25% {
    text-shadow: -5px -6px $#be1c1c, 5px 4px #000AA9;
  }
  50% {
    text-shadow: 5px -4px $#be1c1c, -8px 4px #000AA9;
  }
  75% {
    text-shadow: -8px -4px $#be1c1c, -5px -4px #000AA9;
  }
  100% {
    text-shadow: -5px 0 $#be1c1c, 5px -4px #000AA9;
  }
`;

export const Icon3d = styled.i`
  padding: 10px;
  animation-name: ${icond3} 200ms 10;
  color: #fff;
  &:hover {
    -webkit-animation: ${icond3} 200ms infinite;
          animation: ${icond3} 200ms infinite;
  }
`;

