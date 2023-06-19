//React
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//Material-UI
import { Box, Grid, Typography, CardMedia, Button } from "@mui/material";

//Slicers
import { setSelectedProductCode } from "../../features/product/productSlicer";

const ProductsView = ({
  productImageUrl,
  productName,
  productPrice,
  productCountOfPrices,
  productFollowCount,
  productCode,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <CardMedia component="img" sx={{ width: 151 }} image={productImageUrl} />
      <Grid
        container
        flexDirection={"column"}
        sx={{ marginLeft: "25px" }}
        spacing={2}
      >
        <Grid item>
          <Typography variant="subtitle2" sx={{ color: "#737373" }}>
            {productName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <span sx={{ fontWeight: "bold" }}>{productPrice}</span>.00 TL
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">{productCountOfPrices}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">{productFollowCount}</Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              dispatch(setSelectedProductCode(productCode));
              navigate("/detail");
            }}
          >
            Detay
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsView;
