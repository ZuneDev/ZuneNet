import React from 'react';
import '../assets/zune.css';
import {Helmet} from "react-helmet";

class Header extends React.Component {

    render() {
        return (
            <div className="XbcShellMainContent">
                <Helmet>
                    <title>Page Not Found | Zunes.me</title>
                </Helmet>

                <div id="XbcShellBody">
                    <h3/>
                    <div className="XbcChrome" style={{width: 950}}>
                        <div className="XbcWpColumnGroup" style={{marginTop: 10}}>
                            <table className="XbcLayoutTable">
                                <tbody>
                                <tr className="XbcLayoutRow">
                                    <td className="XbcLayoutCell">
                                        <div className="XbcChrome">
                                            <div className="XbcWpFreeForm2">
                                                <div className="cms_pageheader30px"
                                                     style={{
                                                         marginBottom: "unset",
                                                         fontWeight: "lighter"
                                                     }}>
                                                    <p>page not found</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="XbcChrome" style={{width: 950, backgroundColor: "#EEEEEE"}}>
                        <div className="XbcWpColumnGroup">
                            <table className="XbcLayoutTable">
                                <tbody>
                                <tr className="XbcLayoutRow">
                                    <td className="XbcLayoutCell">
                                        <div className="XbcChrome" style={{width: 950}}>
                                            <div className="XbcWpFreeForm2" style={{margin: 10}}>
                                                <p>Sorry, we can't find
                                                    the page you're looking for. It might have been removed, its address
                                                    might have changed, it might be temporarily inaccessible, or you
                                                    might
                                                    have mistyped the address.</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="XbcChrome">
                        <div className="XbcWpColumnGroup" style={{marginTop: 40}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;