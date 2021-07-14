import styled, { keyframes } from "styled-components";

export const ContainerExterno = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-wrap: nowrap;
  width: 90vw;

  @media (max-width: 600px) {
  }
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

export const Title = styled.header`
  display: flex;
  justify-self: center;
  align-self: center;
  margin-top: 2rem;
  animation-name: ${flicker};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  font-size: 4rem;
  font-weight: bold;
  color: #ddd;
  text-shadow: 0 0 7px #ddd, 0 0 10px #ddd, 0 0 21px #ddd, 0 0 42px #be1c1c,
    0 0 82px #be1c1c, 0 0 92px #be1c1c, 0 0 102px #be1c1c, 0 0 151px #be1c1c;

  @media (max-width: 600px) {
  }
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

export const Image = styled.img`
  display: flex;
  width: 90%;
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
  max-width: 1600px;
  margin-top: 10rem;
  margin-bottom: 10rem;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  justify-self: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const SecondChild = styled.div`
  display: grid;
  align-items: stretch;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  flex-grow: 1;
  grid-template-columns: repeat(4 1fr);
  font-size: 1.5rem;
`;

export const TopText = styled.div`
  width: 70%;
  color: #000;
  font-size: 2rem;
  font-weight: 600;
  justify-self: center;
  background-color: #991e1e;
`;

export const CenterImg = styled.img`
  justify-self: center;
  width: 70%;
`;

export const BotText = styled.div`
  width: 70%;
  color: #000;
  font-size: 1.5rem;
  font-weight: 800;
  justify-self: center;
  background-color: #991e1e;
`;
