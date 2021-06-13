import React from 'react'
import quoteContents from './Contents'
import Quote from './quotes'

function QueryQuote(){

    const QuoteComponent = quoteContents.map(e => <Quote key={e.id} quote={e.quote} author={e.author} url={e.url}/>)
    return(
        <div>
            {QuoteComponent}
        </div>
    )
}

export default QueryQuote