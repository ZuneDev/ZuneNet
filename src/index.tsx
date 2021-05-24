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
import JoinTheSocial_default from "./pages/en-US/promotions/JoinTheSocial_default";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path={`/en-US/promotions/jointhesocial/:type`} component={JoinTheSocial_default}/>
                {/*<Redirect exact from='/blog/' to="/tutorials/" />*/}
                {/*<Route path="/tutorials/" component={About} />*/}
            </Switch>
        </Router>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
