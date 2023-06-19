import { Card, CardContent, Grid, Typography, CardMedia } from "@mui/material";

const ProductView = ({
  productImageUrl,
  productName,
  productPrice,
  productCountOfPrices,
  productFollowCount,
}) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CardMedia
            component="img"
            image={productImageUrl}
            sx={{ width: 151 }}
          />
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
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductView;
