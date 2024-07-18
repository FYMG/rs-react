interface IPaginationProperties {
  currentPage: number;
  onPageChange?: (value: number) => void;
  pageTotal: number;
}

function Pagination({ onPageChange, pageTotal, currentPage }: IPaginationProperties) {
  return (
    <div className="flex flex-row justify-center gap-2 p-2">
      {pageTotal > 0 &&
        Array.from({ length: pageTotal }).map((_, index) => (
          <button
            className={`${index + 1 === currentPage ? 'bg-blue-600 text-white' : 'bg-white'}`}
            type="button"
            key={`page-${index + 1}`}
            onClick={() => {
              onPageChange?.(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
