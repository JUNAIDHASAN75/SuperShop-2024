import  { useState } from 'react';
import SubHeading from "../../CustomCompo/SubHeading";
import useMenu from "../../Hook/useMenu";
import MenuCart from "./MenuCart/MenuCart";

const Menu = () => {
    const [menu,isLoading] = useMenu();
    const [filteredMenu, setFilteredMenu] = useState(menu); // State to hold filtered menu
    const [activeCategory, setActiveCategory] = useState("All"); // State to hold active category
    const categories = ["All", "Drinks", "Fruits", "Vegetables", "Desserts", "Meats", "BeautyProducts", "Toys", "Biscuits"];
    if(isLoading){
        return <p>Loading</p>
    }
    // Function to filter menu based on category
    const filterMenu = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredMenu(menu);
        } else {
            const filtered = menu.filter(item => item.category === category);
            setFilteredMenu(filtered);
        }
    };

    // useEffect to set "All" button as active initially
    // useEffect(() => {
    //     setActiveCategory("All");
    // }, []);

    
    return (
        <div className='mb-32'>
            <SubHeading title={"Umart Products"} subTitle={"We collect Our  Best Product for You"}></SubHeading>
            <div>
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {/* Button for each category */}
                    {categories.map(category => (
                        <button 
                            key={category} 
                            onClick={() => filterMenu(category)}
                            className={`text-base ${activeCategory === category ? 'text-orange-400  font-serif border border-orange-300 px-5 py-2 rounded-full' : 'text-gray-500 border px-5 py-2 rounded-full'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="md:grid md:grid-cols-5 mx-auto justify-center  gap-1 px-2">
                    {/* Rendering filtered menu */}
                    {filteredMenu?.map(item => (
                        <MenuCart
                            key={item?._id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;