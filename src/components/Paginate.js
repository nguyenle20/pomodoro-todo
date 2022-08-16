import { Pagination } from "antd";
import { useState } from "react";


// const indexOfLastPage = page * itemPerPage;
// const indexOfFirstPage = indexOfLastPage - itemPerPage;
// const currentItem = currentList.slice(indexOfFirstPage, indexOfLastPage);



export const Paginate = ({count, setOffSet, searchValue, fetchData, itemPerPage, setItemPerPage}) => {
  const onShowSizeChange = (current, pageSize) => {
    setItemPerPage(pageSize);
  }
  // const [itemPerPage, setItemPerPage] = useState(5);  
  const [page, setPage] = useState(1);
  
  const handlePaginate = (value) => {
     setOffSet();
  }


  return (
    <Pagination 
      className="pagination"
      current = {page}
      total = {count}
      pageSize = {itemPerPage}
      onChange = {(value) => {
        handlePaginate()
        setPage(value)
        setOffSet((value-1)*itemPerPage)
        fetchData(searchValue, itemPerPage, (value-1)*itemPerPage);
      }}
        // (value) => setPage(value)
      onShowSizeChange={onShowSizeChange}
      showSizeChanger
    />
  )
}