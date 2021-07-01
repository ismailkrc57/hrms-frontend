import React from "react";

export default function Search() {
  return (
    <div className="mr-0">
      <form className="form-inline my-2 my-lg-0 mr-0 ">
        <ul className="p-10">
          <li>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </li>
          <li>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
