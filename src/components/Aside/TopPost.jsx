import React from "react";
import postInfo from "./topPostData";
import "../../sass/aside/topPost.scss";

function TopPost() {
  return (
    <React.Fragment>
      {postInfo.map((post) => {
        return (
          <div className="topPost" key={post.id}>
            <img className="topPost__img" src={post.img} alt={post.imgAlt} />

            <div>
              <h2 className="topPost__number">{post.number}</h2>
              <button className="topPost__link">{post.heading}</button>
              <p className="topPost__description">{post.description}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default TopPost;
