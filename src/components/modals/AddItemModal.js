import React, { useCallback, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addItem } from "@/redux/modules/table/action-creators";

const AddItemModal = ({ isOpen, closeModal }) => {
  const handleCloseModal = useCallback(() => {
    closeModal()
  }, [closeModal]);

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [newObject, setNewObject] = useState({});

  const dispatch = useDispatch();

  const handleAddNewItem = () => {
    dispatch(addItem(newObject));
    closeModal();
  };

  const handleInputChange = (target) => {
    const { name, value } = target;
    setNewObject(() => {
      if (
        name === "streetAddress" ||
        name === "city" ||
        name === "zip" ||
        name === "state"
      ) {
        return {
          ...newObject, id: getRandomInRange(1, 1000),
          address: { ...newObject.address, [name]: value },
        };
      } else {
        return { ...newObject, id: getRandomInRange(1, 1000), [name]: value };
      }
    });
  };

  return (
    <Modal show={isOpen} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="id1">First Name</label>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="streetAddress"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                name="state"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Zip-code
              </label>
              <input
                type="text"
                className="form-control"
                name="zip"
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                onChange={(e) => handleInputChange(e.target)}
              ></textarea>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleAddNewItem}>
          Go Add!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItemModal;
