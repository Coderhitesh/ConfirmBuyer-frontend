import axios from "axios";
import { useEffect, useState } from "react";
import "./userdashboard.css";
const MyPost = () => {
  const Token = sessionStorage.getItem("token");
  console.log(Token);
  const [Fetchdata, setFetchdata] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/userPostRequirementAll",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log(response.data.AllPostRequirement);
      setFetchdata(response.data.AllPostRequirement);
    } catch (error) {
      console.error(error);
    }
  };
  const DeletehData = async (id) => {
    try {
      const response = await axios.delete(
        `https://confirmbuyers.onrender.com/user/userPostRequirementDelete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log(response.data);
      //   setFetchdata(response.data.AllPostRequirement)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    let isMounted = true;

    const fetchDataAsync = async () => {
      if (isMounted) {
        await fetchData();
      }
    };

    fetchDataAsync();

    return () => {
      isMounted = false;
    };
  }, [Token]);

  //   /userPostRequirementDelete/:postId
  return (
    <div className="user-dashbord">
      <div className="text-box p-5 ">
        <h1 className="text-left  font-semibold text-3xl">
          My Post
          <hr className="w-1/5 my-2  border-t-4 border-green-500" />
        </h1>
      </div>
      <div className=" p-2 grids gap-2">
        {Fetchdata &&
          Fetchdata.map((item, index) => (
            <div key={index} className="border p-4 my-4">
              <h3 className="text-xl font-semibold">
                {item.ProductName}
              </h3>
              {/* <p>Multiple States: {item.Qunatity}</p> */}
              <p>Category: {item.Category}</p>
              <p>Quantity: {item.Qunatity}</p>
              <p>TypeOfPacking: {item.TypeOfPacking}</p>
              <p>Message: {item.Message}</p>


              <div className="flex mt-4 space-x-4">
                <button
                  onClick={() => DeletehData(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyPost;
