type Props = {
  viewCurrentPage: number;
  totalPage: number;
  onPageChange: (num: number) => void;
  cardsPerPage: number;
  hundlePerPage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Footer = ({
  viewCurrentPage,
  totalPage,
  onPageChange,
  cardsPerPage,
  hundlePerPage,
}: Props) => {
  let firstIndex = viewCurrentPage - 2;
  if (firstIndex < 1) firstIndex = 1;
  if (firstIndex > totalPage - 4) firstIndex = viewCurrentPage - 4;
  if (firstIndex < 1) firstIndex = viewCurrentPage;
  let lastIndex = firstIndex + 4;
  if (lastIndex > totalPage - 2) lastIndex = firstIndex + 5;
  if (lastIndex > totalPage) lastIndex = totalPage;

  const pageNumbers = [];

  for (let i = firstIndex; i <= lastIndex; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button
        type="button"
        disabled={viewCurrentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First Page
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          disabled={viewCurrentPage === number}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        disabled={viewCurrentPage === totalPage}
        onClick={() => onPageChange(totalPage)}
      >
        Last Page
      </button>
      <label>
        <select value={cardsPerPage} onChange={hundlePerPage}>
          <option>8</option>
          <option>16</option>
        </select>
      </label>
    </div>
  );
};
