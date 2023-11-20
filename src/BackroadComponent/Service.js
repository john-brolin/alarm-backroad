// import save from '../Backroad images/save.svg'
import Title from './Title'
import {savingService} from './data'

const Service = () => {
  return (
        <section className='service-section'>
            <Title Title='OUR' Subtitle='SERVICES'/>
        <div className='service-main-cont'>
            {savingService.map((link)=>{
                const {id,img,title,text} = link
             return <div className='item' key={id}>
                        <div className='save-cont'>
                            <img className="save" src={img}/>
                        </div>
                        <div className='save-info'>
                            <h4>{title}</h4>
                            <p>
                            {text}
                            </p>
                        </div>
                    </div>
                
            })}


            {/* <div className='item'>
                <div className='save-cont'>
                    <img className="save" src={save}/>
                </div>
                <div className='save-info'>
                    <h4>Saving Money</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                </div>
            </div>

            <div className='item'>
                <div className='save-cont'>
                    <img className="save" src={save}/>
                </div>
                <div className='save-info'>
                    <h4>Saving Money</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                </div>
            </div>

            <div className='item'>
                <div className='save-cont'>
                    <img className="save" src={save}/>
                </div>
                <div className='save-info'>
                    <h4>Saving Money</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                </div>
            </div>
         */}
        </div>
        
        </section>
    )
}
export default Service