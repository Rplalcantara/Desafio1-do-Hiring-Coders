import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 1600px;
  height: 100vh;
  margin: 1rem "auto";
  padding: 1rem;
  display: grid;
  text-align: center;
  justify-content: space-between;
  justify-items: center;
  align-items: start;
  background-size: cover;
  background-repeat: no-repeat;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "header header header header"
    "image image  desc desc"
    "image image  desc2 desc2"
    "image image  sign sign"
    "image image email emailbtn";

  @media (max-width: 600px) {
    width: 90vw;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1;
    grid-template-rows: 7;
    grid-template-areas:
    "header"
    "image"
    "desc"
    "desc2"
    "sign"
    "email" 
    "emailbtn";
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

export const Title = styled.h1`
    grid-area: header;
    align-self: end;
    animation-name: ${flicker};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    font-size: 4rem;
    color: #ddd;
    text-shadow:
    0 0 7px #ddd,
    0 0 10px #ddd,
    0 0 21px #ddd,
    0 0 42px #BE1C1C,
    0 0 82px #BE1C1C,
    0 0 92px #BE1C1C,
    0 0 102px #BE1C1C,
    0 0 151px #BE1C1C;
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

export const Cadrastro = styled.h2`
    justify-self: center;
    align-self: end;
    grid-area: sign;
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
  justify-self: center;
  align-self: end;
  grid-area: desc;
  font-size: 2.5rem;
  font-weight: 800;
  color: #eee;
`;

export const Desc2 = styled.h4`
  justify-self: start;
  align-self: center;
  grid-area: desc2;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ddd;
`;

export const Image = styled.img`
  display: flex;
  align-self: center;
  grid-area: image;
  width: 95%;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  width: 95%;
  justify-self: left;
  align-self: start;
  margin: 1px "auto";
  color: #000;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: -sans-serif;
  border: none;
  border-radius: 0.5rem;
  grid-area: email;
  padding: 0.4rem;

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 90vw;
    justify-self: center;
    align-self: center;
  }
`;

export const Btn = styled.button`
  width: 80%;
  background-color: #BE1C1C;
  color: #eee;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: -sans-serif;
  justify-self: left;
  align-self: start;
  border: none;
  border-radius: 0.5rem;
  margin: 1px "auto";
  grid-area: emailbtn;
  padding: 0.4rem;
  &:hover {
      cursor: pointer;
  }
  @media (max-width: 600px) {
    margin-top: 5px;
    width: 94vw;
    justify-self: center;
    align-self: center;
  }
`;

export const Obrigado = styled.h5`
    justify-self: center;
    align-self: start;
    grid-area: sign;
    animation-name: ${flicker2};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    font-size: 3.5rem;
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
    @media (max-width: 600px) {
    grid-area: desc2;  
}
`;
