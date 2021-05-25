import React from 'react';
import {Helmet} from 'react-helmet';
import {catalogBase} from "../api/constants";

import onyourphone_rocky_us from '../assets/onyourphone_rocky_us.png';
import pc_210x235 from '../assets/pc_210x235.png';
import xbox_210x235 from '../assets/xbox_210x235.png';
import subfeature_software from '../assets/230x110_subfeature_software.png';
import spacer from "../assets/spacer.gif";
import arrow_30 from "../assets/arrow_30_px.svg";
import btn_circle1 from "../assets/btn_circle1.svg";
import btn_circle2 from "../assets/btn_circle2.svg";
import btn_circle3 from "../assets/btn_circle3.svg";

import '../App.css';
import '../assets/zune.css';
import '../assets/zune_argo.css';
import HomeMusicCard from "../components/HomeMusicCard";

const axios = require("axios");

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            musicEntry: null
        };
    }

    // Changes XML to JSON
    xmlToJson(xml) {
        // Create the return object
        var obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = this.xmlToJson(item);
                } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    };

    componentDidMount() {
        let url = catalogBase + "/music/chart/zune/tracks";
        console.log(url);
        axios.get(url)
            .then((response: any) => {
                let feed: ChildNode = response.request.responseXML.childNodes[0];
                if (feed.ownerDocument == null)
                    return;

                let evaluator = new XPathEvaluator();
                let expression = evaluator.createExpression("//*[local-name()='entry']");
                let result = expression.evaluate(feed.ownerDocument, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
                let item = result.iterateNext();this.setState({
                    musicEntry: this.xmlToJson(item)
                })
                /*while (item) {
                    let json = this.xmlToJson(item);
                    console.log(json);
                    this.setState({
                        items: this.state["items"].concat(json)
                    })
                    item = result.iterateNext();
                }
                console.log(this.state["items"]);*/
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    render() {
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
                                                        Music&nbsp;+&nbsp;Video brings entertainment anywhere you are,
                                                        in
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
                                                    <div className="XbcWpColumnGroup"
                                                         style={{minHeight: 235, margin: 0}}>
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
                                                                                        <div
                                                                                            className="cms_textwhite13px">
                                                                                            Zune brings your
                                                                                            entertainment
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
                                                    <div className="XbcWpColumnGroup"
                                                         style={{minHeight: 235, margin: 0}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome">
                                                                        <div className="XbcWpFreeForm2"
                                                                             style={{margin: 10}}>
                                                                            <p><a
                                                                                href="/en-US/products/windowsphone7/default.htm">
                                                                                <img
                                                                                    alt="Image: Zune on Windows Phone 7"
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
                                                                                        <div
                                                                                            className="cms_textwhite13px">
                                                                                            Your music and videos on the
                                                                                            go
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
                                                    <div className="XbcWpColumnGroup"
                                                         style={{minHeight: 235, margin: 0}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome">
                                                                        <div className="XbcWpFreeForm2"
                                                                             style={{margin: 10}}>
                                                                            <p><a
                                                                                href="/en-US/products/zuneonxbox/default.htm">
                                                                                <img
                                                                                    alt="Image: Zune on Windows Phone 7"
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
                                                                                        <div
                                                                                            className="cms_textwhite13px">
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
                                                    <div className="XbcWpColumnGroup"
                                                         style={{minHeight: 60, margin: 0}}>
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
                                                                                        <img
                                                                                            style={{alignSelf: "center"}}
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

                    <div className="XbcChrome" style={{width: 950}}>
                        <div className="XbcWpColumnGroup" style={{margin: "0px 0px 50px"}}>
                            <table className="XbcLayoutTable">
                                <tbody>
                                <tr className="XbcLayoutRow">
                                    <td className="XbcLayoutCell">
                                        <div className="XbcChrome" style={{width: 230}}>
                                            <div className="XbcWpColumn">
                                                <div className="XbcChrome" style={{width: 230}}>
                                                    <div className="XbcWpColumnGroup" style={{margin: 0}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome" style={{width: 230}}>
                                                                        <div className="XbcWpFreeForm2"
                                                                             style={{margin: 0}}>
                                                                            <div className="cms_pagesubhead1gray">
                                                                                <p>what's new</p>
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
                                                <div className="XbcChrome" style={{width: 230}}>
                                                    <div className="XbcWpColumnGroup" style={{margin: "20px 0px 0px"}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome">
                                                                        <div className="XbcWpFlash">
                                                                            <a href="en-us/products/software/default.htm">
                                                                                <img
                                                                                    src={subfeature_software}
                                                                                    alt="Image: Zune software"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="XbcChrome" style={{width: 230}}>
                                                    <div className="XbcWpColumnGroup" style={{margin: "0px 0px 30px"}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome">
                                                                        <div className="XbcWpFreeForm2"
                                                                             style={{margin: "10px 0px 0px"}}>
                                                                            <div className="cms_pagesubhead2gray">
                                                                                <strong>GET THE LATEST<br/>
                                                                                    ZUNE SOFTWARE UPDATE</strong>
                                                                            </div>
                                                                            <p>Download the new Zune software, which
                                                                                provides improved performance, new
                                                                                features,
                                                                                and seamless integration with Windows
                                                                                Phone.</p>
                                                                            <p><a className="btn pink"
                                                                                  href="products/software/download/default.htm"
                                                                                  title="Download the software">
                                                                                <span className="btntip"/>
                                                                                <span className="btntext">Download the software</span>
                                                                            </a></p>
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
                                        <div className="XbcChrome" style={{width: 710}}>
                                            <div className="XbcWpColumn">
                                                <div className="XbcChrome" style={{width: 710}}>
                                                    <div className="XbcWpColumnGroup" style={{margin: 0}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome" style={{width: 710}}>
                                                                        <div className="XbcWpFreeForm2"
                                                                             style={{margin: 0}}>
                                                                            <div className="cms_pagesubhead1gray">
                                                                                <p>this week in zune marketplace</p>
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
                                                <div className="XbcChrome" style={{width: 710}}>
                                                    <div className="XbcWpColumnGroup" style={{margin: 0}}>
                                                        <table className="XbcLayoutTable">
                                                            <tbody>
                                                            <tr className="XbcLayoutRow">
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome" style={{width: 230}}>
                                                                        <div className="XbcWpColumn"
                                                                             style={{margin: 0}}>
                                                                            <div className="XbcChrome"
                                                                                 style={{width: 230}}>
                                                                                <div className="XbcWpColumnGroup"
                                                                                     style={{minHeight: 40, margin: 0}}>
                                                                                    <table className="XbcLayoutTable">
                                                                                        <tbody>
                                                                                        <tr className="XbcLayoutRow">
                                                                                            <td className="XbcLayoutCell">
                                                                                                <div
                                                                                                    className="XbcChrome">
                                                                                                    <div
                                                                                                        className="XbcWpFreeForm2"
                                                                                                        style={{margin: "10px 0px 0px"}}>
                                                                                                        <p><strong>
                                                                                                            <a href="http://social.zune.net/music">MUSIC</a>
                                                                                                        </strong></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div className="XbcChrome"
                                                                                 style={{width: 230}}>
                                                                                <div className="XbcWpColumnGroup"
                                                                                     style={{margin: "0px 0px 15px"}}>
                                                                                    <table className="XbcLayoutTable">
                                                                                        <tbody>
                                                                                        <tr className="XbcLayoutRow">
                                                                                            <td className="XbcLayoutCell">
                                                                                                <div
                                                                                                    className="XbcChrome"
                                                                                                    style={{width: 230}}>
                                                                                                    <div
                                                                                                        className="XbcWpFreeForm2"
                                                                                                        style={{margin: 0}}>
                                                                                                        <table
                                                                                                            style={{border: 0}}
                                                                                                            cellPadding="0"
                                                                                                            cellSpacing="0"
                                                                                                            width="230">
                                                                                                            <tbody>
                                                                                                                <HomeMusicCard entry={this.state["musicEntry"]}/>
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
                                                                            <div className="XbcChrome"
                                                                                 style={{width: 230}}>
                                                                                <div className="XbcWpColumnGroup"
                                                                                     style={{margin: 0}}>
                                                                                    <table className="XbcLayoutTable">
                                                                                        <tbody>
                                                                                        <tr className="XbcLayoutRow">
                                                                                            <td className="XbcLayoutCell">
                                                                                                <div
                                                                                                    className="XbcChrome"
                                                                                                    style={{width: 230}}>
                                                                                                    <div
                                                                                                        className="XbcWpFreeForm2"
                                                                                                        style={{margin: 0}}>
                                                                                                        <hr/>
                                                                                                        <div
                                                                                                            className="cms_pagesubhead2gray">
                                                                                                            <strong>ZUNE
                                                                                                                MUSIC
                                                                                                                PASS</strong>
                                                                                                        </div>
                                                                                                        <p>Unlimited
                                                                                                            music,
                                                                                                            wherever you
                                                                                                            are.</p>
                                                                                                        <p><a
                                                                                                            href="products/zunepass/default.htm">
                                                                                                            Learn more
                                                                                                        </a></p>
                                                                                                        <p><a
                                                                                                            className="btn pink"
                                                                                                            href="https://live.zune.net/account/buySubscription"
                                                                                                            title="Try Zune Music Pass">
                                                                                                            <span
                                                                                                                className="btntip"/>
                                                                                                            <span
                                                                                                                className="btntext">Try Zune Music Pass</span>
                                                                                                        </a></p>
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
                                                                    <div className="XbcChrome" style={{width: 230}}>
                                                                        <div className="XbcWpColumn"
                                                                             style={{margin: 0}}>
                                                                            <div className="XbcChrome">
                                                                                <div className="XbcWpColumn">
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 230}}>
                                                                                        <div
                                                                                            className="XbcWpColumnGroup"
                                                                                            style={{
                                                                                                minHeight: 40,
                                                                                                margin: 0
                                                                                            }}>
                                                                                            <table
                                                                                                className="XbcLayoutTable">
                                                                                                <tbody>
                                                                                                <tr className="XbcLayoutRow">
                                                                                                    <td className="XbcLayoutCell">
                                                                                                        <div
                                                                                                            className="XbcChrome">
                                                                                                            <div
                                                                                                                className="XbcWpFreeForm2"
                                                                                                                style={{margin: "10px 0px 0px"}}>
                                                                                                                <p>
                                                                                                                    <strong><a
                                                                                                                        href="http://social.zune.net/movies">MOVIES
                                                                                                                    </a></strong>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 230}}>
                                                                                        <div
                                                                                            className="XbcWpColumnGroup"
                                                                                            style={{margin: "0px 0px 15px"}}>
                                                                                            <table
                                                                                                className="XbcLayoutTable">
                                                                                                <tbody>
                                                                                                <tr className="XbcLayoutRow">
                                                                                                    <td className="XbcLayoutCell">
                                                                                                        <div
                                                                                                            className="XbcChrome"
                                                                                                            style={{width: 230}}>
                                                                                                            <div
                                                                                                                className="XbcWpFreeForm2"
                                                                                                                style={{margin: 0}}>
                                                                                                                <table
                                                                                                                    style={{border: 0}}
                                                                                                                    cellPadding="0"
                                                                                                                    cellSpacing="0"
                                                                                                                    width="230">
                                                                                                                    <tbody>
                                                                                                                    <tr style={{
                                                                                                                        textAlign: "left",
                                                                                                                        verticalAlign: "top"
                                                                                                                    }}>
                                                                                                                        <td width="75">
                                                                                                                            <a href="http://social.zune.net/MOVIES/0/ACF3B423-E4FE-46D0-8582-82C6C2D9E79C">
                                                                                                                                <img
                                                                                                                                    alt="Image: Conan The Barbarian"
                                                                                                                                    height="105"
                                                                                                                                    width="70"
                                                                                                                                    src="conanthebarbarian.jpg"/>
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                        <td width="155">
                                                                                                                            <p>
                                                                                                                                <a className="linkgray"
                                                                                                                                   href="http://social.zune.net/MOVIES/0/ACF3B423-E4FE-46D0-8582-82C6C2D9E79C">
                                                                                                                                    <strong>Conan
                                                                                                                                        The
                                                                                                                                        Barbarian</strong>
                                                                                                                                </a><br/>
                                                                                                                                <a className="linkgray"
                                                                                                                                   href="http://social.zune.net/MOVIES/0/ACF3B423-E4FE-46D0-8582-82C6C2D9E79C">Lionsgate</a>
                                                                                                                            </p>
                                                                                                                            <p>&nbsp;</p>
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
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="XbcDownrule" style={{width: 10}}>
                                                                    <div style={{width: 10}}/>
                                                                </td>
                                                                <td className="XbcLayoutCell">
                                                                    <div className="XbcChrome" style={{width: 230}}>
                                                                        <div className="XbcWpColumn"
                                                                             style={{margin: 0}}>
                                                                            <div className="XbcChrome">
                                                                                <div className="XbcWpColumn">
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 230}}>
                                                                                        <div
                                                                                            className="XbcWpColumnGroup"
                                                                                            style={{
                                                                                                minHeight: 40,
                                                                                                margin: 0
                                                                                            }}>
                                                                                            <table
                                                                                                className="XbcLayoutTable">
                                                                                                <tbody>
                                                                                                <tr className="XbcLayoutRow">
                                                                                                    <td className="XbcLayoutCell">
                                                                                                        <div
                                                                                                            className="XbcChrome">
                                                                                                            <div
                                                                                                                className="XbcWpFreeForm2"
                                                                                                                style={{margin: "10px 0px 0px"}}>
                                                                                                                <p>
                                                                                                                    <strong>
                                                                                                                        <a href="http://web.archive.org/web/20111130221814/http://social.zune.net/tv/">TV</a>
                                                                                                                    </strong>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="XbcChrome"
                                                                                         style={{width: 230}}>
                                                                                        <div
                                                                                            className="XbcWpColumnGroup"
                                                                                            style={{margin: "0px 0px 15px"}}>
                                                                                            <table
                                                                                                className="XbcLayoutTable">
                                                                                                <tbody>
                                                                                                <tr className="XbcLayoutRow">
                                                                                                    <td className="XbcLayoutCell">
                                                                                                        <div
                                                                                                            className="XbcChrome"
                                                                                                            style={{width: 230}}>
                                                                                                            <div
                                                                                                                className="XbcWpFreeForm2"
                                                                                                                style={{margin: 0}}>
                                                                                                                <table
                                                                                                                    style={{border: 0}}
                                                                                                                    cellPadding="0"
                                                                                                                    cellSpacing="0"
                                                                                                                    width="230">
                                                                                                                    <tbody>
                                                                                                                    <tr style={{
                                                                                                                        textAlign: "left",
                                                                                                                        verticalAlign: "top"
                                                                                                                    }}>
                                                                                                                        <td width="75">
                                                                                                                            <a href="http://social.zune.net/TV/SERIES/THE-WALKING-DEAD/52F36FC1-6FF4-4418-A432-252BBAF93861">
                                                                                                                                <img
                                                                                                                                    alt="Image: Grimm"
                                                                                                                                    height="70"
                                                                                                                                    width="70"
                                                                                                                                    src="thewalkingdead.jpg"/>
                                                                                                                            </a>
                                                                                                                        </td>
                                                                                                                        <td width="155">
                                                                                                                            <a className="linkgray"
                                                                                                                               href="http://social.zune.net/TV/SERIES/THE-WALKING-DEAD/52F36FC1-6FF4-4418-A432-252BBAF93861">
                                                                                                                                <strong>The
                                                                                                                                    Walking
                                                                                                                                    Dead</strong>
                                                                                                                            </a><br/>
                                                                                                                            <a className="linkgray"
                                                                                                                               href="http://social.zune.net/TV/SERIES/THE-WALKING-DEAD/52F36FC1-6FF4-4418-A432-252BBAF93861">AMC</a>
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
}

export default Home;
