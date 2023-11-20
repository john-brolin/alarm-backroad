import './Backroad.css';
import Navbar from "./BackroadComponent/Navbar"
import Home from './BackroadComponent/Home'
import About from './BackroadComponent/About'
import Service from './BackroadComponent/Service'
import Tours from './BackroadComponent/Tours'
import Footer from './BackroadComponent/Footer'

function BackroadApp() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Tours/>
    <Footer/>
    </>
  )
}
export default BackroadApp

