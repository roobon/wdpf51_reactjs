import axios from "axios";
import { useState, useEffect } from "react";

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    allprod();
  }, []);
  const allprod = async () => {
    axios
      .get(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/allproducts.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/delproduct.php",
        {
          prodid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">All Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => delconfirm(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
