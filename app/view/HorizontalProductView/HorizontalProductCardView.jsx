//Material-UI
import { Card, CardContent } from "@mui/material";

//React-Slick
import Slider from "react-slick";

//View
import Content from "./Content";

const HorizontalProductCardView = ({ horizontalProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Slider {...settings}>
          {horizontalProducts &&
            horizontalProducts.map((val) => {
              return (
                <Content
                  key={val.code}
                  productImageUrl={val.imageUrl}
                  productName={val.name}
                  productPrice={val.price}
                  productCountOfPrices={val.countOfPrices}
                  productFollowCount={val.followCount}
                />
              );
            })}
        </Slider>
      </CardContent>
    </Card>
  );
};

export default HorizontalProductCardView;
