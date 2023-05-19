import React from "react";
function Details({views,createdAt}){
    return(
        <p>{views} Views | Uploaded {createdAt}</p>
    )
}
export default Details