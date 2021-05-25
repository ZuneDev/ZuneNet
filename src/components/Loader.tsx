import React from 'react';
import loaderFinal from "../assets/loaderFinal.svg";

class Loader extends React.Component {
    render() {
        return (
            <img className="Loader" src={loaderFinal} width="40" height="40"/>
        );
    }
}

export default Loader;