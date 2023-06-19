//React - Redux
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Hooks
import useProductViewModel from "./hooks/useProductViewModel";

//View
import HorizontalProductCardView from "../view/HorizontalProductView/HorizontalProductCardView";

const HorizontalProductViewModel = () => {
  const { horizontalProducts, getProducts, nextUrl } = useProductViewModel();
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return <HorizontalProductCardView horizontalProducts={horizontalProducts} />;
};

export default HorizontalProductViewModel;
