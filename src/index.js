import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { NoteProvider } from "./Context/Note/note-context";
import { FilterProvider } from "./Context/Filter-Context/Filter-Context";
import { AuthProvider } from "./Context/Auth-Context/Auth-Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
