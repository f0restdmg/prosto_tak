import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/action-creators";
import TableRowElement from "./TableRowElement";

const Table = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const items = useSelector((state) => state.items);

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 &&
          items.map((item, index) => (
            <TableRowElement key={index} item={item} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
