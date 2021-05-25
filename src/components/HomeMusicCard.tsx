import React from 'react';

function HomeMusicCard(entry) {
    console.log(entry);
    let e = entry.entry;
    console.log(e);
    if (e == null)
        return (<></>);
    return (
        <tr style={{textAlign: "left", verticalAlign: "top"}}>
            <td width="75">
                <a href={"http://social.zune.net/album/" + e["primaryArtist"]["id"]["#text"]}>
                    <img alt={"Image: " + e["primaryArtist"]["name"]["#text"]} height="70" width="70"
                         src={"http://127.0.0.1/v3.2/en-US/image/" + e["primaryArtist"]["id"]["#text"]}/>
                </a>
            </td>
            <td>
                <a className="linkgray" href={"http://social.zune.net/track/" + e["a:id"]["#text"]}>
                    <strong>{e["primaryArtist"]["name"]["#text"]}</strong>
                </a>
                <br/>
                <a className="linkgray" href={"http://social.zune.net/track/" + e["a:id"]["#text"]}>{e["a:title"]["#text"]}</a>
            </td>
        </tr>
    );
}

export default HomeMusicCard;