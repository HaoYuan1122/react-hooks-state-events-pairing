import React, { useState } from "react";
function Comment({ comments }) {
    const [conButton, setConButton] = useState(true)
    function handleClick() {
        setConButton(!conButton)
    }

    const commentList = comments.map(comment => (
        <li key={comment.id}>
            <strong>{comment.user}</strong>
            <p>{comment.comment}</p>
        </li>
    ))
    return (
        <>
            <button onClick={handleClick}>{conButton===true?'hide Comments':'show Comments'}
            </button>
            <hr></hr>
            
            {conButton?<h2>{comments.length} Comments</h2>:null}
            <ul>
            
                {conButton?commentList:null}
            </ul>

        </>
    )
}
export default Comment