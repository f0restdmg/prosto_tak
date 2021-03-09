import React from "react";
import { useSelector } from "react-redux";

const DetailElement = () => {
  const selected = useSelector((state) => state.selectedItem);

  if (selected.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <div className="card">
        <div className="card-body">
          <h6 className="card-subtitle mb-3 text-muted">
            Выбран пользователь:{" "}
            <b>{`${selected.firstName} ${selected.lastName}`}</b>
          </h6>
          <h6 className="card-subtitle mb-3 text-muted">Описание:</h6>
          <textarea
            className="form-control mb-3 text-muted"
            value={selected.description}
          ></textarea>
          <h6 className="card-subtitle mb-3 text-muted">
            Адрес проживания: <b>{selected.address.streetAddress}</b>
          </h6>
          <h6 className="card-subtitle mb-3 text-muted">
            Город: <b>{selected.address.city}</b>
          </h6>
          <h6 className="card-subtitle mb-3 text-muted">
            Провинция/штат: <b>{selected.address.state}</b>
          </h6>
          <h6 className="card-subtitle mb-3 text-muted">
            Индекс: <b>{selected.address.zip}</b>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DetailElement;
