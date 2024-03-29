import './topHeader.css'
import { Link } from 'react-router-dom'

 const TopHeader = () => {

    const dropdown = [
        {
            id: 1,
            name: 'AGRICULTURE',
    
            class : 'ri-tree-fill'
        },
        {
            id: 2,
            name: 'Clothing',
        
            class : 'ri-t-shirt-fill'
        },
        {
            id: 3,
            name: 'Building Construction',
        
            class : 'ri-building-4-fill'
        },
        {
            id: 4,
            name: 'ELECTRONIC & ELECTRICAL',
        
            class :'ri-lightbulb-fill',
        },
        {
            id: 5,
            name: 'FOOD & BEVERAGES',
        
            class : 'ri-restaurant-2-line'
        },
        {
            id: 6,
            name: 'HOME FURNISHING & SUPPLIES',
        
            class : 'ri-home-3-fill'
        },
        {
            id: 7,
            name: 'Chemical Supplies',
        
            class : 'ri-building-3-fill'
        },
        {
            id: 8,
            name: 'SPORTS',
        
            class : 'ri-basketball-line'
        },
        {
            id: 9,
            name: 'ALL PRODUCTS',
        
            class : 'ri-gallery-view'
        }
    ];

    return (
        <div>
            <div className=" top-header-section">
                {dropdown && dropdown.map((item,index)=>(
                    <ul key={index}>
                        <Link to={`/Categorey-page/${item.name}`}><i className={item.class}></i>{item.name}</Link>
                    </ul>
                ))
                }
            </div>
        </div>
    )
} 

 

export default TopHeader