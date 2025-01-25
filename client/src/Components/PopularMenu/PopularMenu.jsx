import { useEffect, useState } from "react";
import MenuItems from "../MenuItems/MenuItems";


const PopularMenu = () => {

    const [menu,setMenu] = useState([])
    useEffect(()=> {
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div>
            <section className="mt-4">
                <h1 className="text-center md:text-4xl text-2xl font-[arial] font-semibold">Popular menu</h1>
            </section>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2">
                {
                    menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;