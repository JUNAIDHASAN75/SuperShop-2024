import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/images/banner1.jpg'
// import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner5.jpg'
 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerImg from '../../CustomCompo/BannerImg';



const Banner = () => {
    
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><BannerImg bannerImage={banner1}></BannerImg> </SwiperSlide>
        {/* <SwiperSlide><BannerImg bannerImage={banner2}></BannerImg> </SwiperSlide> */}
        <SwiperSlide><BannerImg bannerImage={banner3}></BannerImg> </SwiperSlide>
        <SwiperSlide><BannerImg bannerImage={banner4}></BannerImg> </SwiperSlide>   
      </Swiper>
    </>
    );
};

export default Banner;