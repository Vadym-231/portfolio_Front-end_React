import '../CSS/App.css';
import React from 'react';
import Header from "../Header/Header";
import About from "../About me/About";
import PdfViewer from '../Resume/PdfViewer'

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <Header />
                <PdfViewer/>
            </div>
        );
    }
}

export default App;
