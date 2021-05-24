import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';

import Home from './pages/Home'
import Header from './components/Header'
import Footer from "./components/Footer";
import JoinTheSocial_default from "./pages/en-US/promotions/JoinTheSocial_default";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <div className="App">
            <div className="XbcShellMainContent">
                <div id="XbcShellBody">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path={`/en-US/promotions/jointhesocial/:type`} component={JoinTheSocial_default}/>
                            {/*<Redirect exact from='/blog/' to="/tutorials/" />*/}
                            {/*<Route path="/tutorials/" component={About} />*/}
                            <Route path="/" component={PageNotFound}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
        <div style={{marginLeft: "auto", marginRight: "auto"}}>

        </div>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
