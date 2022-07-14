import '../css/contact.css';
import {Fragment} from "react";
import Header from './header'
import Footer from './footer'
function Contact() {
    return (
        <Fragment>
            <Header/>
            <div id='contact'>
                <div id='container'>
                    <div id='title'>
                        <span>Get In Touch</span>
                        <span id='line'></span>
                        <span id='schoolName'>Yogendra Higher Secondary School, Thasang Rural Municiaplity, Tukuche Mustang</span>
                    </div>
                    <div id='map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.301996921138!2d83.64210251419065!3d28.71051948238716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39be06281fc9c7b5%3A0x744862805a3249a0!2sShree%20Yogendra%20Higher%20Secondary%20School!5e0!3m2!1sne!2snp!4v1657792024384!5m2!1sne!2snp"
                            width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div id='detail'>
                        <div id='left'>
                            <div className="item">
                                <img id="icon" src={require('./../icons/address-location.svg').default}/>
                                <span>श्री योगेन्द्र माध्यमिक विद्यालय, थासाङ-१ टुकुचे, मुस्ताङ, गण्डकी प्रदेश</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/envelope.svg').default}/>
                                <span>shures.nepali@gmail.com</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/phone-call.svg').default}/>
                                <span>+९७७९८४७७४२६६५</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/phone-call.svg').default}/>
                                <span>www.yogendramabi.com.np</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/timetable.svg').default}/>
                                <span>आईतबार-शनिबार, १०:००-४:०० </span>
                            </div>
                        </div>
                        <div id='right'>
                            <div className='item'>
                                <div id='image'>
                                    <img src={require('./../images/kids-gb8fad821a_1920.jpg')}/>
                                </div>
                                <div id="title">
                                    <span>प्रधानाध्यापक</span>
                                    <span id='line'></span>
                                </div>
                                <span id='name'>गोबिन्द सर</span>
                                <span id='contact'>मोबाईल नं. : ९८४७७४२६६५</span>
                            </div>
                            <div className='item'>
                                <div id='image'>
                                    <img src={require('./../images/kids-gb8fad821a_1920.jpg')}/>
                                </div>
                                <div id="title">
                                    <span>प्रधानाध्यापक</span>
                                    <span id='line'></span>
                                </div>
                                <span id='name'>गोबिन्द सर</span>
                                <span id='contact'>मोबाईल नं. : ९८४७७४२६६५</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Contact;