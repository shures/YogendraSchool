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
                                        <div id='about'>
                                            <div id='title'>
                                                विद्यालयका शिक्षक शिक्षिकाहरु
                                            </div>
                                            <div id='text'>
                                                हिमालपारिको जिल्ला मुस्ताङको सदरमुकाम जोमसोममा अवस्थित श्री जनहित माध्यमिक विद्यालय जिल्ला कै नमूना माध्यमिक विद्यालय हो हिमालपारिको जिल्ला मुस्ताङको सदरमुकाम जोमसोममा अवस्थित श्री जनहित माध्यमिक विद्यालय जिल्ला
                                            </div>
                                            <button>हाम्रो बारेमा</button>
                                        </div>
                                        <div id='caption'>
                                            <div id='title'>{slideImage.caption}</div>
                                            <div id='about'>{slideImage.about}</div>
                                        </div>
                                        <div id='shadow'></div>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                    {/*<div id='article'>*/}
                    {/*    <div id='vision'>*/}
                    {/*        <div id="title">*/}
                    {/*            <span>THE</span>*/}
                    {/*            <span>VISION OF SCHOOL</span>*/}
                    {/*            <span>Putting Your Child's Future in Great Motion</span>*/}
                    {/*            <span id='line'></span>*/}
                    {/*        </div>*/}
                    {/*        <div id='container'>*/}
                    {/*            <div id='about'>*/}
                    {/*                To establish a model community school by providing quality and timely information technology education to the children of this area. Aim to provide technical education from upper 9 to class 12 in the coming days.*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div id='futureStrategy'>*/}
                    {/*        <div id="title">*/}
                    {/*            <span id='line'></span>*/}
                    {/*              <span>Future Strategy</span>*/}
                    {/*            <span id='line'></span>*/}
                    {/*        </div>*/}
                    {/*        <div id='container'>*/}
                    {/*            <div id='about'>*/}
                    {/*                In the school, well-equipped classrooms, libraries, science labs, computer labs, math labs, primary care, sports and music classes, skill training rooms, educational material rooms etc.*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div id='welcome'>
                    <div id='container'>
                        <span>Welcome To</span>
                        <span>Shree Yogendra Higher School</span>
                        <span></span>
                        <span>हिमालपारिको जिल्ला मुस्ताङको सदरमुकाम जोमसोममा अवस्थित श्री जनहित माध्यमिक विद्यालय जिल्ला कै नमूना माध्यमिक विद्यालय हो। नमूना विद्यालयको सूचीमा सूचीकृत यस विद्यालयबाट उत्पादित जनशक्ति आज देश तथा विदेशमा उच्‍च पदमा आसिन भै राष्ट्रको विकासमा लागि परिरहेका छन् । सैदान्तिक भन्दा प्रयोगात्मक शिक्षामा जोड दिने विद्यालयको लक्ष्य एवम् उद्देश्य भएकोले आज विभिन्‍न जिल्लाका विद्यार्थीहरुको शैक्षिक आकर्षणको गन्तब्य बनेको छ हाम्रो विद्यालय।प्रयोगात्मक</span>
                        <div id="provide">
                            <div className='item'>
                                <img src={require('./../icons/white/children-kids.svg').default}/>
                                <b>५०० + विद्यार्थीहरु</b>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/white/computer-internet-woman.svg').default}/>
                                <b>कम्प्युटर विज्ञान</b>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/white/science-atom.svg').default}/>
                                <b>व्यवस्थित प्रयोगशाला</b>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/white/online-training.svg').default}/>
                                <b>More IT Friendly</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='wordsFromAdakxya'>
                    <div id='container'>
                        <div id='left'>
                            <div id='words'>
                                <div id='title'>
                                    <span>अध्यक्षज्यूको भनाइ</span>
                                </div>
                                <div id='content'>
                                    मुस्ताङ जिल्लाको ‌ऐतिहासिक गाँउ टुकुचेमा अवस्थित यस श्री योगेन्द्र माध्यमिक विद्यालय यस क्षत्त्रको पुरानो र नमूना विद्यालय हो।यस विद्यालय नेपाल सरकार शिक्षा विज्ञान तथा प्रविधि मन्त्रालयवाट नमुना विद्यालय विकासको लागि छनोट भइ नमुना विकास कार्यक्रम संचालन भईरहेकोछ।यस विद्यालयले गुणस्तरीय र व्यवहारिक एंव समयानुकुल शिक्षामा जोड दिदैं आएकोछ।आगामी दिनमा कक्षा ९ देखि कक्षा १२ सम्म प्राविधिक विषय संचालन गर्ने लक्ष्य लिएकोछ।यस विद्यालयलाई उत्कृष्ठ सामुदायिक विद्यालयको रुपमा विकास गर्ने कटिवद्धताका साथ विद्यालय व्यवस्थापन समिति लागिरहेकोछ ।<br/><br/>धन्यवाद ।
                                </div>
                            </div>
                        </div>
                        <div id='right'>
                            <img src={require('./../images/school/prayar_time.JPG')}/>
                            <div id='shadow'></div>
                            <div id='profile'>
                                <img src={require('./../images/दिपसागर थकाली अध्यक्ष.JPG')}/>
                                <div id='detail'>
                                    <span>श्री दिप सागर थकाली</span>
                                    <span>अध्यक्ष</span>
                                    <span>योगेन्द्र माध्यमिक विद्यालय, थासाङ गाउँपलिका</span>
                                    <button>थप जानकारी</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='message'>
                    <div id='container'>
                        <div id='profile'>
                            <div id='image'>
                                <img src={require('./../images/teachers/गोविन्द श्रेष्ठ, प्रधानाध्यापक.jpg')}/>
                            </div>
                            <div id='title'>प्रधानाध्यापकको भनाई </div>
                            <div id='name'>गोविन्द श्रेषठ</div>
                            <div id='post'>प्रधानाध्यापक</div>
                            <div id='schoolName'>श्री योगेन्द्र माध्यमिक विद्यालय</div>
                            <div id='address'>थासाङ गाउँपालिका, वडा नं. १, टुकुचे, मुस्ताङ</div>
                        </div>
                        <div id='words'>
                            <div id='title'>
                                <span>गुणस्तरीय शिक्षा हाम्रो प्रतिवद्धता</span>
                                <span id='line'></span>
                            </div>
                            <div id="about">
                                गुणस्तरीय शिक्षा हाम्रो प्रतिवद्धता भन्ने मुल नारालाई अत्मसात गर्दै विद्यार्थीको सुन्दर भविष्य निमार्णका लागि कटिवद्ध यस विद्यालय जिल्लाकै सवैभन्दा पुरानो र उत्कृष्ठ विद्यालय हो ।विसं २००७ साल भाद्र २४ गते जनता विद्यालयको नामवाट स्थापना भै टुकुचे निम्नमाध्यमिक विद्यालय हुदैं योगेन्द्र माध्यमिक विद्यालयका रुपमा संचालन भइरहेकोछ ।हाल प्रारम्भिक वालकक्षा प्लेग्रुप नर्सरी केजी देखि कक्षा १२ सम्म अध्यापन हुँदैं अएकोछ ।कक्षा ११ र १२ मा व्यवस्थापन र शिक्षा विषयहरुको अध्यापन गराइन्छ ।यस विद्यालय नेपाल सरकार शिक्षा विज्ञान तथा प्रविधि मन्त्रालयवाट अ व  २०७६।७७ सालमा नमुना विद्यालय विकासका लागि छनोट भइ नमुना विकास कार्यक्रम संचालन भइ रहेकोछ ।यस विद्यालयमा अध्ययनरत विद्यार्थीहरुलाई हिमाली आवासीय छात्रवृत्ति र अन्य शिक्षाप्रेमी व्यक्तिहरुवाट स्थापित छात्रवृत्ति सुविधा प्रदान गरिदैं आएकोछ ।यस विद्यालयवाट हरेक वर्षको वार्षिक परीक्षामा उत्कृष्ठ नतिजा प्राप्त गर्ने विद्यार्थीहरुलाई पुरस्कार र उच्च शिक्षाका लागि छात्रवृत्ति समेत प्रदान गर्दै आएकोछ ।
                                यस विद्यालयलाई भविष्यमा देशकै उत्कृष्ठ नमूना विद्यालयको रुपमा स्थापित गर्ने उद्धेश्यका साथ  विद्यालय परिवार अगाडि वढिरहेकोछ।   धन्यवाद ।
                            </div>
                            <button>विद्यालयको बारेमा</button>
                        </div>
                    </div>
                </div>
                <div id='event'>
                    <div id='container'>
                        <div id='title'>
                            <span>EVENTS AND MOMENTS </span>
                        </div>
                        <div id='content'>
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
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Home;