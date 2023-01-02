import React from "react";
import posts from "./newPostData";
import "../../sass/main/newPosts.scss";

function NewPosts() {
  return (
    <section className="newPosts">
      <header>
        <h2 className="newPosts__header">New</h2>
      </header>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <button className="post__link">{post.header}</button>
            <p className="post__description">{post.description}</p>
            <hr />
          </div>
        );
      })}
    </section>
  );
}

export default NewPosts;
