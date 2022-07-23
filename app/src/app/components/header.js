import '../css/header.css';
import {Link} from "react-router-dom";
function Header() {
    return (
        <div id="header">
            <div id='container'>
                <div id='top'>
                    <div id=''>

                    </div>
                </div>
                <div id='bottom'>
                    <div className='item logo'>
                        <img src={require('./../images/logo/IMG_6633.JPG')}/>
                        <div id='name'>
                            <span id='nepali_top'>of]u]Gb</span>
                            <span id='nepali_down'>dfWolds ljWofno</span>
                            <span id='english'>Yogendra Higher Secondary School</span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/categories.svg').default}/>
                        <Link to='/'><span>होम</span></Link>
                        <div id='dot'></div>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/hands-up.svg').default}/>
                        <span>एकेडेमिक</span>
                        <div id='drop'>
                            <div id='arrow'>
                                <div id='up'></div>
                            </div>
                            <div id='title'>
                                एकेडेमिक
                                <span id='line'></span>
                            </div>
                            <div className='item'>Student Details</div>
                            <div className='item'>Teacher Details</div>
                            <div className='item'>Courses</div>
                            <div className='item'>Library</div>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/online-training.svg').default}/>
                        <Link to='/aboutUs'><span>हाम्रो बारेमा</span></Link>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/cloud-file-download.svg').default}/>
                        <Link to='/download'><span>डाउनलोड</span></Link>
                    </div>
                    <div className='item'>
                        <img src={require('./../images/tutor.svg').default}/>
                        <Link to='/contact'><span>सम्पर्क </span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;