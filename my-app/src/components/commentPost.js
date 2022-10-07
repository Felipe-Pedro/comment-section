import React from 'react';

export default class CommentPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    
    handleOnChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleOnSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form className="comment-form" onSubmit={this.handleOnSubmit} method="post" action='/muda'>
                <textarea className="comment-input" placeholder="Add a comment..." onChange={this.handleOnChange} />
                <div className="line-container">
                    <img alt="profile" className="user-avatar" src={this.props.image} />
                    <input className="submit" type="Submit" value="SEND" />
                </div>
            </form>
        );
    }
}