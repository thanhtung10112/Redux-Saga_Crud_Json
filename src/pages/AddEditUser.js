import { MDBBtn, MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { createUsersStart, updateUsersStart } from "../redux/actions";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};
const AddEditUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, phone, address } = formValue;

  //* Edit User
  //* lấy id and add ` || "" ` vào value
  const { users } = useSelector((state) => state.data);
  const { id } = useParams();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  //! End Edit User

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUsersStart(formValue));
        toast.success("user add Successfully 👌", {
          theme: "dark",
        });
        setTimeout(() => history.push("/"), 2000);
      } else {
        dispatch(updateUsersStart({ id, formValue }));
        setEditMode(false);
        toast.success("User Update Successfully 👌", {
          theme: "dark",
        });
        setTimeout(() => history.push("/"), 1000);
      }
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <MDBValidation
      className=" g-3 container"
      style={{ marginTop: "50px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {!editMode ? "ADD User Detail" : "Update User Detail"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={name || ""}
          name="name"
          type="name"
          onChange={onInputChange}
          required
          label="name"
          validation="Please provide a name"
          invalid
        />
        <br />
        <MDBInput
          value={email || ""}
          name="email"
          type="email"
          onChange={onInputChange}
          required
          label="email"
          validation="Please provide a email"
          invalid
        />
        <br />
        <MDBInput
          value={phone || ""}
          name="phone"
          type="number"
          onChange={onInputChange}
          required
          label="phone"
          validation="Please provide a phone"
          invalid
        />

        <br />
        <MDBInput
          value={address || ""}
          name="address"
          type="text"
          onChange={onInputChange}
          required
          label="address"
          validation="Please provide a address"
          invalid
        />

        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? "ADD" : "Update"}
          </MDBBtn>

          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
