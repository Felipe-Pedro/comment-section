import CommentFooter from "./commentFooter";
import CommentHeader from "./commentHeader";

export default function Reply(props) {
    return (
        <div className="comment">
            <CommentHeader avatarPath={props.avatarPath} username={props.username} date={props.date} />
            <p className="comment-content">
            <p className="tag">@{props.replyingTo}</p>
                {props.content} 
            </p>
            <CommentFooter rate={props.rate} />
        </div>
    );
}