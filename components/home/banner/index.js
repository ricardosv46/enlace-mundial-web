import { Swiper, SwiperSlide } from "swiper/react";
import { ItemPrincipal } from "./ItemPrincipal";
import { ItemSecondary } from "./ItemSecondary";
import { DataBannerHome } from "../../../data/dataBannerHome";
import { Navigation, Pagination, Autoplay } from "swiper";

export default function Banner() {
  return (
    <div className="position-relative " style={{ zIndex: 10 }}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {DataBannerHome.map((obj, k) => (
          <SwiperSlide key={k}>
            <ItemPrincipal data={obj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
