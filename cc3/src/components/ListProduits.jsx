import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListProduits = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.cart.data);
  const items = data.carts.filter((product) => {
    return product.userId == id;
  });
  console.log(items);
  let totalPrice = 0;
  items.map((item) =>
    totalPrice = item.total
  );
  let quantityTotal = 0;
  items.map((item) =>
   quantityTotal = item.totalQuantity
  );
  let totalProducts = 0;
  items.map((item) =>
  totalProducts = item.totalProducts
  );

  return (
    <div>
      <h1>ListProduits</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Discount Percentage</th>
            <th>Discounted Price</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        
          {items.map((item) =>
            item.products.map((e) => {
              return (<tbody key={e.id}>
                <tr >
                  <td>{e.title}</td>
                  <td>{e.discountPercentage}</td>
                  <td>{e.discountedPrice}</td>
                  <td>{e.price}</td>
                  <td>{e.quantity}</td>
                  <td>{e.total}</td>
                </tr></tbody>
              );
            })
          )}
        
        <tfoot>
            <tr>
                <th>montant Total : {totalPrice} </th>
                <th> Quantity Total : {quantityTotal} </th>
                <th colSpan='5'> Total  Produist: {totalProducts} </th>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ListProduits;