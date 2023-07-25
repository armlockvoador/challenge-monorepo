import React from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import api from "../api/api"

export default class Timeline extends React.Component {

state = {
  posts: []
}

componentDidMount() {
  api.get("/findAll")
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
}

render() {

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {this.state.posts.map((post) => ( 
            <Post
              user={post.title}
              postImage={post.photo}
              likes={post.likes}
              dislikes={post.disliked}
              viewsPost={post.viewAmount}
              comments={post.comments.map((comment) => comment.description)}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}
}

