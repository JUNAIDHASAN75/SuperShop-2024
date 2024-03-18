import useMenu from "../../Hook/useMenu";


const Menu = () => {
    const [menu] = useMenu();
    console.log(menu)
    
    return (
        <div>
            this is menu
        </div>
    );
};

export default Menu;