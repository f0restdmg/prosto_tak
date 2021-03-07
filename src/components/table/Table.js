import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/modules/table/action-creators";
import TableRowElement from "./TableRowElement";
import { selectItem } from "../../redux/modules/tableElement/action-creators";
import "./style.css";
import Search from "../search/Search";
import { getData } from "../../redux/modules/table/selectors";
import AddItemModal from "../modals/AddItemModal";
import Pagination from "../pagination/Pagination";

const Table = () => {
  const dispatch = useDispatch();

  const items = useSelector(getData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setNewItems(items);
  }, [items]);

  const [newItems, setNewItems] = useState([]);

  const selItem = useCallback(
    (item) => {
      dispatch(selectItem(item));
    },
    [dispatch]
  );

  const [sort, setSort] = useState(null);

  useMemo(() => {
    if (sort !== null) {
      newItems.sort((a, b) => {
        if (a[sort.key] < b[sort.key]) {
          return sort.direction === "asc" ? -1 : 1;
        }
        if (a[sort.key] > b[sort.key]) {
          return sort.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
  }, [newItems, sort]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sort && sort.key === key && sort.direction === "asc")
      direction = "desc";
    setSort({ key, direction });
  };

  const getClassName = useCallback(
    (name) => {
      if (!sort) {
        return;
      }
      return sort.key === name ? sort.direction : undefined;
    },
    [sort]
  );

  const [openModal, setOpenModal] = useState(false);

  const addNewItem = useCallback(() => {
    setOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleFilterData = useCallback((items) => {
    setNewItems(items);
  }, []);

  //Pagination

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(10);

  const indexOfLastItem = currentPage * postsPerPage;

  const indexOfFirstItem = indexOfLastItem - postsPerPage;

  const currentItems = newItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);
  return (
    <>
      <Search handleFilterData={handleFilterData} />
      <button
        className="btn d-block w-100 btn-primary mb-3"
        onClick={addNewItem}
      >
        Add Item
      </button>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th
              scope="col"
              className={getClassName("id")}
              onClick={() => handleSort("id")}
            >
              #ID
            </th>
            <th
              scope="col"
              className={getClassName("firstName")}
              onClick={() => handleSort("firstName")}
            >
              First Name
            </th>
            <th
              scope="col"
              className={getClassName("lastName")}
              onClick={() => handleSort("lastName")}
            >
              Last Name
            </th>
            <th
              scope="col"
              className={getClassName("email")}
              onClick={() => handleSort("email")}
            >
              Email
            </th>
            <th
              scope="col"
              className={getClassName("phone")}
              onClick={() => handleSort("phone")}
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 &&
            currentItems.map((item, index) => (
              <TableRowElement key={item.id} item={item} chooseItem={selItem} />
            ))}
        </tbody>
      </table>
      {newItems.length > postsPerPage && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={newItems.length}
          paginate={paginate}
        />
      )}
      <AddItemModal isOpen={openModal} closeModal={closeModal} />
    </>
  );
};

export default Table;
