import SubHeading from "../../CustomCompo/SubHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import useMenu from "../../Hook/useMenu";
import SwiperImg from "../../CustomCompo/SwiperImg";

const Featured = () => {
    const [menu] = useMenu();
    const Drinks = menu.filter(item => item.category === "Drinks").slice(0, 1);
    const Fruits = menu.filter(item => item.category === "Fruits").slice(0, 1);
    const BeautyProducts = menu.filter(item => item.category === "BeautyProducts").slice(0, 1);
    const Meats = menu.filter(item => item.category === "Meats").slice(0, 1);
    const Biscuits = menu.filter(item => item.category === "Biscuits").slice(0, 1);
    const Vegetables = menu.filter(item => item.category === "Vegetables").slice(0, 1);
    const Desserts = menu.filter(item => item.category === "Desserts").slice(0, 1);
    const Toys = menu.filter(item => item.category === "Toys").slice(0, 1);

    return (
        <div className="my-32">
            <SubHeading title={"our featured"} subTitle={"we value for you"}></SubHeading>
            <div className="my-12">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    freeMode={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="w-96">{Desserts.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide >{Fruits.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide>{Drinks.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide>{Biscuits.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide>{Vegetables.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide>{Meats.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide>{BeautyProducts.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                    <SwiperSlide>{Toys.map(item => <SwiperImg key={item._id} item={item}></SwiperImg>)}</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Featured;