import './App.css';
import CommentContainer from './components/commentContainer';
import CommentPost from './components/commentPost';

const data = require('./data.json');

function App() {
  return (
    <div className="container">
      <div className="commentSection">
        {
          data['comments'].map(currentComment => {
            return <CommentContainer key={currentComment['id']}
              avatarPath={currentComment['user']['image']['png']} 
              username={currentComment['user']['username']} 
              date={currentComment['createdAt']}
              content={currentComment['content']}
              rate={currentComment['score']}
              replies={currentComment['replies']} />
          })
        }
      </div>
      <footer className="postComment">
        <CommentPost image={data["currentUser"]["image"]["png"]} />
      </footer>
    </div>
  );
}

export default App;