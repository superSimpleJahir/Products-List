/* eslint-disable react/prop-types */
const Product = ({ id, product, deleteProduct }) => {
  const { clothName, clothId, clothPrice, clothQuantity, color, size, date, describtion, checkbox } =
    product;
  console.log(product);
  return (
    <>
      <tr>
        <td>{clothId}</td>
        <td>{clothName}</td>
        <td>{clothPrice} </td>
        <td>{clothQuantity}</td>
        <td>{color}</td>
        <td>{size}</td>
        <td>{date}</td>
        <td>{describtion}</td>
        <td>{checkbox}</td>
        <td className="btn-delete" id={id} onClick={() => deleteProduct(id)}>
          Delete
        </td>
      </tr>
    </>
  );
};

export default Product;
