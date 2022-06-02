// import React from 'react'
// import ReactDOM  from 'react-dom'

import logo from './logo512.png'

function formatDate(date) {
   return date.toLocaleTimeString()
}

function Comment(props) {
    return (
        <div>
        <div className='comment-body text-center'>
            <div className='comment-img'>
                <img src={props.author.image}
                    alt={props.author.name}
                />
            </div>
            <div className='user-info'>
                {props.author.name}
            </div>
            <div className='comment-text'>
            {props.text}
            </div>
            <div className='comment-date'>
            {formatDate(props.date)}
            </div>
        </div>
    </div>
    )
}

const comment = {
    date: new Date(),
    text: "What's good?",
    author: {
        name: "Kitty",
        image: logo
    }
}

function App() {
    return (
        <div>
            <Comment date={comment.date} 
            text={comment.text}
            author={comment.author}
            />
        </div>
    )
}

export default App