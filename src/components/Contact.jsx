import img from '/src/assets/organic-products-hero-2.png'
import leaf from '/src/assets/logo-leaf-new2.png'
const Contact = () => {
  return (
    <div className="contact-section my-5">
      <div className="row align-items-center grid-container">
          <div className="col-md-6">
              <img src={img} className="img-fluid"/>
          </div>
          <div className="col-md-6 form-container">
              <form className='d-flex flex-column gap-3'>
                <div className='head d-flex align-items-center gap-2'>
                  <h1>Get In Touch</h1>
                  <img src={leaf} className="img-fluid"/>
                </div>
                <input type='text' className='p-2' placeholder='Name'/>
                <input type='text' className='p-2' placeholder='Email'/>
                <textarea type='text' className='p-2' placeholder='Message'></textarea>
                <button className='submit-btn py-2'>Submit</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Contact