import React, {PointerEvent, FormEvent} from 'react';
import logo from "../assets/header_logo.svg";
import spacer from "../assets/spacer.gif"
import zunetile_default from "../assets/zunetile_default.svg"
//import {Button, Form, FormControl, Nav, NavDropdown, Navbar} from "react-bootstrap";
import '../assets/zune.css';

class Header extends React.Component{
    XbcNav_mainOver(event: PointerEvent<HTMLElement>) {
        let menu = event.currentTarget.getElementsByTagName("ul")[0];
        menu.style.display = "block";
        menu.classList.remove("fade-out");
        menu.classList.add("fade-in");
    }
    XbcNav_mainOut(event: PointerEvent<HTMLElement>) {
        let menu = event.currentTarget.getElementsByTagName("ul")[0];
        menu.classList.remove("fade-in");
        menu.classList.add("fade-out");
    }

    doHeaderSearch(event: FormEvent<HTMLFormElement>) {
        console.log(event);
    }

    render() {
        return (
            <div className="Zwrapper">
                <div className="Header">
                    <a id="A1" className="Logo" href="/">
                        <img src={logo} id="Img1" style={{ height: 32}} alt="Zune.net" />
                    </a>
                    <div className="HeaderUserWrapper">

                        <div id="ctl00__headerControl__gamercardSignedOutTextPanel">
                            <img className="zunecard" alt="" src={zunetile_default}/>
                                <ul className="menu">
                                    <li>
                                        <a id="ctl00__headerControl__signInHyperlink" className="zuneTag"
                                           href="https://live.zune.net/signin.ashx?ru=http%3a%2f%2flocalhost:3001%2fhome">
                                            sign in
                                        </a>
                                    </li>
                                </ul>
                                <ul className="QuickTopLink">
                                    <li>|</li>
                                    <li>
                                        <a href="/en-US/support/">Support</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="TopNav">
                        <ul className="menu">
                            <li className="products"
                                onPointerEnter={event => this.XbcNav_mainOver(event)}
                                onPointerLeave={event => this.XbcNav_mainOut(event)}>
                                <a href="/products/default.htm">
                                    products
                                </a>
                                <ul className="events" style={{left: "0px", top: "39px"}}>
                                    <div style={{float: "left"}}>
                                        <li><a href="/products/software/default.htm">zune software</a></li>
                                        <li><a href="/products/zunepass/default.htm">zune music pass</a></li>
                                        <li><a href="/products/windowsphone7/default.htm">zune on windows phone</a></li>
                                        <li><a href="/products/zuneonxbox/default.htm">zune on xbox live</a></li>
                                        <li><a href="/products/zunehd/default.htm">zune hd</a></li>
                                    </div>
                                    <div style={{float: "left"}}>

                                    </div>
                                </ul>
                            </li>
                            <li className="music" onPointerEnter={event => this.XbcNav_mainOver(event)}
                                onPointerLeave={event => this.XbcNav_mainOut(event)}>
                                <a href="https://social.zune.net/music/">music</a>
                                <ul className="events" style={{left: "84.225px", top: "39px"}}>
                                    <div style={{float: "left"}}>
                                        <li><a href="https://social.zune.net/music/genre/rock">rock</a></li>
                                        <li><a href="https://social.zune.net/music/genre/hiphop">hip hop</a></li>
                                        <li><a href="https://social.zune.net/music/genre/rb">r&amp;b; / soul</a></li>
                                        <li><a href="https://social.zune.net/music/genre/country">country</a></li>
                                        <li><a href="https://social.zune.net/music/genre/pop">pop</a></li>
                                        <li><a href="https://social.zune.net/music/playlists">playlists</a></li>
                                    </div>
                                    <div style={{float: "left"}}>

                                    </div>
                                </ul>
                            </li>
                            <li className="video" onPointerEnter={event => this.XbcNav_mainOver(event)}
                                onPointerLeave={event => this.XbcNav_mainOut(event)}>
                                <a href="https://social.zune.net/video">video</a>
                                <ul className="events" style={{left: 144.238, top: 39}}>
                                    <div style={{float: "left"}}>
                                        <li><a href="https://social.zune.net/tv">tv</a></li>
                                        <li><a href="https://social.zune.net/movies">movies</a></li>
                                        <li><a href="https://social.zune.net/movietrailers">movie trailers</a></li>
                                    </div>
                                    <div style={{float: "left"}}>

                                    </div>
                                </ul>
                            </li>
                            <li className="podcasts" onPointerEnter={event => this.XbcNav_mainOver(event)}
                                onPointerLeave={event => this.XbcNav_mainOut(event)}>
                                <a href="https://social.zune.net/podcasts/">podcasts</a>
                                <ul className="events" style={{left: 201.788, top: 39}}>
                                    <div style={{float: "left"}}>
                                        <li><a
                                            href="https://social.zune.net/podcasts/genre/pod.arts">arts</a></li>
                                        <li><a
                                            href="https://social.zune.net/podcasts/genre/pod.business">business</a></li>
                                        <li><a
                                            href="https://social.zune.net/podcasts/genre/pod.education">education</a></li>
                                        <li><a
                                            href="https://social.zune.net/podcasts/genre/pod.entertainment">entertainment</a></li>
                                        <li><a
                                            href="https://social.zune.net/podcasts/genre/pod.health">health</a></li>
                                    </div>
                                    <div style={{float: "left"}}>

                                    </div>
                                </ul>
                            </li>
                            <li className="mysocial">
                                <a href="/en-US/promotions/jointhesocial/default.htm">my social</a>
                            </li>
                        </ul>
                    </div>


                    <div id="ctl00__headerControl__searchBoxPanel">
                        <div className="HeaderSearch">
                            <form onSubmit={(event) => this.doHeaderSearch(event)}
                                  action="http://social.zune.net/search.aspx">
                                <input name="keyword" type="text" id="searchBox" className="SearchBox" maxLength={100}
                                       value="search"/>
                                    <input type="image" src={spacer} className="hiddenSubmit"/>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;