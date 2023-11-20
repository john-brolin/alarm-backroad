import { pageLinks, socialLinks } from './data'


const Footer = () => {
    const getDate = new Date().getFullYear()
    console.log(getDate)
  return (
    <footer className="footer-section">
        <ul className='footer-links'>
        {pageLinks.map((link)=>{
                const {id,href,text} = link
                return (
                <li key={id}>
                <a href={href} className="footer-link">
                    {text}
                </a>
            </li>
                );
            })}

        </ul>

        <ul className='footer-icon'>
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
        </ul>        

        <p className='footer-text'>Copyright © Backroads Travel Company <span id='date'>{getDate}</span> All Rights Reserved</p>

    </footer>
    )
}
export default Footer