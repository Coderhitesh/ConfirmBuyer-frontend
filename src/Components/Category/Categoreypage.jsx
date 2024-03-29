import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './Categorey.css'
const Categoreypage = () => {
  const { name } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://confirmbuyers.onrender.com/api/getCategory"
        );
        const filteredCategories = response.data.Categoryes.filter((item) =>
          item.Category.toLowerCase().includes(name.toLowerCase())
        );
        console.log(filteredCategories);
        setCategories(filteredCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [name]);
  // window.location.href = `/searchproduct/${searchInput}`
  return (
    <div className="container min-h-screen mx-auto mt-8">
      <h1 className=" sm:text-5xl  text-3xl text-center uppercase font-bold mb-4">{name} Categories</h1>

      <div className="">
        {categories &&
          categories.map((category) => (
            <div className="gridss gap-5 min-h-[400px]" key={category?._id}>
              {category?.subCategory &&
                category.subCategory.map((subItem) => (
                  <div
                    key={subItem._id}
                    className="bg-white p-4 rounded-md shadow-md "
                  >
                <div className="w-full relative h-[300px] overflow-hidden">
                <img
                    loading="lazy"
                      src={subItem?.img}
                      alt={subItem?.text}
                      className="imgsideee w-full h-full object-cover mb-4"
                    />
                    <div className="absolute-text">
                    <p className="font-semibold text-lg mb-2">{subItem?.text}</p>
                    </div>
                </div>
                    
                        <div>
                      {subItem.keywords &&
                        subItem.keywords.map((item, index) => (
                          <Link
                          to={`/BuyerSeacrhproduct/${item}`}
                            key={index}
                            className="inline-block bg-gray-200 hover:bg-gray-400 text-xs py-2 cursor-pointer px-8 m-1 leading-none rounded-full text-gray-700"
                          >
                            {item}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categoreypage;
