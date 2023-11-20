import {featuredTour} from './data'
import Title from './Title'

const Tours = () => {
  return (
        <section className="tour-section">
          <Title Title='FEATURED' Subtitle='TOURS'/>
          <div className="tour-main-cont">
          {featuredTour.map((link)=>{
            const {id,img,date,title,text,country,number,days,duration,amount} = link

             return   <div className="tour-item" key={id}>
                  <div className="box">
                    <img className='beach-pic1' src={img}/>
                    <p>{date}</p>
                  </div>
                  <div className="tour-info">
                    <h5>{title}</h5>
                    <p>{text}</p>
                    <div className="tour-icons">
                        <p className="country"><span></span>{country}</p>
                        <p className="days"><span>{number}</span>{days}</p>
                        <p className="amount"><span>{duration}</span>{amount}</p>
                    </div>
                  </div>
              </div>





          })}

          {/* <div className="tour-item">
            <div className="box">
              <img className='beach-pic1' src={beach}/>
              <p>August 20th, 2020</p>
            </div>
            <div className="tour-info">
              <h5>Tibet Adventure</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="tour-icons">
                  <p className="country"><span></span>china</p>
                  <p className="days"><span>8</span>Days</p>
                  <p className="amount"><span>From</span> $2100</p>
              </div>
            </div>
          </div>

          <div className="tour-item">
            <div className="box">
              <p>August 20th, 2020</p>
            </div>
            <div className="tour-info">
              <h5>Tibet Adventure</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="tour-icons">
                  <p className="country"><span></span>china</p>
                  <p className="days"><span>8</span>Days</p>
                  <p className="amount"><span>From</span> $2100</p>
              </div>
            </div>
          </div>

          <div className="tour-item">
            <div className="box">
              <p>August 20th, 2020</p>
            </div>
            <div className="tour-info">
              <h5>Tibet Adventure</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="tour-icons">
                  <p className="country"><span></span>china</p>
                  <p className="days"><span>8</span>Days</p>
                  <p className="amount"><span>From</span> $2100</p>
              </div>
            </div>
          </div>

          <div className="tour-item">
            <div className="box">
              <p>August 20th, 2020</p>
            </div>
            <div className="tour-info">
              <h5>Tibet Adventure</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="tour-icons">
                  <p className="country"><span></span>china</p>
                  <p className="days"><span>8</span>Days</p>
                  <p className="amount"><span>From</span> $2100</p>
              </div>
            </div>
          </div> */}
  
          </div>   
        </section>
    )
}
export default Tours