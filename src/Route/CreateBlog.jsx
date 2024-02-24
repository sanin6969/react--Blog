import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../abc";
import { useContext } from "react";

function CreateBlog() {
  const Navigate = useNavigate();
  const [title, setTitle, titles, setTitles] = useContext(Context);
  const submit = (x) => {
    x.preventDefault();
    titles.push(title);
    Navigate("/Blogs");
  };

  return (
    <div>
      <h1 className="text-5xl flex justify-center">BLOOOOOOG</h1>
      <br />
      <br />
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          ENTER YOUR TITLE
        </label>
        <input
          type="name"
          onChange={(e) =>
            setTitle({
              ...title,
              id: Date.now(),
              title: e.target.value,
            })
          }
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          ENTER YOUR BLOGS
        </label>
        <textarea
          onChange={(e) => {
            setTitle({
              ...title,
              content: e.target.value,
            });
          }}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."></textarea>
        <br />
        <NavLink to="Blogs">
          {" "}
          <button
            onClick={submit}
            className="text-black bg-slate-700 hover:bg-slate-950-800 focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark: dark:focus:ring-slate-800">
            Submit
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default CreateBlog;
