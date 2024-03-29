import CompanySlider from "../CompanySlider/CompanySlider"
import Products from "../Feature Products/Products"
import FourCards from "../Fourcards/Fourcards"
import Mainhero from "../Hero/Mainhero"
import LeadsMoving from "../LeadsMoveing/LeadsMoving"
import TrendingCards from "../Trending/TrendingCards"
import Post from '../PostByRequirments/Post'
import CitySlider from "../CitySlider/CitySlider"
import Counterywedeal from "../CitySlider/Counterywedeal"
import Aggricultural from "../Aggriculutral/Aggricultural"
import Realstate from "../RealState/Realstate"
// import AnimalProduct from "../Animal/AnimalProduct"
import Animal from "../Animal/Animal"
import LifeStyle from "../LifeSTyle/LifeStyle"
import Fortune from "../Fortune/Fortune"
import Testimonial from "../Testinomial/Testinomaial"
import Faq from "../Footer/Faq"
import { useEffect } from "react"
// import Chatbot from "../Chat-bots/Chatbot"
    
    const Home = () => {
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, []);

      return (
        <div>
         
            <Mainhero/>
            <TrendingCards/>
            <LeadsMoving/>
            <CompanySlider/>
            <Products/>
            <Post/>
            <FourCards/>
            <Counterywedeal/>
            <Aggricultural/>
            <Realstate/>
            <Animal/>

            <LifeStyle/>
            <CitySlider/>
            <Testimonial/>

            <Fortune/>
            <Faq/>
            {/* <Chatbot/> */}
        </div>
      )
    }
    
    export default Home