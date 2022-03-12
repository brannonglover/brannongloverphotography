import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Photos from './components/Photos/Photos';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import About from './pages/About';
import Contact from './pages/Contact';
import * as S from "./GlobalStyle";
import { ChangeEvent } from 'react';

import emailjs, { init } from 'emailjs-com';
init("user_QNcgtvnudxea7swDRoD84");

interface IForm {
  fullname: string
  email: string
  subject: string
  message: string
}

function App() {
  const [field, setField] = useState<IForm>({} as IForm);
  const [message, setMessage] = useState<string>("");

  const collectInputs = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setField((prevState) => {
        debugger
        return { ...prevState, ...{ [e.target.name]: e.target.value }}
      });
    }
  }

  const collectTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setMessage(e.currentTarget.value);
    }
  }

  const emailParams = {
    emailjs.send("service_ttnubdh","template_hpzmp89", {

    })
  }

  const sendData = () => {

  }

  return (
    <>
      <S.GlobalStyle />
      <Router>
      <S.AppContainer>
        <Header />
        <Menu />
          <Switch>
            <Route path="/" exact>
              <Photos />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact collectInputs={collectInputs} collectTextArea={collectTextArea} sendData={sendData} />
            </Route>
          </Switch>
        </S.AppContainer>
      </Router>
    </>
  );
}

export default App;
