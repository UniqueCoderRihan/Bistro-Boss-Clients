import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Components/MenuItem/MenuItem";
import UseMenu from "../../hooks/UseMenu";


const Menu = () => {
   const [menu] = UseMenu();
   const popularItems = menu.filter(item=> item.category ==='popular');

    return (
        <section>
            <SectionTitle
            heading={"from Our Menu"}
            subHeading={'Popular Foods'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mb-3">
                {
                    popularItems.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Menu;