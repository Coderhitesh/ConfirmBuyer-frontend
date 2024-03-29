
import './fourcards.css'

const FourCards = () => {
  return (
    <div className=" p-8 mt-5 flex-col md:flex-row justify-center glass items-center md:items-start gap-6 Four-cards-container">
      <div className="flex gap-2 justify-center flex-wrap md:flex-wrap Four-card">
        <div className="cards-four card-width bg-green-200 p-6 rounded-md shadow-md text-center border-b-4 border-indigo-500">
          <span>
            <ion-icon
              name="receipt-outline"
              class="text-4xl text-blue-500"
            ></ion-icon>
            <h3 className="text-2xl font-bold mt-2 text-indigo-900 ">10,000+</h3>
            <h4 className="text-2xl font-bold text-gray-900">Registered SME</h4>
          </span>
        </div>

        <div className="cards-four card-width bg-indigo-200 border-b-4 border-green-500 p-6 rounded-md shadow-md text-center">
          <span>
            <ion-icon
              name="card-outline"
              class="text-4xl text-green-500"
            ></ion-icon>
            <h3 className="text-2xl font-bold mt-2 text-green-500 ">15,000+</h3>
            <h4 className="text-2xl font-bold text-gray-900">Successful Payments</h4>
          </span>
        </div>
        <div className="cards-four card-width border-b-4 border-red-500 bg-pink-200 p-6 rounded-md shadow-md text-center">
          <span>
            <ion-icon
              name="happy-outline"
              class="text-4xl text-red-500"
            ></ion-icon>
            <h3 className="text-2xl font-bold mt-2 text-red-500  ">1,000+</h3>
            <h4 className="text-2xl font-bold text-gray-900">Happy Smiles</h4>
          </span>
        </div>
        <div className="cards-four card-width  border-b-4 border-gray-900  p-6 rounded-md bg-orange-200 shadow-md text-center">
          <span>
            <ion-icon
              name="briefcase-outline"
              class="text-4xl text-indigo-500"
            ></ion-icon>
            <h3 className="text-2xl font-bold mt-2 text-indigo-500 ">1,000+</h3>
            <h4 className="text-2xl  text-gray-900 font-bold ">Happy Clients</h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FourCards;
