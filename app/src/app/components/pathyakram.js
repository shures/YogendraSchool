import '../css/pathyakram.css';
import {Fragment} from "react";
import Header from './header'
import Footer from './footer'
function Pathyakram() {
    return (
        <Fragment>
            <Header/>
            <div id='pathyakram'>
                <div id='container'>
                    <div className='item'>
                        <div id='image'>
                            <img src={require('./../images/school/new_school.jpg')}/>
                            <div id='title'>विद्यालको पुरानो भवन</div>
                        </div>
                        <div id='title'>
                            विद्यालयको भवन
                        </div>
                        <div id='about'>
                            शैक्षिक भवन संख्या तर्फ २ वटा, छात्रावास भवन तर्फ ३ वटा, सभा हल १ वटा र पुरानो भवन १ वटा रहेका छन् ।
                        </div>
                    </div>
                    <div className='item'>
                        <div id='title'>
                            पाठ्यक्रम
                        </div>
                        <div id='about'>
                            प्रारम्भिक वालकक्षा - प्लेग्रुप  नर्सरी केजी मा अंग्रेजी माध्यमवाट पढाई हुन्छ ।
                            कक्षा १ देखि कक्षा १२ सम्म गणित विज्ञान र कम्प्युटर विज्ञान विषयको अंग्रेजी माध्यमवाट अध्यापन गराईन्छ ।
                            कक्षा ११ र १२ मा व्यवस्थापन विषय लेखा अर्थशास्त्र व्यावसायिक अध्ययन कम्प्युटर विज्ञान र
                            शिक्षा विषय अन्तर्गत अग्रेजी गणित नेपाली  मुख्य विषयको अध्यापन गराइन्छ ।
                        </div>
                        <div id='title'>
                            विद्यालय समिति
                        </div>
                        <div id='about'>
                            विद्यालय व्यवस्थापन समिति दिपसागर थकालीको अध्यक्षतामा ९ सदस्य
                            शिक्षक अभिभावक संघ  निशा केसी लालचनको अध्यक्षतामा ११ सदस्य
                            छात्रावास समिति  खरिद समिति विषयगत समिति शिक्षक कार्यविभाजन वालक्लव जुनियर रेडक्रस आदि ।
                        </div>
                    </div>
                    <div className='item'>
                        <div id='title'>
                            विद्यार्थी विवरण
                        </div>
                        <div id='about'>
                            <div className='item'>
                                <img src={require('./../icons/arrow-right.svg').default}/>
                                <span>प्रारम्भिक वालकक्षा - ४९ जना</span>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/arrow-right.svg').default}/>
                                <span>कक्षा १ देखि ८ सम्म - १५६ जना</span>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/arrow-right.svg').default}/>
                                <span>कक्षा ९ देखि १२ सम्म - ५९  जना</span>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/arrow-right.svg').default}/>
                                <span>जम्मा - २६४ जना</span>
                            </div>
                        </div>
                        <div id='image'>
                            <img src={require('./../images/students/1.JPG')}/>
                            <div id='title'>विद्यार्थिहरु लाईनमा बस्दै</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Pathyakram;