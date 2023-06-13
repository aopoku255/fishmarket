import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../app/features/postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const postItems = posts?.map(({ title, content }, index) => (
    <div className=" shadow mb-2 list-group" key={index}>
      <li className="list-group-item">
        <h3>{title}</h3>
        <p>{content}</p>
      </li>
    </div>
  ));

  return <div className="container w-50 mt-5">{postItems}</div>;
};

export default PostList;
