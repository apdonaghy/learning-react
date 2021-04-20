import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Kevin" 
                timeAgo="Yesterday at 3:30PM" 
                blogPost="Heyoo" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 2:20AM" 
                blogPost="This is working" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Katy" 
                timeAgo="Today at 3:40PM" 
                blogPost="Hello World" 
                avatar={faker.image.avatar()}
            />
        </div>
    );
    };
ReactDOM.render(<App />, document.querySelector('#root'));