import React, { useState } from "react";

function Vote({ upvotes, downvotes }) {
    const [vote,setVote]=useState({
        upvote:upvotes,
        downvote:downvotes
    })

    function handleChange(event){
        const {name}=event.target
        setVote(prevVote=>({
            ...prevVote,
            [name]:prevVote[name]+1
        }))
    }

    return (
        <div className="vote">
            <button name="upvote" onClick={handleChange}>
                {vote.upvote}&nbsp;
                <i className="fa fa-thumbs-up" aria-hidden="true" style={{color:"#FFD75B"}}></i>
            </button>
            <button 
            name="downvote"
            onClick={handleChange}>
                {vote.downvote}&nbsp;
                <i className="fa fa-thumbs-down" aria-hidden="true"
                style={{color:"#FFD75B"}}></i>
            </button>
        </div>
    )
}
export default Vote