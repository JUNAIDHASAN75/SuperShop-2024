

const SwiperImg = ({item}) => {
    return (
        <div className="relative">
            <img className="w-full" src={item?.image} alt="" />
            <h2 className="absolute bottom-0 start-0 ps-4 font-semibold text-2xl text-white bg-gradient-to-tr from-orange-500 to-orange-50 bg-opacity-80 pe-12">{item.category}</h2>
        </div>
    );
};

export default SwiperImg;