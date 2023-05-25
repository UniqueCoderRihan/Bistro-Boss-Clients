import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import image1 from '../../assets/home/featured.jpg'
// add Css Link
import './Feature.css'
const Featured = () => {
    return (
        <div className="mb-2 my-20 py-10  feature-item">
            <SectionTitle
            heading={'Our Featured'}
            subHeading={'Check It Out'}
            ></SectionTitle>
            <div className="md:flex justify-cente items-center py-8 px-16">
                <div>
                    <img src={image1} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 15,2090</p>
                    <p className="uppercase text-2xl">Where Can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugiat blanditiis animi nam rerum ex beatae nostrum aliquam? Ea odit nostrum provident ab commodi quo aperiam praesentium! Aperiam reprehenderit porro odit labore fugiat, non laborum totam natus voluptatum, quo inventore, distinctio voluptatem expedita iure iusto. Explicabo nesciunt porro reprehenderit eos!</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;