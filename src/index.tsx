import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/test-fe-allab/">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
