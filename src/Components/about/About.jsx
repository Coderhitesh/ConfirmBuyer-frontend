
import './about.css'
import bg from './about-bg.jpg'

const About = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-bg">
                    <img src={bg} alt="about-bg" />
                </div>
                <div className="container">
                    <div className="heading">
                        <span>About Us</span>
                    </div>
                    <div className="about-main-box">
                        <p>Confirm Buyers Is An ISO 9001:2015 Certified , Indias Emerging And Leading B2B Platform. We Have Created A Seamless And Efficient Online Platform For You. Here You Can Connect, Collaborate And Take Your Business To New Heights Of Success By Connecting With Verified And Trustworthy Buyers And Sellers From Various Industries. Many Businesses Have Made Themselves Successful By Joining Our Organization, Now Its Your Turn.</p>

                        <h2>What We Offer</h2>

                        <p>Discover the excellence of Confirm Buyers, a distinguished B2B platform certified with ISO 9001:2015, heralding its emergence as India's leading online marketplace. We have meticulously crafted a seamless and efficient online platform to empower your business. Unlock unprecedented opportunities to connect, collaborate, and elevate your business to new heights of success by engaging with verified and trustworthy buyers and sellers spanning diverse industries.

                            Join a community of thriving businesses that have achieved success by becoming part of our organization. Now, it's your turn to leverage our platform and propel your business towards unparalleled growth. Experience the power of connectivity and take advantage of the robust foundation we provide for your journey to success.</p>

                            <h2>Our Commitment</h2>

                            <p>At DGMT, our commitment is unwavering — we are dedicated to driving your digital growth. As a forward-thinking marketing technology company, we pledge to be at the forefront of innovation, continuously adapting and evolving to meet the dynamic challenges of the digital landscape.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About