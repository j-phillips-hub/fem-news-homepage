import React from "react";
import TopPost from "./TopPost";
import "../../sass/aside/aside.scss";

function TopPostsContainer() {
  return (
    <aside className="topPostContainer">
      <TopPost />
    </aside>
  );
}

export default TopPostsContainer;
