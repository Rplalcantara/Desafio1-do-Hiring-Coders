import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";

/* emailSaved = localStorage.getItem("savedEmails")
emailSaved = JSON.parse(emailSaved) */

function App() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [cadastrado, setCadastrado] = useState(false);
  let emailSavedDB = []

  if (localStorage.getItem("savedEmails") === null) {
    emailSavedDB = [];
  } else {
    emailSavedDB = localStorage.getItem("savedEmails")  
    emailSavedDB = JSON.parse(emailSavedDB)
  }

  function validateEmail(mail) 
{
 if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
  {
    saveEmail()
    return (true)
  }
    alert("Por favor insira um e-mail válido!")
    return (false)
}

  function saveEmail() {
    const emailSaved = email;
    emailSavedDB.push(emailSaved)
    localStorage.setItem("savedEmails", JSON.stringify(emailSavedDB));
    setCadastrado(true)
  }

  return (
    <>
      <S.Container>
        <S.Title>MEGA DESCONTOS BLACK FRIDAY</S.Title>
        <S.Image src="blackfriday3.png" alt="PlaceholderIMG"></S.Image>
        <S.Desc>Toda loja com até 80% de desconto!</S.Desc>

        {cadastrado ? 
        <S.Obrigado>Obrigado por se cadastrar!</S.Obrigado>        
        : 
        <> 
        <S.Cadrastro>CADRASTRE-SE JÁ!</S.Cadrastro>
        <S.Desc2>
          Faça seu cadastro e receba todas ofertas direto em seu e-mail!
        </S.Desc2>
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
        <S.Btn onClick={(e) => validateEmail(email)}>Cadastre-se!</S.Btn>
        </>}
      </S.Container>
    </>
  );
}

export default App;
