import React, { useState } from "react";
import * as S from "./style";

function App() {
  const [email, setEmail] = useState("");
  const [cadastrado, setCadastrado] = useState(false);
  let emailSavedDB = [];

  if (localStorage.getItem("savedEmails") === null) {
    emailSavedDB = [];
  } else {
    emailSavedDB = localStorage.getItem("savedEmails");
    emailSavedDB = JSON.parse(emailSavedDB);
  }

  function validateEmail(mail) {
    if (
      mail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      saveEmail();
      return true;
    }
    alert("Por favor insira um e-mail válido!");
    return false;
  }

  function saveEmail() {
    const emailSaved = email;
    emailSavedDB.push(emailSaved);
    localStorage.setItem("savedEmails", JSON.stringify(emailSavedDB));
    setCadastrado(true);
  }

  return (
    /* BODY */
    <S.ContainerExterno>
      {/* HEADER */}
      <S.Title>LOJINHA DA TIA</S.Title>
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
              <S.Cadrastro>CADRASTRE-SE JÁ!</S.Cadrastro>
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
          <S.TopText>Mouses</S.TopText>
          <S.CenterImg src="mouse.jpg" alt="Mouse"></S.CenterImg>
          <S.BotText>ATÉ 60% DE DESCONTO</S.BotText>
        </S.SecondChild>

        <S.SecondChild>
          <S.TopText>Teclados</S.TopText>
          <S.CenterImg src="teclado.jpg" alt="Teclado"></S.CenterImg>
          <S.BotText>ATÉ 40% DE DESCONTO</S.BotText>
        </S.SecondChild>

        <S.SecondChild>
          <S.TopText>Headsets</S.TopText>
          <S.CenterImg src="headset.jpg" alt="Headset"></S.CenterImg>
          <S.BotText>ATÉ 80% DE DESCONTO</S.BotText>
        </S.SecondChild>

        <S.SecondChild>
          <S.TopText>Placas de Vídeo</S.TopText>
          <S.CenterImg
            src="placadevideo.jpg"
            alt="Placa de Video"
          ></S.CenterImg>
          <S.BotText>ATÉ 30% DE DESCONTO</S.BotText>
        </S.SecondChild>
      </S.Container2>
    </S.ContainerExterno>
    /* FIM DO BODY */
  );
}

export default App;
