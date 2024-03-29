import { useState } from 'react'
import './addProduct.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddProduct = () => {

    const Token = sessionStorage.getItem("token");
    const [formData, setFormData] = useState({
        ProductName: '',
        ProductCategory: '',
        ProductImage: '',
        ProductPrice: '',
        BusinessType: '',
        ProductStatus: true,
        Description: '',

    })
    const handChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }



    const datafetch = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://confirmbuyers.onrender.com/api/add-Product', formData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })

            console.log(response)
            toast.success('Product Added Successfully')

        } catch (error) {
            console.log(error)
            toast.error('Internal Error')
        }
    }


    return (
        <div className='user-dashbord add-product-section'>
            <div className="container">
                <div className="heading">
                    <span>Add Product</span>
                </div>
                <form action="">
                    {Object.keys(formData).map((key) => (
                        <div className='input-box'>
                            {/* <label htmlFor={key}>{key}</label> */}
                            <input className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
                                onChange={handChange} name={key} key={key} type="text" placeholder={key} value={formData[key]} />
                        </div>
                    ))}
                    <button className='btn-grad' onClick={datafetch} >submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
