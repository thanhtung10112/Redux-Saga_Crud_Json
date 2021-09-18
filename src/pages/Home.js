import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart, loadUsersStart } from "../redux/actions";
import Swal from "sweetalert2";

import {
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    // if (window.confirm("Are  you sure that you wanted to delete that user ?"))
    //   dispatch(deleteUsersStart(id));
    // toast.success("User Delete Successfully");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUsersStart(id));
        console.log({id});
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // loading vòng tròn
  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  useEffect(() => error && toast.error(error), [error]);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "100px" }} role="status">
        <span className="visually-hidden">loading.....</span>
      </MDBSpinner>
    );
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <h2 className="text-secondary">User List</h2>
      <div>
        <MDBTable bordered>
          <MDBTableHead>
            <tr className="table-dark">
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phone</th>
              <th scope="col">Address</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          {users &&
            users.map((item, index) => (
              <MDBTableBody key={index}>
                <tr className="table-secondary">
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    <MDBBtn
                      className="m-1"
                      tag="a"
                      color="none"
                      onClick={() => handleDelete(item.id)}
                    >
                      <MDBTooltip title="Delete" tag="a">
                        <MDBIcon
                          fas
                          icon="trash-alt"
                          style={{ color: "#dd4b39", marginRight: "20px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </MDBBtn>{" "}
                    {"   "}
                    <Link to={`/EditUser/${item.id}`}>
                      <MDBTooltip title="Edit" tag="a">
                        <MDBIcon
                          fas
                          icon="user-edit"
                          style={{
                            color: "#55acee",
                            marginBottom: "10px",
                            marginRight: "20px",
                          }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>
                    {"     "}
                    <Link to={`/UserInfo/${item.id}`}>
                      <MDBTooltip title="view" tag="a">
                        <MDBIcon
                          fas
                          icon="eye"
                          style={{ color: "#3b5998", marginBottom: "10px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>
                  </td>
                </tr>
              </MDBTableBody>
            ))}
        </MDBTable>
      </div>
    </div>
  );
};

export default Home;
