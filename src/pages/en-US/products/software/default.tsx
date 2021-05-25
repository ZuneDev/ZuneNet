import React from 'react';
import {useParams} from 'react-router-dom';
import '../../../../assets/zune.css'

import spacer from '../../../../assets/spacer.gif';
import hero_zunesoftware_img from '../../../../assets/products_hero_zunesoftware_v1.png';
import icon_zune from '../../../../assets/icon_zune.svg';
import icon_smartdj from '../../../../assets/icon_smartdj.svg';
import subfeature_zunemarketplace_img from '../../../../assets/460x280_subfeature_zunemarketplace_enu_tv.png';
import bg_tile_black from '../../../../assets/1x476tile.jpg';
import {Helmet} from "react-helmet";

function Software_default() {
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
                <title>Zune software | Zunes.tk</title>
            </Helmet>

            <div id="XbcShellBody">
                <div className="XbcBannerTop">
                </div>

                <div className="XbcChrome"
                     style={{
                         width: 950,
                         backgroundImage: "url(" + hero_zunesoftware_img + ")",
                         backgroundRepeat: "no-repeat"
                     }}>
                    <div className="XbcWpColumnGroup" style={{minHeight: 450, marginBottom: 20}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 950}}>
                                        <div className="XbcWpColumn" style={{marginLeft: 0, marginBottom: 0}}>
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
                                                                    <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                                                        <div className="cms_heroheadline40px"
                                                                             style={{
                                                                                 height: 64,
                                                                                 fontWeight: "lighter",
                                                                                 marginTop: -10
                                                                             }}>
                                                                            <p>zune software</p>
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
                                                                <div className="XbcChrome" style={{width: 150}}>
                                                                    <div className="XbcWpColumn"
                                                                         style={{marginTop: 0, marginLeft: 0}}>
                                                                        <div className="XbcChrome" style={{width: 150}}>
                                                                            <div className="XbcWpColumnGroup">
                                                                                <table className="XbcLayoutTable">
                                                                                    <tbody>
                                                                                    <tr className="XbcLayoutRow">
                                                                                        <td className="XbcLayoutCell">
                                                                                            <div className="XbcChrome">
                                                                                                <div
                                                                                                    className="XbcWpFreeForm2"
                                                                                                    style={{margin: "15px 0px 0px"}}>
                                                                                                    <div
                                                                                                        className="cms_3rdtiernavdefault">
                                                                                                        <p>
                                                                                                            <a href="/support/zunesoftware/default.htm">SUPPORT</a>
                                                                                                        </p>
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
                                                                <div className="XbcChrome" style={{width: 790}}>
                                                                    <div className="XbcWpColumn"
                                                                         style={{marginTop: 15, marginLeft: 0}}>
                                                                        <div className="XbcChrome" style={{width: 790}}>
                                                                            <div className="XbcWpFreeForm2"
                                                                                 style={{
                                                                                     marginTop: 0,
                                                                                     marginLeft: 0,
                                                                                     marginRight: 0
                                                                                 }}>
                                                                                <table style={{border: 0}}
                                                                                       cellPadding="1"
                                                                                       cellSpacing="4" width="790">
                                                                                    <tbody>
                                                                                    <tr style={{
                                                                                        textAlign: "left",
                                                                                        verticalAlign: "top"
                                                                                    }}>
                                                                                        <td width="470">
                                                                                            <img
                                                                                                alt="Image: Zune Music + Video brings your entertainment to life"
                                                                                                height="250" width="480"
                                                                                                src={spacer}/>
                                                                                        </td>
                                                                                        <td width="310">
                                                                                            <p className="hero-text"
                                                                                                style={{
                                                                                                    fontSize: 26,
                                                                                                    lineHeight: "1.3em",
                                                                                                    marginBottom: 10
                                                                                                }}>
                                                                                                zune music + video brings<br/>
                                                                                                your entertainment to life
                                                                                            </p>
                                                                                            <div
                                                                                                className="cms_textwhite13px">
                                                                                                <p>The free Zune
                                                                                                    software is
                                                                                                    the best way to<br/>
                                                                                                    manage and play your
                                                                                                    music, movies,
                                                                                                    and<br/>
                                                                                                    TV on your PC.
                                                                                                    Discover
                                                                                                    and enjoy all
                                                                                                    the<br/>
                                                                                                    entertainment you
                                                                                                    can
                                                                                                    handle.
                                                                                                </p>
                                                                                                <p>
                                                                                                    <a className="btn pink"
                                                                                                       href="products/software/download/default.htm"
                                                                                                       title="Download now">
                                                                                                    <span
                                                                                                        className="btntip"/>
                                                                                                        <span
                                                                                                            className="btntext">Download now</span>
                                                                                                    </a>
                                                                                                </p>
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
                                        <div className="XbcWpColumn" style={{marginTop: 0}}>
                                            <div className="XbcChrome" style={{width: 310}}>
                                                <div className="XbcWpFreeForm2" style={{marginTop: 0, marginLeft: 0}}>
                                                    <div className="cms_pagesubhead1gray">
                                                        <p>your stuff in one place</p>
                                                    </div>
                                                    <p>The Zune software is the hub for all your entertainment. Enjoy,
                                                        manage, and share your favorite music, movies, and TV shows.</p>
                                                    <p><a
                                                        href="support/zunesoftware/gettingstarted/aboutzunesoftware.htm">
                                                        Learn how
                                                    </a></p>
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
                                        <div className="XbcWpColumn" style={{marginTop: 0}}>
                                            <div className="XbcChrome" style={{width: 310}}>
                                                <div className="XbcWpFreeForm2" style={{marginTop: 0, marginLeft: 0}}>
                                                    <div className="cms_pagesubhead1gray">
                                                        <p>stream instantly</p>
                                                    </div>
                                                    <p>Rent or purchase movies and TV shows and instantly stream them to
                                                        your PC with no downloading or waiting time.</p>
                                                    <p><a href="support/zunesoftware/gettingstarted/streamingvideo.htm">
                                                        Start streaming
                                                    </a></p>
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
                                        <div className="XbcWpColumn" style={{marginTop: 0}}>
                                            <div className="XbcChrome" style={{width: 310}}>
                                                <div className="XbcWpFreeForm2" style={{marginTop: 0, marginLeft: 0}}>
                                                    <div className="cms_pagesubhead1gray">
                                                        <p>manage your mobile</p>
                                                    </div>
                                                    <p>The Zune PC software lets you sync your music and videos and get
                                                        updates for your Windows Phone.</p>
                                                    <p><a href="support/windowsphone7/aboutzuneonwp7.htm">
                                                        Get going
                                                    </a></p>
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
                    <div className="XbcWpColumnGroup" style={{margin: 0}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 950}}>
                                        <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                            <div className="cms_pagesubhead1gray">
                                                <p>powerful discovery tools</p>
                                            </div>
                                            <hr/>
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
                                        <div className="XbcWpColumnGroup" style={{margin: 0}}>
                                            <table className="XbcLayoutTable">
                                                <tbody>
                                                <tr className="XbcLayoutRow">
                                                    <td className="XbcLayoutCell">
                                                        <div className="XbcChrome" style={{width: 470}}>
                                                            <div className="XbcWpColumn" style={{margin: 0}}>
                                                                <div className="XbcChrome" style={{width: 470}}>
                                                                    <div className="XbcWpColumnGroup">
                                                                        <table className="XbcLayoutTable">
                                                                            <tbody>
                                                                            <tr className="XbcLayoutRow">
                                                                                <td className="XbcLayoutCell">
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 60}}>
                                                                                        <div className="XbcWpColumn"
                                                                                             style={{marginRight: 0}}>
                                                                                            <div className="XbcChrome">
                                                                                                <div
                                                                                                    className="XbcWpFlash"
                                                                                                    style={{marginRight: 0}}>
                                                                                                    <img src={icon_zune}
                                                                                                        alt="Image: Zune Music Pass"/>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="XbcDownrule"
                                                                                    style={{width: 10}}>
                                                                                    <div style={{width: 10}}/>
                                                                                </td>
                                                                                <td className="XbcLayoutCell">
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 400}}>
                                                                                        <div className="XbcWpColumn"
                                                                                             style={{marginLeft: 0}}>
                                                                                            <div className="XbcChrome">
                                                                                                <div
                                                                                                    className="XbcWpFreeForm2"
                                                                                                    style={{
                                                                                                        marginTop: 0,
                                                                                                        marginLeft: 0
                                                                                                    }}>
                                                                                                    <div
                                                                                                        className="cms_articlesubhead">
                                                                                                        <strong>Zune
                                                                                                            Music
                                                                                                            Pass</strong>
                                                                                                    </div>
                                                                                                    <p>Get unlimited
                                                                                                        access
                                                                                                        to millions of
                                                                                                        songs
                                                                                                        you can stream
                                                                                                        or
                                                                                                        download, and
                                                                                                        play
                                                                                                        on your Windows
                                                                                                        Phone, PC, or
                                                                                                        Xbox
                                                                                                        360.*</p>
                                                                                                    <p><a
                                                                                                        className="btn pink"
                                                                                                        href="https://live.zune.net/en-US/account/buySubscription"
                                                                                                        title="Get a Zune Music Pass">
                                                                                                    <span
                                                                                                        className="btntip"/>
                                                                                                        <span
                                                                                                            className="btntext">
                                                                                                                Get a Zune Music Pass
                                                                                                            </span>
                                                                                                    </a></p>
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
                                                    </td>
                                                    <td className="XbcDownrule">
                                                        <div style={{width: 0}}/>
                                                    </td>
                                                    <td className="XbcLayoutCell">
                                                        <div className="XbcChrome" style={{width: 470}}>
                                                            <div className="XbcWpColumn" style={{margin: 0}}>
                                                                <div className="XbcChrome" style={{width: 470}}>
                                                                    <div className="XbcWpColumnGroup">
                                                                        <table className="XbcLayoutTable">
                                                                            <tbody>
                                                                            <tr className="XbcLayoutRow">
                                                                                <td className="XbcLayoutCell">
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 60}}>
                                                                                        <div className="XbcWpColumn"
                                                                                             style={{marginRight: 0}}>
                                                                                            <div className="XbcChrome">
                                                                                                <div
                                                                                                    className="XbcWpFlash"
                                                                                                    style={{marginRight: 0}}>
                                                                                                    <img src={icon_smartdj}
                                                                                                         alt="Image: Smart DJ"/>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="XbcDownrule"
                                                                                    style={{width: 10}}>
                                                                                    <div style={{width: 10}}/>
                                                                                </td>
                                                                                <td className="XbcLayoutCell">
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 400}}>
                                                                                        <div className="XbcWpColumn"
                                                                                             style={{marginLeft: 0}}>
                                                                                            <div className="XbcChrome">
                                                                                                <div
                                                                                                    className="XbcWpFreeForm2"
                                                                                                    style={{
                                                                                                        marginTop: 0,
                                                                                                        marginLeft: 0
                                                                                                    }}>
                                                                                                    <div
                                                                                                        className="cms_articlesubhead">
                                                                                                        <strong>Your own
                                                                                                            personal
                                                                                                            DJ</strong>
                                                                                                    </div>
                                                                                                    <p>Smart DJ is the
                                                                                                        easiest way to
                                                                                                        discover music
                                                                                                        based
                                                                                                        on your unique
                                                                                                        tastes. Let it
                                                                                                        create playlists
                                                                                                        from your own
                                                                                                        collection or
                                                                                                        from
                                                                                                        Zune
                                                                                                        Marketplace.</p>
                                                                                                    <p><a
                                                                                                        href="support/zunesoftware/features/smartdj.htm">
                                                                                                        Learn about
                                                                                                        Smart DJ
                                                                                                    </a></p>
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
                <div className="XbcChrome" style={{width: 950}}>
                    <div className="XbcWpColumnGroup" style={{margin: 0}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 950}}>
                                        <div className="XbcWpFreeForm2" style={{margin: 0}}>
                                            <div className="cms_pagesubhead1gray"
                                                 style={{height: 30}}>
                                                <p>zune marketplace</p>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="XbcChrome" style={{width: 950}}>
                    <div className="XbcWpColumnGroup" style={{margin: "0px 0px 50px"}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome" style={{width: 950}}>
                                        <div className="XbcWpColumnGroup" style={{margin: 0}}>
                                            <table className="XbcLayoutTable">
                                                <tbody>
                                                <tr className="XbcLayoutRow">
                                                    <td className="XbcLayoutCell">
                                                        <div className="XbcChrome" style={{width: 470}}>
                                                            <div className="XbcWpColumn">
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpColumnGroup"
                                                                         style={{margin: 0}}>
                                                                        <table className="XbcLayoutTable">
                                                                            <tbody>
                                                                            <tr className="XbcLayoutRow">
                                                                                <td className="XbcLayoutCell">
                                                                                    <div className="XbcChrome">
                                                                                        <div className="XbcWpFreeForm2"
                                                                                             style={{
                                                                                                 marginTop: 0,
                                                                                                 marginLeft: 0
                                                                                             }}>
                                                                                            <div
                                                                                                className="cms_articlesubhead">
                                                                                                <strong>One-stop-shop</strong>
                                                                                            </div>
                                                                                            <p>All your favorite
                                                                                                entertainment is in one
                                                                                                place, including music,
                                                                                                movies, TV shows,
                                                                                                podcasts,
                                                                                                apps, and more.</p>
                                                                                            <p>&nbsp;</p>
                                                                                            <div
                                                                                                className="cms_articlesubhead">
                                                                                                <strong>Choose how you
                                                                                                    want
                                                                                                    to shop </strong>
                                                                                            </div>
                                                                                            <p>Rent or buy, download or
                                                                                                stream, shop around, or
                                                                                                get
                                                                                                recommendations—you are
                                                                                                in
                                                                                                control.</p>
                                                                                            <p>&nbsp;</p>
                                                                                            <div
                                                                                                className="cms_articlesubhead">
                                                                                                <strong>Your
                                                                                                    entertainment
                                                                                                    everywhere</strong>
                                                                                            </div>
                                                                                            <p>Access from anywhere:
                                                                                                your PC
                                                                                                software, web browser,
                                                                                                Windows Phone, or Xbox
                                                                                                360**.</p>
                                                                                            <p>&nbsp;</p>
                                                                                            <p><a className="btn pink"
                                                                                                  href="products/software/download/default.htm"
                                                                                                  title="Download Zune software">
                                                                                                <span
                                                                                                    className="btntip"/>
                                                                                                <span
                                                                                                    className="btntext">
                                                                                                            Download Zune software
                                                                                                        </span>
                                                                                            </a></p>
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
                                                    <td className="XbcDownrule">
                                                        <div style={{width: 0}}/>
                                                    </td>
                                                    <td className="XbcLayoutCell">
                                                        <div className="XbcChrome" style={{width: 470}}>
                                                            <div className="XbcWpColumn" style={{marginLeft: 0}}>
                                                                <div className="XbcChrome">
                                                                    <div className="XbcWpFlash" style={{marginLeft: 0}}>
                                                                        <a href="support/zunemarketplace/default.htm">
                                                                            <img width="460" height="280"
                                                                                 src={subfeature_zunemarketplace_img}
                                                                                 alt="Image: Zune Marketplace"/>
                                                                        </a>
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
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="XbcChrome" style={{width: 950}}>
                    <div className="XbcWpColumnGroup" style={{marginLeft: 0}}>
                        <table className="XbcLayoutTable">
                            <tbody>
                            <tr className="XbcLayoutRow">
                                <td className="XbcLayoutCell">
                                    <div className="XbcChrome">
                                        <div className="XbcWpFreeForm2" style={{marginLeft: 0, marginRight: 0}}>
                                            <div className="cms_footnotes"><p>* Zune Music Pass is a monthly music
                                                subscription service; some Zune Marketplace content may not be available
                                                via Zune Music Pass and may vary over time. On Xbox 360, Zune Music Pass
                                                allows for music streaming only and requires Xbox LIVE Gold subscription
                                                (your 10 monthly song credits are still available for download on your PC,
                                                Windows Phone, or Zune media player). On Windows Phone, streaming feature
                                                requires wireless network access; carrier fees may apply.</p>
                                                <p>** Songs available on Xbox 360 are for streaming only and require
                                                    Zune Music Pass and Xbox LIVE Gold subscriptions.</p>
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

export default Software_default;