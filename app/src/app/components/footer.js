import './../css/footer.css'
function Footer(){
    return (
        <div id='footer'>
            <div id='container'>
                <div id="top">
                    <div id='column1'>
                        <div id='title'>
                            <span> हाम्रो बारेमा</span>
                            <div id='line'></div>
                        </div>
                        <div id='foo'>
                            प्रस्तुत विषयमा यस थासाङ गाउँपालिकाको आ.व. को बार्षिक स्वीकृत कार्यक्रम अनुसार योजनाको नामको लागि वडा नं  को आम भेलाले श्री अध्यक्षको नाम अध्यक्षतामा समितिको नाम उपभोक्ता समिति गठन भई त्यस कार्यालयसँग योजना सम्झौता भइसकेकोले तपशिल बमोजिमको व्यक्तिहरुको नामबाट उपभोक्ता समितिको नाउँमा बैंक खाता सञ्चालनको लागि थासाङ स्थित प्रभु बैङ्कमा सिफारिश गरिदिनुहुन अनुरोध छ ।
                        </div>
                        <div id='follow'>
                            <div className='item'>
                                <img src={require('./../icons/facebook-round-line-color.svg').default}/>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/youtube-round-line-color.svg').default}/>
                            </div>
                            <div className='item'>
                                <img src={require('./../icons/twitter-round-line-color.svg').default}/>
                            </div>
                        </div>
                    </div>
                    <div id='column2'>
                        <div id='title'>
                            <span>हामीसँग जोडिनुहोसा</span>
                            <div id='line'></div>
                        </div>
                        <div id='foo' style={{lineHeight:'34px'}}>
                            <div className="item">
                                <span>योगेन्द्र माध्यमिक वि्दयालय</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/address-location.svg').default}/>
                                <span>थासाङ-१, टुकुचे, मुस्ताङ, गण्डकी प्रदेश</span>
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
                    </div>
                    <div id='column3'>
                        <div id='title'>
                            <span>प्रोयोग हुन सक्ने लिङ्कहरु</span>
                            <div id='line'></div>
                        </div>
                        <div id='foo' style={{lineHeight:'34px'}}>
                            <div className="item">
                                <img id="icon" src={require('./../icons/arrow-right.svg').default}/>
                                <span>गाउँपालिकाको वेव पोर्टल</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/arrow-right.svg').default}/>
                                <span>शिक्षा मन्त्रालय, गण्डकी प्रदेश</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/arrow-right.svg').default}/>
                                <span>शिक्षा समन्वय कार्यालय, जोमसोम, मुस्ताङ</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/arrow-right.svg').default}/>
                                <span>शिक्षा मन्त्रालय</span>
                            </div>
                            <div className="item">
                                <img id="icon" src={require('./../icons/arrow-right.svg').default}/>
                                <span>अन्य अरु</span>
                            </div>
                        </div>
                    </div>
                    <div id='column4'>
                        <div id='title'>
                            <span>फोटोहरु</span>
                            <div id='line'></div>
                        </div>
                        <div id='foo'>
                            <div className="item">
                                <img src={require('./../images/2.jpg')}/>
                                <b>प्रधानध्यापक</b>
                                <span>श्री गोविन्द्र सर</span>
                            </div>
                            <div className="item">
                                <img src={require('./../images/1.jpeg')}/>
                                <b>उप प्रधानध्यापक</b>
                                <span>श्री फुलमाया </span>
                            </div>
                            <div className="item">
                                <img src={require('./../images/2.jpg')}/>
                                <b>प्रधानध्यापक</b>
                                <span>श्री गोविन्द्र सर</span>
                            </div>
                            <div className="item">
                                <img src={require('./../images/1.jpeg')}/>
                                <b>उप प्रधानध्यापक</b>
                                <span>श्री फुलमाया </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="middle">
                    <div className='item'>

                    </div>
                </div>
                <div id="bottom">
                    <div id="container">
                        <span>योगेन्द्र माध्यमिक विद्यालय, थासाङ गाउँपालिका, गण्डकी प्रदेश</span>
                        <span>सर्वाधिकार सुरक्षित © २०२२ | All Rights Reserved | Designed By: SHURES NEPALI </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;