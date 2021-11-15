import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "@styles/global.css";

const App = () => {

  const initialState = useInitialState();

  return (

    //Forma no recomendada de usar, mejor usar el react-router-dom como aparece abajo
    //     <Layout>
    //         <Login />
    //         <PasswordRecovery />
    //   </Layout>

    <AppContext.Provider value={initialState}> {/*Esto es para que el contexto funcione*/}
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<Home/>} /> 
              <Route path="/login" element={<Login/>} /> {/* El path es la ruta que se va poner en el navegador para cambiar de página*/}
              <Route path="/password-recovery" element={<PasswordRecovery/>} />
              <Route path="/send-email" element={<SendEmail/>} />
              <Route path="/new-password" element={<NewPassword/>} />
              <Route path="/account" element={<MyAccount/>} />
              <Route path="/signup" element={<CreateAccount/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="*" element={<NotFound/>} /> {/* Valor por defecto que se tiene que agregar cuando se pone una url que no existe*/}
            </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;