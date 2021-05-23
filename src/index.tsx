import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                {/*<link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />*/}
                <Header/>
                <Switch>
                    <Route path="/" component = {Home}/>
                    <Redirect from='/blog/' to="/tutorials/" />
                    {/*<Route path="/tutorials/" component={About} />*/}
                </Switch>
                <Footer/>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
