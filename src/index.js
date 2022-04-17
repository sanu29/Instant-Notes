import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth";
import "./App.css"
import { HeaderContext, HeaderContextProvider } from "./context/header-context";
import { NoteContextProvider } from "./context/note-context";
import { ArchiveContext, ArchiveContextProvider } from "./context/archive-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthContextProvider>
    <HeaderContextProvider>
      <NoteContextProvider>
        <ArchiveContextProvider>
              <App />
      </ArchiveContextProvider>
      </NoteContextProvider>
         </HeaderContextProvider>
 
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
