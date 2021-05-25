import React from 'react';
import {useParams} from 'react-router-dom';
import '../../../assets/zune.css'

import spacer from '../../../assets/spacer.gif';
import jointhesocial_img from '../../../assets/950x450_jointhesocial.jpg';
import bg_tile_black from "../../../assets/1x476tile.jpg";
import {Helmet} from "react-helmet";

function JoinTheSocial_default() {
    let type: any;
    ({type} = useParams());

    return (
        <div className="XbcShellMainContent"
             style={{
                 color: "#333333",
                 backgroundImage: "url(" + bg_tile_black + ")",
                 backgroundRepeat: "repeat-x",
                 backgroundAttachment: "scroll",
                 backgroundPosition: "top center",
                 backgroundPositionY: -76
             }}>
            <Helmet>
                <title>Join the Social | Zunes.tk</title>
            </Helmet>

            <div id="XbcShellBody">
                <div className="XbcBannerTop">
                </div>


                <div className="XbcChrome"
                     style={{
                         width: 950,
                         backgroundImage: "url(" + jointhesocial_img + ")",
                         backgroundRepeat: "no-repeat"
                     }}>
                    <div className="XbcWpColumnGroup" style={{minHeight: 450, marginBottom: 0}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 950}}>
                                        <div className="XbcWpColumn" style={{marginLeft: 0}}>
                                            <div className="XbcChrome" style={{width: 950}}>
                                                <div className="XbcWpColumnGroup"
                                                     style={{marginTop: 10, marginLeft: 0, marginBottom: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome" style={{width: 950}}>
                                                                    <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                                                        <div className="cms_3rdtiernavdefault"
                                                                             id="output"/>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="XbcChrome" style={{width: 950}}>
                                                <div className="XbcWpColumnGroup"
                                                     style={{marginTop: 0, marginBottom: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome" style={{width: 950}}>
                                                                    <div style={{
                                                                             marginLeft: 0,
                                                                             marginBottom: 0,
                                                                             marginRight: 0
                                                                         }}>
                                                                        <div className="cms_heroheadline40px"
                                                                             style={{
                                                                                 height: 56,
                                                                                 fontWeight: "lighter"
                                                                             }}>
                                                                            <p>join the social</p>
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
                                                <div className="XbcWpColumnGroup"
                                                     style={{marginTop: -7, marginLeft: 0}}>
                                                    <table className="XbcLayoutTable">
                                                        <tbody>
                                                        <tr className="XbcLayoutRow">
                                                            <td className="XbcLayoutCell">
                                                                <div className="XbcChrome" style={{width: 790}}>
                                                                    <div className="XbcWpFreeForm2"
                                                                         style={{
                                                                             marginTop: 0,
                                                                             marginLeft: 0,
                                                                             marginRight: 0
                                                                         }}>
                                                                        <table style={{border: 0}} cellPadding="1"
                                                                               cellSpacing="4" width="950">
                                                                            <tbody>
                                                                            <tr style={{
                                                                                alignSelf: "left",
                                                                                verticalAlign: "top"
                                                                            }}>
                                                                                <td>
                                                                                    <img alt="Image: Zune and Xbox"
                                                                                         height="250"
                                                                                         src={spacer}
                                                                                         width="630"/>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="hero-text"
                                                                                       style={{
                                                                                           height: 24,
                                                                                           width: 215,
                                                                                           display: "inline",
                                                                                           fontSize: 28
                                                                                       }}>
                                                                                        don't be anti-social
                                                                                    </p>
                                                                                    <div className="cms_textwhite13px">
                                                                                        <p>The Social is an online music
                                                                                            community powered by what
                                                                                            you and your friends are
                                                                                            listening to. Join today to
                                                                                            start exploring,
                                                                                            discovering, and sharing
                                                                                            music. </p></div>
                                                                                    <p>
                                                                                        <a className="btn pink"
                                                                                           href="https://live.zune.net/account/accountMgmtHome"
                                                                                           title="Sign up for the Social">
                                                                                            <span className="btntip"/>
                                                                                            <span className="btntext">Sign up for the Social</span>
                                                                                        </a>
                                                                                    </p>
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
                    <div className="XbcWpColumnGroup" style={{marginTop: 0, marginLeft: 0, marginBottom: 40}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 310}}>
                                        <div className="XbcWpColumn" style={{marginTop: 0, marginLeft: 0}}>
                                            <div className="XbcChrome">
                                                <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                                    <div className="cms_pagesubhead1gray">
                                                        <p>on the web</p>
                                                    </div>
                                                    <p>The Zune Social features thousands of artist and album pages for
                                                        you to explore and learn about new music. </p>
                                                    <p><a href="http://social.zune.net/music/">Find new music</a></p>
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
                                        <div className="XbcWpColumn" style={{marginTop: 0, marginLeft: 0}}>
                                            <div className="XbcChrome">
                                                <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                                    <div className="cms_pagesubhead1gray">
                                                        {/*<cufon className="cufon cufon-canvas" alt="in "
                                                               style="width: 31px; height: 30px;">
                                                            <canvas width="61" height="39"
                                                                    style="width: 61px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>in</cufontext>
                                                        </cufon>
                                                        <cufon className="cufon cufon-canvas" alt="the "
                                                               style="width: 50px; height: 30px;">
                                                            <canvas width="79" height="39"
                                                                    style="width: 79px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>the</cufontext>
                                                        </cufon>
                                                        <cufon className="cufon cufon-canvas" alt="zune "
                                                               style="width: 71px; height: 30px;">
                                                            <canvas width="100" height="39"
                                                                    style="width: 100px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>zune</cufontext>
                                                        </cufon>
                                                        <cufon className="cufon cufon-canvas" alt="software"
                                                               style="width: 107px; height: 30px;">
                                                            <canvas width="130" height="39"
                                                                    style="width: 130px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>software</cufontext>
                                                        </cufon>*/}
                                                        <p>in the zune software</p>
                                                    </div>
                                                    <p>Explore what your friends are listening to, mark your favorite
                                                        songs, and send a message to your friends. </p>
                                                    <p>
                                                        <a className="btn pink"
                                                           href="/products/software/download/default.htm"
                                                           title="Download the software">
                                                            <span className="btntip"/>
                                                            <span className="btntext">Download the software</span>
                                                        </a>
                                                    </p>
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
                                        <div className="XbcWpColumn"
                                             style={{marginTop: 0, marginLeft: 0, marginRight: 0}}>
                                            <div className="XbcChrome">
                                                <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                                    <div className="cms_pagesubhead1gray">
                                                        {/*<cufon className="cufon cufon-canvas" alt="on "
                                                               style="width: 42px; height: 30px;">
                                                            <canvas width="71" height="39"
                                                                    style="width: 71px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>on</cufontext>
                                                        </cufon>
                                                        <cufon className="cufon cufon-canvas" alt="your "
                                                               style="width: 66px; height: 30px;">
                                                            <canvas width="95" height="39"
                                                                    style="width: 95px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>your</cufontext>
                                                        </cufon>
                                                        <cufon className="cufon cufon-canvas" alt="zune "
                                                               style="width: 71px; height: 30px;">
                                                            <canvas width="100" height="39"
                                                                    style="width: 100px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>zune</cufontext>
                                                        </cufon>
                                                        <cufon className="cufon cufon-canvas" alt="device"
                                                               style="width: 82px; height: 30px;">
                                                            <canvas width="104" height="39"
                                                                    style="width: 104px; height: 39px; top: -7px; left: -4px;"></canvas>
                                                            <cufontext>device</cufontext>
                                                        </cufon>*/}
                                                        <p>on your zune device</p>
                                                    </div>
                                                    <p>Take your friends' music with you wherever you are. Their music
                                                        is one click away when you sign up for a Zune Pass.</p>
                                                    <p>
                                                        <a className="btn pink"
                                                           href="http://web.archive.org/web/20110825045630/https://live.zune.net/account/buySubscription"
                                                           title="Try Zune Pass free">
                                                            <span className="btntip"/>
                                                            <span className="btntext">Try Zune Pass free</span>
                                                        </a>
                                                    </p>
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

export default JoinTheSocial_default;