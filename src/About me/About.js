import React from 'react'
import style from './AboutMe.module.css'
import config  from '../app_config.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button,Container} from 'react-bootstrap';
class About extends React.Component{

    componentDidMount() {
        const {store}=this.props;
        fetch('api/about').then(data=>{
            if(data.status===200){
                return data.json()
            }
        }).then(data=>{
            console.log(data)
            store.dispatch({type:config.Define.AddAbout,obj:data})
        })
    }
    render() {
        const {Hello,store} = this.props;
        return(<Container className='text-center' >
            <h1 className={style.container}>
                {(Hello) ? <img className='Hello' src='https://i.ibb.co/ydDVfrR/hello-removebg-preview.png' alt='Hello'/> : <img className='Hello' src='https://i.ibb.co/ydDVfrR/hello-removebg-preview.png' alt='Hello'/>}
               <br/> <img className={style.img} src={(typeof store.getState().aboutObject.img_src!=='undefined')?store.getState().aboutObject.img_src:null} alt='poc'/>
                <Alert key={1} variant={'primary'} className={'text-box'}>
                    {(typeof store.getState().aboutObject.content!=='undefined')?store.getState().aboutObject.content:null}
            </Alert>

            </h1><br/><Button href='/projects' size="lg" variant="primary">Lets check projects</Button>
        </Container>)
    }
}

export default About;