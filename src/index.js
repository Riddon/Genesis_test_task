import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import ConfigStore from "./store/store";
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
const store = ConfigStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, rootElement
);

serviceWorker.unregister();
