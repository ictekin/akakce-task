//React-Redux
import { useSelector } from "react-redux";

//Slicer
import { fetchProducts } from "../../features/product/productSlicer";
import { fetchProductDetail } from "../../features/product/productDetailSlicer";

const useProductViewModel = () => {
  const BASE_URL = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05";

  const horizontalProducts = useSelector(
    (state) => state.products?.result?.horizontalProducts
  );
  const products = useSelector((state) => state.products?.result?.products);

  const nextUrl = useSelector((state) => state.products?.result?.nextUrl);

  const productDetail = useSelector((state) => state.productDetail?.result);

  const selectedProductCode = useSelector(
    (state) => state.products?.selectedProductCode
  );

  const getProducts = (dispatch) => {
    dispatch(fetchProducts({ url: BASE_URL }));
  };

  const getMoreProducts = (dispatch) => {
    dispatch(fetchProducts({ url: nextUrl }));
  };

  const getProductDetail = (dispatch, url) => {
    dispatch(fetchProductDetail({ url: url }));
  };

  return {
    horizontalProducts,
    products,
    getProducts,
    getMoreProducts,
    getProductDetail,
    selectedProductCode,
    nextUrl,
    productDetail,
  };
};

export default useProductViewModel;
