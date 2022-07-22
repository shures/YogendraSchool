import '../css/home.css';
import s1 from '../images/school/old_school.jpg';
import s2 from '../images/school/new_school.jpg';
import s3 from '../images/school/bal_class.JPG';
import s4 from '../images/school/prayar_time.JPG';
import s5 from '../images/school/IMG_0637.JPG';
import s6 from '../images/school/Three.JPG';
import {Fragment} from "react";
import Header from './header'
import Footer from './footer'


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    {
        url: s1,
        caption: 'साँस्कृतिक कार्यक्रम ',
        about:'२०७९ योगेन्द्र मा.वि. २०७९ योगेन्द्र मा.वि.'
    },
    {
        url: s2,
        caption: 'निलगिरी हिमाल',
        about:'साँस्कृतिक कार्यक्रम २०७९ योगेन्द्र मा.वि.को कारण'
    },
    {
        url: s3,
        caption: 'टुकुचे गाउँ',
        about:'साँस्कृतिक कार्यक्रम २०७९ योगेन्द्र मा.वि.को कारण'
    },
    {
        url: s4,
        caption: 'साँस्कृतिक कार्यक्रम ',
        about:'२०७९ योगेन्द्र मा.वि. २०७९ योगेन्द्र मा.वि.'
    },
    {
        url: s5,
        caption: 'निलगिरी हिमाल',
        about:'साँस्कृतिक कार्यक्रम २०७९ योगेन्द्र मा.वि.को कारण'
    },
    {
        url: s6,
        caption: 'टुकुचे गाउँ',
        about:'साँस्कृतिक कार्यक्रम २०७९ योगेन्द्र मा.वि.को कारण'
    },
];

function Home() {
    return (
        <Fragment>
            <Header/>
            <div id="home">
                <div id='slide'>
                    <div className="slide-container">
                        <Slide>
                            {slideImages.map((slideImage, index)=> (
                                <div className="each-slide" key={index}>
                                    <div id='image' style={{'backgroundImage': `url(${slideImage.url})`}}>
                                        <div id='caption'>
                                            <div id='title'>{slideImage.caption}</div>
                                            <div id='about'>{slideImage.about}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                    <div id='article'>
                        <div id='vision'>
                            <div id="title">
                                <span>THE</span>
                                <span>VISION OF SCHOOL</span>
                                <span>Putting Your Child's Future in Great Motion</span>
                                <span id='line'></span>
                            </div>
                            <div id='container'>
                                <div id='about'>
                                    To establish a model community school by providing quality and timely information technology education to the children of this area. Aim to provide technical education from upper 9 to class 12 in the coming days.
                                </div>
                            </div>
                        </div>
                        <div id='futureStrategy'>
                            <div id="title">
                                <span id='line'></span>
                                  <span>Future Strategy</span>
                                <span id='line'></span>
                            </div>
                            <div id='container'>
                                <div id='about'>
                                    In the school, well-equipped classrooms, libraries, science labs, computer labs, math labs, primary care, sports and music classes, skill training rooms, educational material rooms etc.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='message'>
                    <div id='container'>
                        <div id='profile'>
                            <div id='image'>
                                <div id='circle'>
                                    <img src={require('./../images/kids-gb8fad821a_1920.jpg')}/>
                                </div>
                            </div>
                            <div id='title'>Message From Principle</div>
                            <div id='name'>Govinda Sir</div>
                            <div id='post'>Principle</div>
                            <div id='schoolName'>Yogendra Higher Secondary School</div>
                            <div id='address'>Thasang Rural Municipality, Ward No. 1, Tukuche Mustang</div>
                        </div>
                        <div id='words'>
                            <div id='title'>
                                <span>दुई शब्द</span>
                                <span id='line'></span>
                            </div>
                            <div id="about">
                                लागि कर्म लाक्पा लामा ज्यूलाई यो अख्तियारानामा दिएको जानकारी गर्दछु । निजको हस्ताक्षर नमुना यस प्रकार छ । गरि पहिलो रनिङ विल भुक्तानी गरिदिनुहुन यो निवेदन पेश गरेको छु साथै मेरो कार्य व्यस्तताको कारण त्यस कार्यालयमा स्वयम आफै उपस्थित हुन नसकेकोले उक्त विलमा सहिछाप गरि चेक समेत बुझ्नको लागि कर्म लाक्पा लामा ज्यूलाई यो अख्तियारानामा दिएको जानकारी गर्दछु । निजको हस्ताक्षर नमुना यस प्रकार छ ।
                            </div>
                            <button>विद्यालयको बारेमा</button>
                        </div>
                    </div>
                </div>
                <div id="provide">
                    <div className='item'>
                        <img src={require('./../images/online-training.svg').default}/>
                        <b>More IT Friendly</b>
                        <span>The first and leading software engineering college in Nepal</span>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/hands-up.svg').default}/>
                        <b>Higher Secondary School</b>
                        <span>Higher chances of placement in big companies and prestigious institutions</span>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/science-atom.svg').default}/>
                        <b>Managed Laboratory Test</b>
                        <span>Research-based practical education is our priority</span>
                    </div>
                </div>
                <div id='sectionTitle'>EVENTS AND MOMENTS </div>
                <div id='event'>
                    <div id='container'>
                        <div className="item item1">
                            <img src={require('./../images/1.jpeg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>a
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको स कार्यालयसँग योजना सम्झौता भइसकेकोले तपशिल
                            </div>
                        </div>
                        <div className="item item2">
                            <img src={require('./../images/2.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको ध्यक्षको नाम  गठन भई त्यस कार
                            </div>
                        </div>
                        <div className="item item3">
                            <img src={require('./../images/woman.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व.
                            </div>
                        </div>
                        <div className="item item4">
                            <img src={require('./../images/3.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व ासाङ स्थित प्रभु बैङ्कमा सिफारिश गरिदिनुहुन अनुरोध छ ।
                            </div>
                        </div>
                        <div className="item item5">
                            <img src={require('./../images/3.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व ासाङ स्थित प्रभु बैङ्कमा सिफारिश गरिदिनुहुन अनुरोध छ ।
                            </div>
                        </div>
                        <div className="item item 6">
                            <img src={require('./../images/3.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व ासाङ स्थित प्रभु बैङ्कमा सिफारिश गरिदिनुहुन अनुरोध छ ।
                            </div>
                        </div>
                        <div className="item item7">
                            <img src={require('./../images/3.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व ासाङ स्थित प्रभु बैङ्कमा सिफारिश गरिदिनुहुन अनुरोध छ ।
                            </div>
                        </div>
                        <div className="item item8">
                            <img src={require('./../images/3.jpg')}/>
                            <div id="date">
                                <img src={require('./../icons/timetable.svg').default}/>
                                <span>२०७९/१२/३४</span>
                            </div>
                            <div id='title'>
                                सास्कृतिक कार्यक्रम २०७९
                            </div>
                            <div id='line'></div>
                            <div id='foo'>
                                प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व ासाङ स्थित प्रभु बैङ्कमा सिफारिश गरिदिनुहुन अनुरोध छ ।
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Home;