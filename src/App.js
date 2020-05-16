import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import Layout from "./components/layout/Layout";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./locales/i18n";

function App() {
    const x = useSelector(state => state)

    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/">
                            <Redirect to={'/login'}/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </I18nextProvider>
    );
}

export default App;
