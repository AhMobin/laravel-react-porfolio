import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
    return (
        <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
