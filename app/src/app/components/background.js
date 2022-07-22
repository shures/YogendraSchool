import '../css/contact.css';
import {Fragment} from "react";
import Header from './header'
import Footer from './footer'
function Background() {
    return (
        <Fragment>
            <Header/>
            <div id='background'>
                <div id='container'>
                    background
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Background;