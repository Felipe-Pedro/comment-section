import CommentFooter from "./commentFooter";
import CommentHeader from "./commentHeader";
import Reply from "./reply";

export default function CommentContainer(props) {
    return (
        <div>
            <div className="comment">
                <CommentHeader avatarPath={props.avatarPath} username={props.username} date={props.date} />
                <p className="comment-content"> {props.content} </p>
                <CommentFooter rate={props.rate} />
            </div>
            <div className="replies">
                { props.replies &&
                    props.replies.map(currentReply => {
                        return <Reply key={currentReply['id']}
                            avatarPath={currentReply['user']['image']['png']}
                            username={currentReply['user']['username']}
                            date={currentReply['createdAt']}
                            content={currentReply['content']}
                            rate={currentReply['score']}
                            replyingTo={currentReply['replyingTo']} />
                    })
                }
            </div>
        </div>
    );
}