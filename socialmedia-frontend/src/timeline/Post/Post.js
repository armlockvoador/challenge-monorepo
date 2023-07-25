import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


function sayHello() {
  alert('Hello!');
}

function Post({ user, postImage, likes, dislikes, viewsPost, comments }) {
  
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user}
        </div>
        <button onClick={sayHello}>
        Editar
        </button>
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <div className="liked">{likes}</div>
            <ThumbDownOffAltIcon className="postIcon" />
            <div className="disliked">{dislikes}</div>
            <RemoveRedEyeIcon className="postIcon" />
            <div className="viewsPost">{viewsPost}</div>
          </div>
        </div>
      </div>
      <div className="comments">
        <h5>Comments</h5>
        <p>{comments}</p>
      </div>
      
    </div>
  );
}

export default Post;
