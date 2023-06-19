import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Grid,
  Typography,
  Button,
} from "@mui/material";

export default function ProductDetail() {
  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <Grid container flexDirection={"column"}>
          <Grid item xs={12}>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Grid item>
                <Grid container flexDirection={"column"}>
                  <Typography>Apple</Typography>
                  <Typography>Iphone 13 128 GB</Typography>
                  <Typography>En Popüler Cep Telefonu</Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Rating name="read-only" value={2} readOnly />
              </Grid>
            </Grid>
            <CardMedia
              component="img"
              sx={{ width: 200, margin: "0 auto" }}
              image={"https://cdn.akakce.com/z/apple/iphone-13.jpg"}
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
              <Button>128 GB</Button>
              <Button>256 GB</Button>
              <Button>512 GB</Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              {" "}
              132 satıcı içinde kargo dahil en ucuz fiyat seçeneği
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2"> 20.537,00 TL</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Ücretsiz Kargo</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Son Güncelleme Şimdi</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
