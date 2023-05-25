
const MenuItem = ({item}) => {
    const {name,price,image,recipe} = item;
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="text-2xl uppercase">{name}----</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;