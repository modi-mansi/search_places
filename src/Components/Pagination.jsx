import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {totalPages > 0 && (
        <ul>
          {pageNumbers.map((page) => (
            <li key={page}>
              <button onClick={() => onPageChange(page)} disabled={page === currentPage}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pagination;
