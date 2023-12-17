/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { getDataFromLocalStorase } from "../../assets/utils/getDatafromlocalstorase";
import "./FormData.css";

const FormData = () => {
  const [allUser, setAllUser] = useState(getDataFromLocalStorase);
  const [user, setUser] = useState({
    clothName: "",
    clothId: "",
    clothPrice: "",
    clothQuantity: "",
    color: "",
    size: "",
    date: "",
    describtion: "",
    checkbox: false,
  });

  const { clothName, clothId, clothPrice, clothQuantity, date,size, color,describtion, checkbox } = user;

  const inputChange = (e) => {
    const fillName = e.target.name;
    console.log(fillName);
    setUser({ ...user, [fillName]: e.target.value });
    console.log(user);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setAllUser([...allUser, user]);
    setUser({
      clothName: "",
      clothId: "",
      clothPrice: "",
      clothQuantity: "",
      color: "",
      size: "",
      date: "",
      describtion: "",
      checkbox: false,
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allUser));
  }, [allUser]);

  // Delete Product from list
  const deleteProduct = (id) => {
    const remove = allUser.filter((element, i) => i !== id);
    setAllUser(remove);
  };
  const allProductRemove = () => {
    setAllUser([]);
  };

  return (
    <section>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="ClothId">
            Cloth Id: <br />
            <input
              onChange={inputChange}
              value={clothId}
              type="number"
              name="clothId"
              id="ClothId"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="ClothName">
            Cloth Name: <br />
            <input
              onChange={inputChange}
              value={clothName}
              type="text"
              name="clothName"
              id="ClothName"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="Price">
            Price:
            <br />
            <input
              onChange={inputChange}
              value={clothPrice}
              type="number"
              name="clothPrice"
              id="Price"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="Quantity">
            Quantity:
            <br />
            <input
              onChange={inputChange}
              value={clothQuantity}
              type="number"
              name="clothQuantity"
              id="Quantity"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="color">
            Color select:
            <br />
            <select onChange={inputChange} value={color} name="color" id="color" required>
              <option value="">select your color</option>
              <option value="Red">red</option>
              <option value="Blue">blue</option>
              <option value="Green">green</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="size">
            Please sleect Size:
            <br />
            <input
              onChange={inputChange}
              value="M"
              checked = {size === 'M'}
              type="radio"
              name="size"
              id="size"
              required
            />
            M
            <input
              onChange={inputChange}
              value="L"
              checked ={size === 'L'}
              type="radio"
              name="size"
              id="size"
              required
            />
            L
            <input
              onChange={inputChange}
              value="XL"
              type="radio"
              checked ={size === 'XL'}
              name="size"
              id="size"
              required
            />
            XL
          </label>
        </div>

        <div>
          <label htmlFor="ManufactureDate">
            Manufacture date:
            <br />
            <input
              onChange={inputChange}
              value={date}
              type="date"
              name="date"
              id="ManufactureDate"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="Description">
            Description:
            <br />
            <textarea
              onChange={inputChange}
              value={describtion}
              name="describtion"
              id="Description"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="TandC">
            Terms and condition:
            <input
              onChange={inputChange}
              checked={checkbox}
              type="checkbox"
              name="checkbox"
              id="TandC"
              value="I agree"
              required
            />
          </label>
        </div>

        <button className="btn-add">Add file</button>
      </form>
      {allUser.length > 0 ? (
        <ProductList
          data={allUser}
          deleteProduct={deleteProduct}
          allProductRemove={allProductRemove}
        />
      ) : (
        <div className="center">
          <h1 className="empty">Empty Product</h1>
        </div>
      )}
    </section>
  );
};
export default FormData;
