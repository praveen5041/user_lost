import React from 'react';
import { Navigate, Route} from 'react-router-dom';

const PrivateRoute=({component:Component,...rest})=>{
    return <Route {...rest} exact component={(props)=>{
        const token=window.localStorage.getItem('token')
        if(token){
            return <Component {...props} />
        }else{
            return <Navigate to={'/log-in'}/>
        }
    }} />
 
}

export default PrivateRoute