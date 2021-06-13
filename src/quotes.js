import React from 'react';
import "./index.css"
function Quote(props){
    return(
        <main class="card" style={{backgroundImage:props.url}}>
        <div class ="inner">
            <h3 class="title">{props.quote}</h3>
            <h4 class="subtitle">{props.author}</h4>
            <br/>
        </div>
        </main>
    )
};

export default Quote;