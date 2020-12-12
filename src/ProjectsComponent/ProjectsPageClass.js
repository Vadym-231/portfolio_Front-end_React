import React from 'react'
import PropTypes from 'prop-types'
import style from './ProjectsFilePage.module.css'
import config from '../app_config.json'
import CreateElement from "./CreateBlockOfProject";
import Header from '../Header/Header'

import  {Row,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class ProjectsPageClass extends React.Component{


    componentDidMount(){
        const {store} = this.props;
        fetch('/api/projects/sortBy=Date').then(data=>{
            if(data.status===200){
                return data.json()
            }
        }).then(data=>{
            console.log(data)
            store.dispatch({type:config.Define.AddProjectsState,arr:data})
        })
    }
    render() {
        const {store} = this.props;

        return(
            <div>
                <Header/>

                <Container>
                    <Row>


                { (store.getState().ProjectsList.length>0)?store.getState().ProjectsList.map((data,i)=><CreateElement key={i} data={data}/>):null}
                </Row> </Container>
            </div>
        )
    }
}


//


//TypesChecker

export default ProjectsPageClass;
