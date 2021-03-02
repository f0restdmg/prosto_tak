import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/modules/table/action-creators";
import TableRowElement from "./TableRowElement";
import { selectItem } from "../../redux/modules/tableElement/action-creators";
import "./style.css";
import Search from "../search/Search";
import { getData } from "../../redux/modules/table/selectors";

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const selItem = useCallback(
    (item) => {
      dispatch(selectItem(item));
    },
    [dispatch]
  );

  const items = useSelector(getData);

  const [sort, setSort] = useState(null);

  useMemo(() => {
    if (sort !== null) {
      items.sort((a, b) => {
        if (a[sort.key] < b[sort.key]) {
          return sort.direction === "asc" ? -1 : 1;
        }
        if (a[sort.key] > b[sort.key]) {
          return sort.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
  }, [items, sort]);

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

  return (
    <>
      <Search />
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
          {items.length > 0 &&
            items.map((item, index) => (
              <TableRowElement key={index} item={item} chooseItem={selItem} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
