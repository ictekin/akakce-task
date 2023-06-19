//Material-UI
import { CardMedia, Rating, Grid, Typography, Button } from "@mui/material";

const ProductDetail = ({ productDetailData }) => {
  console.log(productDetailData);

  return (
    productDetailData && (
      <>
        <Grid container flexDirection={"column"}>
          <Grid item xs={12}>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Grid item>
                <Grid container flexDirection={"column"}>
                  <Typography>{productDetailData.mkName}</Typography>
                  <Typography>{productDetailData.productName}</Typography>
                  <Typography>{productDetailData.badge}</Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Rating
                  name="read-only"
                  value={productDetailData.rating}
                  readOnly
                />
              </Grid>
            </Grid>
            <CardMedia
              component="img"
              sx={{ width: 200, margin: "0 auto" }}
              image={productDetailData.imageUrl}
            />
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginTop: 3 }}
        >
          <Grid item xs={12}>
            <Typography>Kapasite Seçenekleri</Typography>
          </Grid>
          <Grid item>
            <Grid container flexDirection={"row"} gap={5}>
              {productDetailData?.storageOptions.map((val, index) => (
                <Button key={index}>{val}</Button>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              {" "}
              {productDetailData.countOfPrices} satıcı içinde kargo dahil en
              ucuz fiyat seçeneği
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              {" "}
              {productDetailData.price},00 TL
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              {productDetailData.freeShipping
                ? "Ücretsiz Kargo"
                : "Ücretli Kargo"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              Son Güncelleme {productDetailData.lastUpdate}
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  );
};

export default ProductDetail;
