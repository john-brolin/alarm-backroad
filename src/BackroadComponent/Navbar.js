import { pageLinks, socialLinks } from './data'

const Navbar = () => {
  return (
    <nav className="nav-bar">
        <h2>Back<span>Roads</span></h2>
        <ul>
            {pageLinks.map((link)=>{
                const {id,href,text} = link
                return (
                <li key={id}>
                <a href={href} className="nav-link">
                    {text}
                </a>
            </li>
                );
            })}
            {/* <li>
                <a href="#home" className="nav-link">
                    home{''}
                </a>
            </li>
            <li>
                <a href="#about" className="nav-link">
                    about{''}
                </a>
            </li>
            <li>
                <a href="#services" className="nav-link">
                    Services{''}
                </a>
            </li>
            <li>
                <a href="#tour" className="nav-link">
                    tour{''}
                </a>
        </li> */}
        </ul>
        <div className="nav-img">
            <ul>
                {socialLinks.map((link)=>{
                    
                    const {id,href,icon} = link
                    return (
                    <li key={id}>
                        <a
                        href={href}
                        target='_blank'
                        className='nav-icon'
                        >
                        <img className='img-logo' src={icon} />
                        </a>
                    </li>
                    )
                    
                })}

                {/* <li>
                    <a
                    href='www.facebook.com'
                    target='_blank'
                    className='nav-icon'
                    >
                    <img className='img-logo' src={fblogo} alt=""/>
                    </a>
                </li>
                <li>
                    <a
                    href='www.twitter.com'
                    target='_blank'
                    className='nav-icon'
                    >
                    <img className='img-logo' src={twlogo} alt=""/> 
                    </a>
                </li>
                <li>
                    <a 
                    href='www.linkdin.com'
                    target='_blank'
                    className='nav-icon'
                    >
                    <img className='img-logo' src={ldlogo} alt=""/>
                    </a>
                </li> */}
            </ul>
        </div>
    </nav>
  )
}
export default Navbar

//  spilttig codes into component files
// Navbar 
// hero
// about
// service 
// Tours 
// footer 
