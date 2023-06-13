import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postsAdded } from "../../app/features/postSlice";
import { nanoid } from "@reduxjs/toolkit";

const FormPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleclick = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postsAdded(title, content));
    }
    setContent("");
    setTitle("");
  };
  return (
    <form className="form w-50 card border-0 m-5 d-flex flex-column justify-content-center align-items-center mx-auto">
      <input
        type="text"
        className="form-control mb-3"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="form-control"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="button"
        onClick={handleclick}
        className="btn btn-success w-100 mt-3"
      >
        submit
      </button>
    </form>
  );
};

export default FormPost;
