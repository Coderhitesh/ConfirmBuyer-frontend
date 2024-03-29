import { Link } from "react-router-dom";
const HeaderMy = () => {
  // console.log
  const companyDetailsString = sessionStorage.getItem("Company-details");
  const companyDetails = JSON.parse(companyDetailsString) || {};
const companyCity = companyDetails.companyDetails?.companyCity || '';
console.log("companyCity",companyCity)

  // console.log(companyDetails.companyDetails.companyCity);
  return (
    <div className=" min-h-screen border-2 w-1/5 border-black  ">
      <div className="text-box p-5 ">
        <h1 className="text-left  font-semibold text-3xl">
          My Account
          <hr className="w-1/5 my-2  border-t-4 border-green-500" />
        </h1>
      </div>
      <div className=" w-full vertical-nav  p-5  bg-violet-400 ">
        <ul className="space-y-4">
          <li className="leading-9">
            <Link className="text-3xl font-bold flex items-center justify-center text-gray-900 hover:text-white">
              <img
                className="w-1/5 h-1/5 "
                src={companyCity}
                alt={companyCity}
              />
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/MyAccount"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="key"></ion-icon>
              <span>My Account</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/my-information"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="people"></ion-icon>
              <span>My Information</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/my-product"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="pricetags"></ion-icon>
              <span>My Product</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/my-post"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="arrow-up"></ion-icon>
              <span>My Post</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/my-package"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="briefcase"></ion-icon>
              <span>My Package</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/add-product"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="add"></ion-icon>
              <span>Add Product</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/post-requirement"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="git-pull-request"></ion-icon>
              <span>Post Requirement</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/post-requirement"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="link"></ion-icon>
              <span>Refferal</span>
            </Link>
          </li>
          <li className="leading-9">
            <Link
              to="/admin/logo-out"
              className="flex items-center space-x-2 text-gray-900 hover:text-white"
            >
              <ion-icon name="log-out"></ion-icon>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMy;
