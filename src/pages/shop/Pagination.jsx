import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center py-6 gap-3">
      {pages.map((page, index) => (
        <button
          key={index}
          className="px-3 py-1 text-white font-normal hover:bg-amber-500 bg-yellow rounded-lg"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
