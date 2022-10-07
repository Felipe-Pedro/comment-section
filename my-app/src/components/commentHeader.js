export default function CommentHeader(props) {
    return (
        <header className="comment-header">
            <img className="user-avatar" src={props.avatarPath} alt="User profile" />
            <p className="username">{props.username}</p>
            <p className="comment-date">{props.date}</p>
        </header>
    );
}