import React from "react";

function Article({title, date, review}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{review}</p>
        </article>
    );
}
export default Article;