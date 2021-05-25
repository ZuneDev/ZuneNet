import React from 'react';
import { Helmet } from 'react-helmet'
import onyourphone_rocky_us from '../assets/onyourphone_rocky_us.png';
import pc_210x235 from '../assets/pc_210x235.png';
import xbox_210x235 from '../assets/xbox_210x235.png';
import spacer from "../assets/spacer.gif"
import arrow_30 from "../assets/arrow_30_px.svg"
import btn_circle1 from "../assets/btn_circle1.svg"
import btn_circle2 from "../assets/btn_circle2.svg"
import btn_circle3 from "../assets/btn_circle3.svg"
import '../App.css';
import '../assets/zune.css'
import '../assets/zune_argo.css'

function Home() {
    return (
        <div className="XbcShellMainContent">
            <Helmet>
                <title>Zune Music + Video | Zunes.tk</title>
            </Helmet>

            <div id="XbcShellBody">
                <div className="XbcChrome" style={{width: 950}}>
                    <div className="XbcWpColumnGroup" style={{margin: "35px 0px 0px"}}>
                        <table className="XbcLayoutTable" style={{marginLeft: "auto", marginRight: "auto"}}>
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
                                                    Music&nbsp;+&nbsp;Video brings entertainment anywhere you are, in
                                                    exciting
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

                <div className="XbcChrome" style={{width: 950}}>
                    <div className="XbcWpColumnGroup" style={{margin: 0}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 310}}>
                                        <div className="XbcWpColumn" style={{margin: 0}}>
                                            <div className="XbcChrome"
                                                 style={{
                                                     width: 310,
                                                     backgroundImage: "url(" + pc_210x235 + ")",
                                                     backgroundRepeat: "no-repeat"
                                                 }}>
                                                <div className="XbcWpColumnGroup" style={{minHeight: 235, margin: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{margin: 10}}>
                                                                        <p>
                                                                            <a href="/en-US/products/software/default.htm">
                                                                                <img
                                                                                    alt="Image: Zune on Windows Phone 7"
                                                                                    height="170" width="300"
                                                                                    src={spacer}/>
                                                                            </a>
                                                                        </p>
                                                                        <table style={{border: 0}} cellPadding="0"
                                                                               cellSpacing="0"
                                                                               width="310">
                                                                            <tbody>
                                                                            <tr style={{
                                                                                textAlign: "left",
                                                                                verticalAlign: "middle"
                                                                            }}>
                                                                                <td width="240">
                                                                                    <div><a className="hero_Link"
                                                                                            href="/en-US/products/software/default.htm">
                                                                                        <strong>ON YOUR PC</strong>
                                                                                    </a></div>
                                                                                    <div className="cms_textwhite13px">
                                                                                        Zune brings your entertainment
                                                                                        to life
                                                                                    </div>
                                                                                </td>
                                                                                <td width="70">
                                                                                    <a href="/en-US/products/software/default.htm">
                                                                                        <img
                                                                                            style={{alignSelf: "absmiddle"}}
                                                                                            alt="Image: arrow"
                                                                                            height="30" width="30"
                                                                                            src={arrow_30}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <p>&nbsp;</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="XbcDownrule" style={{width: 10}}>
                                    <div style={{width: 10}}/>
                                </td>
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 310}}>
                                        <div className="XbcWpColumn" style={{margin: 0}}>
                                            <div className="XbcChrome"
                                                 style={{
                                                     width: 310,
                                                     backgroundImage: "url(" + onyourphone_rocky_us + ")",
                                                     backgroundRepeat: "no-repeat",
                                                     backgroundPosition: "center"
                                                 }}>
                                                <div className="XbcWpColumnGroup" style={{minHeight: 235, margin: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{margin: 10}}>
                                                                        <p><a
                                                                            href="/en-US/products/windowsphone7/default.htm">
                                                                            <img alt="Image: Zune on Windows Phone 7"
                                                                                 height="170" width="300"
                                                                                 src={spacer}/>
                                                                        </a></p>
                                                                        <table style={{border: 0}} cellPadding="0"
                                                                               cellSpacing="0"
                                                                               width="310">
                                                                            <tbody>
                                                                            <tr style={{
                                                                                textAlign: "left",
                                                                                verticalAlign: "middle"
                                                                            }}>
                                                                                <td width="240">
                                                                                    <div>
                                                                                        <a className="hero_Link"
                                                                                           href="/en-US/products/windowsphone7/default.htm">
                                                                                            <strong>ON YOUR
                                                                                                PHONE</strong>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="cms_textwhite13px">
                                                                                        Your music and videos on the go
                                                                                    </div>
                                                                                </td>
                                                                                <td width="70">
                                                                                    <a href="/en-US/products/windowsphone7/default.htm">
                                                                                        <img
                                                                                            style={{alignSelf: "absmiddle"}}
                                                                                            alt="Image: arrow"
                                                                                            height="30" width="30"
                                                                                            src={arrow_30}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="XbcDownrule" style={{width: 10}}>
                                    <div style={{width: 10}}/>
                                </td>
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 310}}>
                                        <div className="XbcWpColumn" style={{margin: 0}}>
                                            <div className="XbcChrome"
                                                 style={{
                                                     width: 310,
                                                     backgroundImage: "url(" + xbox_210x235 + ")",
                                                     backgroundRepeat: "no-repeat",
                                                     backgroundPosition: "center"
                                                 }}>
                                                <div className="XbcWpColumnGroup" style={{minHeight: 235, margin: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{margin: 10}}>
                                                                        <p><a href="/en-US/products/zuneonxbox/default.htm">
                                                                            <img alt="Image: Zune on Windows Phone 7"
                                                                                 height="170" width="300"
                                                                                 src={spacer}/>
                                                                        </a></p>
                                                                        <table style={{border: 0}} cellPadding="0"
                                                                               cellSpacing="0"
                                                                               width="310">
                                                                            <tbody>
                                                                            <tr style={{
                                                                                textAlign: "left",
                                                                                verticalAlign: "middle"
                                                                            }}>
                                                                                <td width="240">
                                                                                    <div>
                                                                                        <a className="hero_Link"
                                                                                           href="/en-US/products/zuneonxbox/default.htm">
                                                                                            <strong>ON YOUR
                                                                                                XBOX</strong>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="cms_textwhite13px">
                                                                                        Movies and music in
                                                                                        extraordinary ways
                                                                                    </div>
                                                                                </td>
                                                                                <td width="70">
                                                                                    <a href="/en-US/products/zuneonxbox/default.htm">
                                                                                        <img
                                                                                            style={{alignSelf: "absmiddle"}}
                                                                                            alt="Image: arrow"
                                                                                            height="30" width="30"
                                                                                            src={arrow_30}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="XbcChrome" style={{width: 950}}>
                    <div className="XbcWpColumnGroup" style={{margin: "0px 0px 20px"}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 230}}>
                                        <div className="XbcWpColumn" style={{minHeight: 45, margin: 0}}>
                                            <div className="XbcChrome" style={{background: "black", height: 45}}>
                                                <div className="XbcWpColumnGroup"
                                                     style={{minHeight: 45, margin: "8px 0px 7px"}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow" style={{textAlign: "left"}}>
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{
                                                                             minHeight: 45,
                                                                             margin: "15px 0px 10px 10px"
                                                                         }}>
                                                                        <div className="cms_textwhite13px">
                                                                            <strong>GET STARTED WITH ZUNE</strong>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="XbcDownrule" style={{width: 0}}>
                                    <div style={{width: 0}}/>
                                </td>
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 240}}>
                                        <div className="XbcWpColumn" style={{minHeight: 60, margin: 0}}>
                                            <div className="XbcChrome"
                                                 style={{
                                                     background: "linear-gradient(rgb(234, 22, 148), rgb(217, 13, 134))",
                                                     height: 55,
                                                     borderRadius: 5,
                                                     boxShadow: "0px 0px 2px 0px black",
                                                     marginTop: 3
                                                 }}>
                                                <div className="XbcWpColumnGroup" style={{minHeight: 60, margin: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{
                                                                             minHeight: 60,
                                                                             marginTop: 14,
                                                                             marginLeft: 10
                                                                         }}>
                                                                        <table style={{border: 0}} cellPadding="0"
                                                                               cellSpacing="0">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td width="35">
                                                                                    <a href="/en-US/products/software/download/default.htm">
                                                                                        <img
                                                                                            style={{alignSelf: "center"}}
                                                                                            alt="Image: Step 1"
                                                                                            height="25" width="25"
                                                                                            src={btn_circle1}/>
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{paddingBottom: 5}}>
                                                                                        <a className="hero_Link"
                                                                                           href="/en-US/products/software/download/default.htm">
                                                                                            <strong>Get the Zune
                                                                                                software</strong>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="XbcDownrule" style={{width: 0}}>
                                    <div style={{width: 0}}/>
                                </td>
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 240}}>
                                        <div className="XbcWpColumn" style={{minHeight: 45, margin: 0}}>
                                            <div className="XbcChrome"
                                                 style={{background: "black", height: 45}}>
                                                <div className="XbcWpColumnGroup"
                                                     style={{minHeight: 45, margin: "8px 0px 7px"}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{
                                                                             minHeight: 45,
                                                                             margin: "10px 0px 10px 10px"
                                                                         }}>
                                                                        <table style={{border: 0}} cellPadding="0"
                                                                               cellSpacing="0">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td width="35">
                                                                                    <a href="http://social.zune.net/redirect?type=hub&amp;id=newtozunestarthere">
                                                                                        <img
                                                                                            style={{alignSelf: "center"}}
                                                                                            alt="Image: Step 2"
                                                                                            height="25" width="25"
                                                                                            src={btn_circle2}/>
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{paddingBottom: 5}}>
                                                                                        <a className="hero_Link"
                                                                                           href="http://social.zune.net/redirect?type=hub&amp;id=newtozunestarthere">
                                                                                            <strong>Browse Zune
                                                                                                Marketplace</strong>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="XbcDownrule" style={{width: 0}}>
                                    <div style={{width: 0}}/>
                                </td>
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 240}}>
                                        <div className="XbcWpColumn" style={{minHeight: 45, margin: 0}}>
                                            <div className="XbcChrome"
                                                 style={{background: "black", height: 45}}>
                                                <div className="XbcWpColumnGroup"
                                                     style={{minHeight: 45, margin: "8px 0px 7px"}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{
                                                                             minHeight: 45,
                                                                             margin: "10px 0px 10px 10px"
                                                                         }}>
                                                                        <table style={{border: 0}} cellPadding="0"
                                                                               cellSpacing="0">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td width="35"><a
                                                                                    href="https://live.zune.net/account/buySubscription">
                                                                                    <img style={{alignSelf: "center"}}
                                                                                         alt="Image: Step 3"
                                                                                         height="25" width="25"
                                                                                         src={btn_circle3}/>
                                                                                </a>
                                                                                </td>
                                                                                <td>
                                                                                    <div style={{paddingBottom: 5}}>
                                                                                        <a className="hero_Link"
                                                                                           href="https://live.zune.net/account/buySubscription">
                                                                                            <strong>Try a Zune Music
                                                                                                Pass</strong>
                                                                                        </a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
