
import './contact.css'
import bg from '../contact/contact-bg.webp'
import CallBack from '../callBackForm/CallBack'

const Contact = () => {
  return (
    <>
      <section className='contact-section'>
        <div className="contact-bg">
            <img src={bg} alt="" />
            <div className='contact-heading'>
                <span>Contact Us</span>
            </div>
        </div>

        <div className="container">
          
            <CallBack />
        </div>
      </section>
    </>
  )
}

export default Contact
