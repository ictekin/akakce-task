//React - Redux
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Material-UI
import { Card, CardContent } from "@mui/material";

//Hooks
import useProductViewModel from "./hooks/useProductViewModel";

//Views
import ProductDetailView from "../view/ProductDetail/ProductDetail";

const ProductDetailViewModel = () => {
  const { getProductDetail, productDetail, selectedProductCode } =
    useProductViewModel();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedProductCode) {
      getProductDetail(
        dispatch,
        "https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code={" +
          selectedProductCode +
          "}"
      );
    }
  }, [dispatch]);

  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <ProductDetailView productDetailData={productDetail} />
      </CardContent>
    </Card>
  );
};

export default ProductDetailViewModel;
