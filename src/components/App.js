import video from "../data/video.js";
import Details from "./Details.js";
import Vote from "./Vote.js"
import Comment from "./Comment.js";

function App() {
  console.log("Here's your data:", video);
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <Details views={video.views} createdAt={video.createdAt}/>
      <Vote upvotes={video.upvotes} downvotes={video.downvotes} />
      <Comment comments={video.comments}/>
    </div>
  );
}

export default App;
