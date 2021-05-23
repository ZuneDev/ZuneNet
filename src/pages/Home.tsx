import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import '../assets/zune.css'

function Home() {
    return (
        <div className="App">
            <div className="XbcChrome" style={{width: 950}}>
                <div className="XbcWpColumnGroup" style={{margin: "35px 0px 0px"}}>
                    <table className="XbcLayoutTable">
                        <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome">
                                        <div className="XbcWpFlash" style={{margin: 0}}>
                                            <p className="hero-text">
                                                your entertainment, everywhere
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="XbcChrome" style={{width: 950}}>
                <div className="XbcWpColumnGroup" style={{margin: "0px 0px 40px"}}>
                    <table className="XbcLayoutTable">
                        <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 950}}>
                                        <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                            <div className="cms_articlesubhead">
                                                <p className="XbcAlignCenter">Zune
                                                Music&nbsp;+&nbsp;Video brings entertainment anywhere you are, in exciting
                                                new ways. </p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <a
                className="App-link"
                href="https://xbox.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default Home;
