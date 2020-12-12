import React, { useState } from "react";
import PDFViewer from 'pdf-viewer-reactjs'
import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container} from 'react-bootstrap';

const PdfViewer = () => {
    return (
        <Container>
        <PDFViewer
            css={'pdf'} canvasCss={'canvas_pdf'}
            document={{
                url: '/getResume',
            }}
        />
        </Container>
    )
}
export default PdfViewer;
