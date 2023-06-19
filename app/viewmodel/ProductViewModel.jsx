//React - Redux
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//Hooks
import useProductViewModel from "./hooks/useProductViewModel";
import usePagination from "./hooks/usePagination";

//Material-UI
import { Box, Grid, Pagination } from "@mui/material";

//View
import ProductView from "../view/ProductView/ProductView";

const ProductViewModel = () => {
  const dispatch = useDispatch();
  const { getMoreProducts, nextUrl } = useProductViewModel();
  const { products } = useProductViewModel();
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(products?.length / PER_PAGE);
  const data = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  useEffect(() => {
    if (!nextUrl) return;
    getMoreProducts(dispatch);
  }, [dispatch, nextUrl, getMoreProducts]);

  return (
    products && (
      <Box>
        <Grid container xs={6}>
          {data &&
            data?.currentData().map((val) => {
              return (
                <Grid item key={val.code}>
                  <ProductView
                    productImageUrl={val.imageUrl}
                    productName={val.name}
                    productPrice={val.price}
                    productCountOfPrices={val.countOfPrices}
                    productFollowCount={val.followCount}
                  />
                </Grid>
              );
            })}
        </Grid>

        <Grid item>
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Grid>
      </Box>
    )
  );
};

export default ProductViewModel;
