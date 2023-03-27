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
 
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//     const auth = null;
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }

export default PrivateRoute