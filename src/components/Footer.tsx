import React from 'react';
import '../assets/zune.css';

function Footer() {
    return (
        <div id="ctl00__shellFooter" className="XbcShellMainContent">
            <div style={{width: 950, clear: "both", textAlign: "left", marginLeft: "auto", marginRight: "auto"}}
                 id="_foot">
                <div id="_footer">
                    <div className="FooterWrapper">
                        <div>
                            <div className="Editorial">
                                <div className="floatLeft col">
                                    <ul>
                                        <li>
                                            <a href="/en-US/press/default.htm">Press</a>
                                        </li>
                                        <li>
                                            <a href="http://privacy.microsoft.com/en-US/default.aspx"
                                               target="_blank">Privacy Statement</a>
                                        </li>
                                        <li>
                                            <a href="/en-US/legal/termsofservice.htm">Terms of Service</a>
                                        </li>
                                        <li>
                                            <a href="/en-us/legal/safety.htm">Safety</a>
                                        </li>
                                        <li>
                                            <a href="/en-US/legal/codeOfConduct.htm">Code of Conduct</a>
                                        </li>
                                        <li>
                                            <a href="http://social.zune.net/reportAbuse.aspx">Report Abuse</a>
                                        </li>
                                        <li>
                                            <a href="http://www.microsoft.com/About/Legal/EN/US/IntellectualProperty/Trademarks/EN-US.aspx"
                                               target="_blank">Trademarks</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="floatLeft col">
                                    <ul>
                                        <li>
                                            <a href="http://zuneinsider.com/" target="_blank">Zune Insider</a>
                                        </li>
                                        <li>
                                            <a href="/en-us/newsletter/default.htm">Newsletter</a>
                                        </li>
                                        <li>
                                            <a href="http://www.microsoftaffiliates.com/index.html?content=Zune"
                                            target="_blank">Affiliate Program</a>
                                        </li>
                                        <li>
                                            <a href="http://social.zune.net/links/zunelinks.aspx">Link to Zune</a>
                                        </li>
                                        <li>
                                            <a href="/en-us/support/accessibility/default.htm">Accessibility</a>
                                        </li>
                                        <li>Follow us on:</li>
                                        <li>
                                            <a href="http://www.facebook.com/zune"
                                               // onClick="window.open(this.href);return false;"
                                               // onKeyPress="window.open(this.href);return false;"
                                            >
                                                <img alt="Image: Facebook" height="16"
                                                    src="http://web.archive.org/web/20111130221814im_/https://www.zune.net/NR/rdonlyres/CD7A2D12-EE37-468B-B1A4-82DECA1F3B8C/0/ico_facebook.png"
                                                    width="15"/>
                                            </a>
                                            <a href="http://www.myspace.com/zune"
                                               // onClick="window.open(this.href);return false;"
                                               // onKeyPress="window.open(this.href);return false;"
                                            >
                                                <img alt="Image: MySpace" height="16"
                                                     src="http://web.archive.org/web/20111130221814im_/https://www.zune.net/NR/rdonlyres/D8108120-F1EF-4A43-A955-533A33308329/0/ico_myspace.png"
                                                     width="15"/>
                                            </a>
                                            <a href="http://www.twitter.com/zune"
                                               // onClick="window.open(this.href);return false;"
                                               // onKeyPress="window.open(this.href);return false;"
                                            >
                                                <img alt="Image: Twitter" height="16"
                                                     src="http://web.archive.org/web/20111130221814im_/https://www.zune.net/NR/rdonlyres/9BCAAEF1-B5A9-4F19-B31B-7691F0EB2344/0/ico_twitter.png"
                                                     width="15"/>
                                            </a>
                                            <a href="http://www.youtube.com/zune"
                                               // onClick="window.open(this.href);return false;"
                                               // onKeyPress="window.open(this.href);return false;"
                                            >
                                                <img
                                                    alt="Image: YouTube" height="16"
                                                    src="http://web.archive.org/web/20111130221814im_/https://www.zune.net/NR/rdonlyres/F6FCB448-562F-4CF8-A9B3-D292A6701535/0/ico_youtube.png"
                                                    width="15"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="LastFooterCol col">
                            <ul>
                                <li className="XbcShellFooterFirst">Region/Language:</li>
                                <li style={{whiteSpace: "nowrap"}}><strong>United States</strong> / <a
                                    id="ctl00__footerControl__internationalHyperlink"
                                    href="/en-US/ChangeLocale.htm">International</a></li>
                            </ul>
                        </div>
                        <div className="copyright">©2011 Microsoft Corporation. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
