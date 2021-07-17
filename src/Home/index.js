import React, { useState } from "react";
import * as S from "./style";

function App() {
  const [email, setEmail] = useState("");
  const [cadastrado, setCadastrado] = useState(false);

  let checklocal = JSON.parse(localStorage.getItem("savedEmails"));
  let emailSavedDB = checklocal === null ? [] : checklocal;

  function validateEmail(mail) {
    if (
      mail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      alreadyExists(email, emailSavedDB);
      return true;
    }
    alert("Por favor insira um e-mail válido!");
    return false;
  }

  function alreadyExists(value, array) {
    array.includes(value)
      ? alert("Email já cadastrado. Tente novamente.")
      : saveEmail();
  }

  function saveEmail() {
    emailSavedDB.push(email);
    localStorage.setItem("savedEmails", JSON.stringify(emailSavedDB));
    setCadastrado(true);
  }

  return (
    /* BODY */
    <>
      <S.ContainerExterno>
        {/* HEADER */}
        <S.ContainerHeader>
          <S.Title>DKCorp</S.Title>
          <S.MenuContainer>
            <S.MenuItem to="/">Home</S.MenuItem>

            <S.MenuItem to="/">Sobre</S.MenuItem>

            <S.MenuItem to="/">Contatos</S.MenuItem>
          </S.MenuContainer>
        </S.ContainerHeader>
        {/* MAIN */}
        {/* FIRST PART */}
        <S.Container1>
          <S.Child>
            <S.Image src="blackfriday.png" alt="PlaceholderIMG"></S.Image>
          </S.Child>
          <S.Child2>
            <S.Desc>Toda loja com até 80% de desconto!</S.Desc>

            {cadastrado ? (
              <S.Obrigado>Obrigado por se cadastrar!</S.Obrigado>
            ) : (
              <>
                <S.Cadrastro>CADASTRE-SE JÁ!</S.Cadrastro>
                <S.Desc2>
                  Faça seu cadastro e receba todas ofertas direto em seu e-mail!
                </S.Desc2>
                <S.Wrapper>
                  <S.Input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        validateEmail(email);
                      }
                    }}
                  ></S.Input>
                  <S.Btn onClick={(e) => validateEmail(email)}>
                    Cadastre-se!
                  </S.Btn>
                </S.Wrapper>
              </>
            )}
          </S.Child2>
        </S.Container1>
        {/* SECOND PART */}
        <S.Container2>
          <S.SecondChild>
            <S.Bonkai to="/">
              <S.TopText>Mouses</S.TopText>
              <S.CenterImg src="mouse.jpg" alt="Mouse"></S.CenterImg>
              <S.BotText>ATÉ 60% DE DESCONTO</S.BotText>
            </S.Bonkai>
          </S.SecondChild>

          <S.SecondChild>
            <S.Bonkai to="/">
              <S.TopText>Teclados</S.TopText>
              <S.CenterImg src="teclado.jpg" alt="Teclado"></S.CenterImg>
              <S.BotText>ATÉ 40% DE DESCONTO</S.BotText>
            </S.Bonkai>
          </S.SecondChild>

          <S.SecondChild>
            <S.Bonkai to="/">
              <S.TopText>Headsets</S.TopText>
              <S.CenterImg src="headset.jpg" alt="Headset"></S.CenterImg>
              <S.BotText>ATÉ 80% DE DESCONTO</S.BotText>
            </S.Bonkai>
          </S.SecondChild>

          <S.SecondChild>
            <S.Bonkai to="/">
              <S.TopText>Placas de Vídeo</S.TopText>
              <S.CenterImg
                src="placadevideo.jpg"
                alt="Placa de Video"
              ></S.CenterImg>
              <S.BotText>ATÉ 30% DE DESCONTO</S.BotText>
            </S.Bonkai>
          </S.SecondChild>
        </S.Container2>
      </S.ContainerExterno>
      {/* FOOTER */}
      <S.Foot>
        <S.IconBox>
          <S.Bonkai
            to={{ pathname: "https://github.com/Rplalcantara" }}
            target="_blank"
          >
            <S.Icon3d className="fa fa-github fa-3x"></S.Icon3d>
          </S.Bonkai>
          <S.Bonkai to="/">
            <S.Icon3d className="fa fa-instagram fa-3x"></S.Icon3d>
          </S.Bonkai>
          <S.Bonkai to="/">
            <S.Icon3d className="fa fa-facebook fa-3x"></S.Icon3d>
          </S.Bonkai>
        </S.IconBox>
        <p>Criado por: Renan Alcantara</p>
      </S.Foot>
    </>
    /* FIM DO BODY */
  );
}

export default App;
