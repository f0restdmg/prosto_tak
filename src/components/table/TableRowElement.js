import React, { useCallback } from "react";

const TableRowElement = ({ item, chooseItem }) => {
  const handleChoose = useCallback(() => {
    chooseItem(item);
  }, [chooseItem, item]);
  
  return (
    <tr onClick={handleChoose}>
      <th scope="row">{item.id}</th>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};

export default TableRowElement;
