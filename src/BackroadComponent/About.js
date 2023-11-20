import beach from '../Backroad images/beach.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className='about-section'>
      <div className='main-cont-about'>
        {/* <div className='about-title'>
          <h2>
            ABOUT <span>US</span>
          </h2>
        </div> */}
          <Title Title='ABOUT' Subtitle='US'/>
        <div className='sub-cont-about'>
          <div className="beach-cont">
              <img className='beach-pic' src={beach}/>
             </div>
          <div className='about-info'>
            <h4>Explore The Difference</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam nostrum provident beatae mollitia facere? Soluta quaerat assumenda esse vero!
          </p> 
          <div className='readmore-btn-cont'>
            <button className='readmore-btn'>READ MORE</button>
          </div>
        </div>
        </div>
      </div>

    </section>
  )
}
export default About