export default function CommentFooter(props) {
    return (
        <footer className="comment-footer">
            <div className="comment-rate-container">
                <button className="rate-button"><img alt="Rate comment up" src="/images/icon-plus.svg" /></button>
                <p className="comment-rate">{props.rate}</p>
                <button className="rate-button"><img alt="Rate comment down" src="/images/icon-minus.svg" /></button>
            </div>
            <button className="reply-comment"><img alt="Reply" src="images/icon-reply.svg" /> Reply</button>
        </footer>
    );
}