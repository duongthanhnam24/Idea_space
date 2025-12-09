import { Pagination  } from "flowbite-react";

export default function Paginations({ currentPage = 1,setCurrentPage, totalPage }) {


  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} className="p-4!" totalPages={totalPage} onPageChange={onPageChange} />
    </div>
  );
}
