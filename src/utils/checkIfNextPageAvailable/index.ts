const checkIfNextPageAvailable = (
  page: number,
  pageSize: number,
  totalResults: number
) => {
  const itemsOnPrevPage = (page - 1) * pageSize;

  return !(itemsOnPrevPage + pageSize > totalResults);
};

export default checkIfNextPageAvailable;
