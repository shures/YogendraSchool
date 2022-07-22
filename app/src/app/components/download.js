import '../css/download.css';
import {Fragment} from "react";
import Header from './header'
import Footer from './footer'
function Download() {
    return (
        <Fragment>
            <Header/>
            <div id='download'>
                <div id='title'>
                    <img src={require('./../icons/cloud-download.svg').default}/>
                    <span>Downloads</span>
                    <span id='line'></span>
                </div>
               <div id='container'>
                    <table>
                        <tr>
                            <th>S.N.</th>
                            <th>File</th>
                            <th>Download</th>
                        </tr>
                        <tr>
                            <td>१.</td>
                            <td>
                                <div id='title'>
                                    <span>का.स.मु. फारम</span>
                                </div>
                            </td>
                            <td>
                                <a href="sampati.pdf" download={true}>
                                    <img src={require('./../icons/download-pdf.svg').default}/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>२.</td>
                            <td>
                                <div id='title'>
                                    <span>सम्पति विवरण फारम</span>
                                </div>
                            </td>
                            <td>
                                <a href="sampati.pdf" download={true}>
                                    <img src={require('./../icons/download-pdf.svg').default}/>
                                </a>
                            </td>
                        </tr>
                    </table>
               </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Download;