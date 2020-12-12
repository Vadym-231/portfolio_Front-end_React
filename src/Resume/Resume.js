import React from 'react';
import Header from "../Header/Header";
import PdfViewer from "./PdfViewer";
const Resume =(props)=> {

    return (
        <div className="App">
            <Header/>
            <PdfViewer/>
        </div>
    );
}
export default Resume;