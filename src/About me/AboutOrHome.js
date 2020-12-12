import React from 'react'
import style from './AboutMe.module.css'
import Header from "../Header/Header";
import About from "./About";
import Footer from "../Footer/Footer";


const AboutOrHome =(props)=>{
    const {Hello,store} = props;
    return( <div className="App">
        <Header />
        <About store={store} Hello={Hello}/>

    </div>)
}
export default AboutOrHome;