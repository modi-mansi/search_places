import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5; // Maximum number of visible page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      {totalPages > 0 && (
        <div>
          {pageNumbers.length > maxVisiblePages ? (
            <div>
              {currentPage > 1 && (
                <button onClick={() => handleClick(1)}>First</button>
              )}
              {currentPage > 3 && (
                <span>...</span>
              )}
              {pageNumbers.slice(Math.max(currentPage - 2, 0), currentPage + 1).map((page) => (
                <button key={page} onClick={() => handleClick(page)}>{page}</button>
              ))}
              {currentPage < totalPages - 2 && (
                <span>...</span>
              )}
              {currentPage < totalPages && (
                <button onClick={() => handleClick(totalPages)}>Last</button>
              )}
            </div>
          ) : (
            <div>
              {pageNumbers.map((page) => (
                <button key={page} onClick={() => handleClick(page)}>{page}</button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
