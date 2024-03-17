import logo2 from '../assets/images/logo2.png'
const BannerImg = ({bannerImage}) => {
    return (
        <div className="hero ">
            <img className=" w-[100%] " src={bannerImage} alt="" />
            <div className="hero-overlay   bg-black bg-opacity-40 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold uppercase">Welcome to</h1>
                    <img src={logo2} alt="" />
                    <p className='text-3xl text-white font-semibold'>Thanks for visiting our shop</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default BannerImg;