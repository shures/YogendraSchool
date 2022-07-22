import '../css/teacher.css';
import {Fragment} from "react";
import Header from './header'
import Footer from './footer'
function Teacher() {
    return (
        <Fragment>
            <Header/>
            <div id='teacher'>
                <div id='container'>
                    <div id='left'>
                        <div id="title">
                            Teacher Details
                        </div>
                        <div id='container'>
                            <div className='item'>
                                <span>Secondary Level ( Class 9- Class 12 )</span>
                                <span>7</span>
                            </div>
                            <div className='item'>
                                <span>Basic Level ( Class 1- Class 8 )</span>
                                <span>10</span>
                            </div>
                            <div className='item'>
                                <span>Early Childhood Level</span>
                                <span>4</span>
                            </div>
                            <div className='item'>
                                <span>Early Childhood Level</span>
                                <span>3 </span>
                            </div>
                        </div>
                    </div>
                    <div id='right'>
                        <div id='container'>
                            <div className="block">
                                <div id='title'>
                                    प्रधानाध्यापक/सहायक प्रधानाध्यापक
                                </div>
                                <div id='container'>
                                    <div className='item'>
                                        <img src={require('../images/teachers/गोविन्द श्रेष्ठ, प्रधानाध्यापक.jpg')}/>
                                        <span>प्रधानाध्यापक - गोविन्द श्रेष्ठ</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('../images/teachers/तुलासिनाथ सुवेदी सहायक प्र.अ..jpg')}/>
                                        <span>सहायक प्रधानाध्यापक-तुलासिनाथ सुवेदी</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div id='title'>
                                    मा.वि. तर्फका शिक्षकहरु
                                </div>
                                <div id='container'>
                                    <div className='item'>
                                        <img src={require('../images/teachers/गोबिन्द पाण्डे, मा.वि. शिक्षक.jpg')}/>
                                        <span>गोबिन्द पाण्डे</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('../images/teachers/केशव अधिकारी, मा.वि. शिक्षक.jpg')}/>
                                        <span>केशव अधिकारी</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('../images/teachers/चिन्तामणी गौडेल, मा.वि. शिक्षक.jpg')}/>
                                        <span>चिन्तामणी गौडेल</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div id='title'>
                                    नि.मा.वि. तर्फका शिक्षकहरु
                                </div>
                                <div id='container'>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/गोकुल बहादुर गमाल , नि.मा.वि शिक्षक.jpg')}/>
                                        <span>गोकुल बहादुर गमाल</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/नर बहादुर खत्री नि.मा.वि. शिक्षक.jpg')}/>
                                        <span>नर बहादुर खत्री</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/लक्ष्मण यादव, नि.मा.वि शिक्षक.jpg')}/>
                                        <span>लक्ष्मण यादव</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div id='title'>
                                    प्रा.वि. तर्फका शिक्षकहरु
                                </div>
                                <div id='container'>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/अरुना गौचन,  प्रा.वि. शिक्षक.jpg')}/>
                                        <span>अरुना गौचन</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/राधा परियार प्रा.वि. शिक्षक.jpg')}/>
                                        <span>राधा परियार</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/सन्त थकाली प्रा.वि. शिक्षक.jpg')}/>
                                        <span>सन्त थकाली</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/सुरचन थकाली प्रा.वि. शिक्षक.JPG')}/>
                                        <span>सुरचन थकालीी</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div id='title'>
                                    बाल शिक्षकहरु
                                </div>
                                <div id='container'>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/सृष्टि गौचन बाल शीक्षिका.jpg')}/>
                                        <span>सृष्टि गौचन</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/अर्जुना पूर्जा, बाल शिक्षिका.jpg')}/>
                                        <span>अर्जुना पूर्जा</span>
                                    </div>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/शुकदेवि पुन बाल शीक्षिका.jpg')}/>
                                        <span>शुकदेवि पुन</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div id='title'>
                                    कार्यालय सहयोगी
                                </div>
                                <div id='container'>
                                    <div className='item'>
                                        <img src={require('./../images/teachers/कमला तामाङ, कार्यालय सहयोगी.jpg')}/>
                                        <span>सृष्टि गौचन</span>
                                    </div>
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
export default Teacher;