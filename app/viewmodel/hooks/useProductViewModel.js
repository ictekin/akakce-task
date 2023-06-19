//Redux
import { useSelector } from "react-redux";

//Slicer
import { fetchProducts } from "../../features/product/productSlicer";

const useProductViewModel = () => {
  const BASE_URL = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05";

  const horizontalProducts = useSelector(
    (state) => state.products?.result?.horizontalProducts
  );
  const products = useSelector((state) => state.products?.result?.products);

  const nextUrl = useSelector((state) => state.products?.result?.nextUrl);

  const getProducts = (dispatch) => {
    dispatch(fetchProducts({ url: BASE_URL }));
  };

  const getMoreProducts = (dispatch) => {
    dispatch(fetchProducts({ url: nextUrl }));
  };

  return {
    horizontalProducts,
    products,
    getProducts,
    getMoreProducts,
    nextUrl,
  };
};

export default useProductViewModel;
