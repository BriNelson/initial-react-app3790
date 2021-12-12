import ExpenseItem from "./pages/CharacterCardContainer";
import * as React from "react";

import { ResponsiveAppBar } from "./components/NavBar";

import { CongressContextProvider } from "./contexts/CharactersContext";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";
function App() {
  return (
    <div>
      <NetlifyIdentityContext url="https://pensive-johnson-5afb23.netlify.app/.netlify/identity">
      <CongressContextProvider>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/congress" element={<ExpenseItem />} />
          <Route path="/products" element={<Products />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signUp" element={<SignUpForm />} />
            
        </Routes>
      </CongressContextProvider>
      </NetlifyIdentityContext>
    </div>
  );
}

export default App;
