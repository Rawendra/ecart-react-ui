import React from "react";
import { useEffect } from "react";
import { getProducts } from "../../communication/api";
function ProductInventory() {
  useEffect( () => {
  getProducts().then(products=>console.log(products));
  }, []);

  return <div>ProductInventory</div>;
}

export default ProductInventory;
