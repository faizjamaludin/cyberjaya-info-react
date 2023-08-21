import React, { useState, useEffect, useMemo } from "react";
import TableMenu from "../TableMenu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import dateFormat from "dateformat";
import DataTable from "react-data-table-component";

import { getAllNews } from "../../features/news/newsSlice";

const columns = [
  {
    name: "#",
    cell: (row: any, index: any) => <div>{index + 1}</div>,
    width: "3rem",
  },
  {
    name: "Title",
    selector: (row: any) => row.newsTitle,
    width: "35rem",
  },
  {
    name: "Content",
    selector: (row: any) => row.newsInfo,
    width: "35rem",
  },
  {
    name: "Date Created",
    selector: (row: any) => dateFormat(row.date, "mmmm dS, yyyy"),
    width: "10rem",
  },
  {
    cell: (row: any) => <TableMenu />,
    right: true,
  },
];

const customStyle = {
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#FFF0D2",
    },
  },
};

const FilterComponent = ({ filterText, onFilter }: any) => (
  <>
    <input
      className="border p-2 placeholder:text-sm rounded outline-0"
      id="search"
      type="search"
      placeholder="Filter By Title"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
  </>
);

function NewsData() {
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch<any>();

  const selectNews = (state: RootState) => state.news;
  const { newsItem } = useSelector(selectNews);

  useEffect(() => {
    dispatch(getAllNews());
    setLoading(false);
  }, [dispatch, filterText]);

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const handleRowClick = (row: any) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterItems = (data: any, filterText: string) => {
    if (data) {
      return data.filter(
        (item: any) =>
          item.newsTitle &&
          item.newsTitle.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  };

  const filteredItems = filterItems(newsItem, filterText);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      customStyles={customStyle}
      progressPending={loading}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      pointerOnHover
      highlightOnHover
    />
  );
}

export default NewsData;
