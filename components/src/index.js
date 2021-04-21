import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import Approval from './Approval'

const App = () => {
    return (
        <div className="ui container comments">
            <Approval>
                Are you sure?
            </Approval>
            <Approval>
                <CommentDetail 
                    author="Kevin" 
                    timeAgo="Yesterday at 3:30PM" 
                    blogPost="Heyoo" 
                    avatar={faker.image.avatar()}
                />
            </Approval>
            <Approval>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 2:20AM" 
                    blogPost="This is working here" 
                    avatar={faker.image.avatar()}
                />
             </Approval>
             <Approval>
                <CommentDetail 
                    author="Katy" 
                    timeAgo="Today at 3:40PM" 
                    blogPost="Hello World!" 
                    avatar={faker.image.avatar()}
                />
            </Approval>
        </div>
    );
    };
ReactDOM.render(<App />, document.querySelector('#root'));