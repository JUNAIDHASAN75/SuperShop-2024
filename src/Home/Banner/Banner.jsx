import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.png';
import b4 from '../../assets/images/b4.png';
// import logo2 from '../../assets/images/logo2.png'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {

  return (
    <div className='mb-32'>
      <div className='md:flex items-center gap-12'>
        <div className='w-full'>
        <div className=" px-3 md:px-12">
                    <h1 className="mb-5 text-5xl text-slate-700 font-bold uppercase">Welcome to</h1>
                    <h1 className="mb-5 text-5xl text-orange-500 font-bold uppercase"><span className='text-green-500'>U</span>mart</h1>
                    {/* <img src={logo2} alt="" /> */}
                    <p className='text-3xl text-slate-700 font-semibold uppercase'>Thanks for visiting our shop</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
        </div>
       
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full"
          >
            <SwiperSlide><img className='p-12' src={b1} alt="" /> </SwiperSlide>
            <SwiperSlide><img className='p-12' src={b2} alt="" /> </SwiperSlide>
            <SwiperSlide><img className='p-12' src={b3} alt="" /> </SwiperSlide>
            <SwiperSlide><img className='p-12' src={b4} alt="" /> </SwiperSlide>
            {/* <SwiperSlide><BannerImg bannerImage={banner2}></BannerImg> </SwiperSlide> */}
            {/* <SwiperSlide><BannerImg bannerImage={banner3}></BannerImg> </SwiperSlide>
        <SwiperSlide><BannerImg bannerImage={banner4}></BannerImg> </SwiperSlide>    */}
          </Swiper>
      

      </div>
    </div>
  );
};

export default Banner;