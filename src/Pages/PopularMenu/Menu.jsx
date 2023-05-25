import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Components/MenuItem/MenuItem";


const Menu = () => {
    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=> item.category ==='popular');
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={"from Our Menu"}
            subHeading={'Popular Foods'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mb-3">
                {
                    menu.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Menu;