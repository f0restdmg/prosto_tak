import React from "react";

const TableRowElement = ({ item }) => {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};

export default TableRowElement;
