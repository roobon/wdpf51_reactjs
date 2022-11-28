import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const params = useParams();

  useEffect(() => {
    productone(params.pid);
  });
  console.log("MyID:" + params.pid);
  const productone = (id) =>
    axios.get(
      "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/getproduct.php",
      { prid: id }
    );

  return (
    <div className="col-sm-8">
      <h1>Edit Product</h1>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            type="text"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input type="text" className="form-control" name="price" />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
