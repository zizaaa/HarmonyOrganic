import leaf from '/src/assets/logo-leaf-new2.png'
import grapes from '/src/assets/grapes-bunch-fruit-person-holding-organic-food.jpg'

const About = () => {
  return (
    <div className="about-us-container">
      <div className="head d-flex flex-column align-items-center">
        <h1 className='mb-3'>About Us</h1>
        <img src={leaf}/>
      </div>
      <div className='row mt-5 main-content-about-us align-items-center'>
          <div className='col-md-6 left-side'>
            <h2>
              Welcome to Harmony Organics,
            </h2>
            <p>
              where our passion lies in providing you with the purest and most wholesome organic products. Founded with a deep commitment to sustainability, health, and environmental consciousness, our journey began with a vision to offer the world products that are not only good for you but also kind to the planet. We meticulously source our ingredients from trusted organic farms, ensuring that every product is free from harmful chemicals and pesticides. From nourishing skincare essentials to nutritious culinary delights, our diverse range embodies the essence of harmony between nature and humanity. Join us in our quest to create a harmonious balance between well-being and the world we inhabit. Together, we can embrace a lifestyle that celebrates nature's bounty in its purest form.
            </p>
          </div>
          <div className='col-md-6 right-side'>
              <img src={grapes} className='img-fluid'/>
          </div>
      </div>
      <div className='row count-container mt-5 bg_lightGreen p-5 align-items-center gap-3 gap-md-0 text-center'>
          <div className='col-md-3 d-flex flex-column justify-content-center align-items-center'>
            <h3>Numbers Speak For Themselves!</h3>
          </div>
          <div className='col-md-3 d-flex flex-column justify-content-center align-items-center'>
              <h3>5,000+</h3>
              <p className='m-0'>Curated Products</p>
          </div>
          <div className='col-md-3 d-flex flex-column justify-content-center align-items-center'>
              <h3>800+</h3>
              <p className='m-0'>Curated Products</p>
          </div>
          <div className='col-md-3 d-flex flex-column justify-content-center align-items-center'>
              <h3>40+</h3>
              <p className='m-0'>Product Categories</p>
          </div>
      </div>
    </div>
  )
}

export default About