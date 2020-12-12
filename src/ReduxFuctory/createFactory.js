import {createStore} from "redux";
import stateA from "./state";
import config from '../app_config.json';
let store_ = createStore(setAnithink);
store_.subscribe(()=>{
  //  console.log(store_.getState());
});
function setAnithink(state=stateA,action){
    if(action.type === config.Define.AddAbout){
        state.aboutObject=action.obj
        return state
    }
    if(action.type===config.Define.AddProjectsState){
            state.ProjectsList = action.arr;
        return state;
    }
    return state;

}
export default store_;
