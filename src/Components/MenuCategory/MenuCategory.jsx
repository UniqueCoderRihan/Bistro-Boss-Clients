import Cover from "../../Pages/Shared/Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({item,img,title}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mb-3">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;