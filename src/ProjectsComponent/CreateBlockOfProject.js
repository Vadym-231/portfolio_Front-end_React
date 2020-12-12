import React from "react";
import styles from './ProjectsFilePage.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import state from "../ReduxFuctory/state";

import  {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const link_block=(event,hide=true)=>{

        const arr = event.target.parentNode.childNodes;
        console.log(arr)
        for (let i =0 ; i < arr.length;i++){
            if(arr[i].className===styles.links){
                if(arr[i].style.display==="none") {
                    arr[i].style.display = "inline-block"
                }else {
                    arr[i].style.display = "none"
                }
            }
        }

}

const CreateElement = (props)=>{
    const {data} = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return(
        //container  figure img tags tagsContainer right left content leng
        <Col className={styles.container}>

            <p className={styles.title}>{data.name}
            <img
                onClick={
                (event => {
                    link_block(event)
                })}

                  className={styles.start_ico} src='https://i.ibb.co/42TqJJz/png-transparent-pause-play-logo-brand-angle-font-icon-play-button-drawing-brands-line-play-button-re.png'
                alt='start'/>
                <span style={{display:"none"}} className={styles.links}>
            <a className={styles.link}  href={data.deployLink} >{data.name}</a><br/>
            <a className={styles.link} href={data.gitHubSrc}>GitHub</a>
            </span>
            </p>

            <div className={styles.figure}>

                <Slider {...settings}>
                    {
                        data.imgSrc.map(data=><div><img
                    className={styles.img}
                    src={data}
                    alt={data}
                    key={data}
                /></div>)
                    }
                    {data.mobile_img_src.map(data=><div className='picture_mobile'>
                        <img
                            className={styles.img_mobile}
                            src={data}
                            alt={data}

                        />
                    </div>)}
                </Slider>
                <span>
                    <p className={styles.content}>{data.about.content}  </p>
                    <p className={styles.leng}>{data.about.language_of_programing}</p>
                    <p className={styles.tagsContainer}>{data.about.framework_list.map(data=><span className={styles.teg}>{data}</span>)}</p>
                </span>
            </div>
        </Col>
    )

}

export default CreateElement;