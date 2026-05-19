import React from 'react';
import {socialBase, imageCatalogBase} from "../api/constants";

function HomeMusicCard(entry) {
    console.log(entry);
    let e = entry.entry;
    console.log(e);
    if (e == null)
        return (<></>);
    return (
        <tr style={{textAlign: "left", verticalAlign: "top"}}>
            <td width="75">
                <a href={socialBase + "/album/" + e["primaryArtist"]["id"]["#text"]}>
                    <img alt={"Image: " + e["primaryArtist"]["name"]["#text"]} height="70" width="70"
                         src={imageCatalogBase + "/image/" + e["primaryArtist"]["id"]["#text"]}/>
                </a>
            </td>
            <td>
                <a className="linkgray" href={socialBase + "/track/" + e["a:id"]["#text"]}>
                    <strong>{e["primaryArtist"]["name"]["#text"]}</strong>
                </a>
                <br/>
                <a className="linkgray" href={socialBase + "/track/" + e["a:id"]["#text"]}>{e["a:title"]["#text"]}</a>
            </td>
        </tr>
    );
}

export default HomeMusicCard;