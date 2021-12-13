import ExpenseItem from "./pages/CharacterCardContainer";
import * as React from "react";

import { ResponsiveAppBar } from "./components/NavBar";

import { CharacterContextProvider } from "./contexts/CharactersContext";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import HousesPage from "./pages/HousesPage";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";
function App() {
  return (
    <>
      <div sx={{
        backgroundColor: "black"
      }}>
      <NetlifyIdentityContext url="https://pensive-johnson-5afb23.netlify.app">
      <CharacterContextProvider>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/congress" element={<ExpenseItem />} />
          <Route path="/HousesPage" element={<HousesPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signUp" element={<SignUpForm />} />
            
        </Routes>
      </CharacterContextProvider>
        </NetlifyIdentityContext>
        </div>
    </>
  );
}

export default App;
