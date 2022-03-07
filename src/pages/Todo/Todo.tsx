import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

// import { useNavigate } from 'react-router-dom';

const Todo:React.FC = () => {

    const authCtx = useContext(AuthContext)
    const logout = authCtx.logout

    const navigate = useNavigate();
    const logoutHandler = () => {
        logout()   
        navigate('/auth', {replace: true})
    }
    
    return(
        <>
            <h1>Todo</h1>
            <button onClick={logoutHandler}>Logout</button>
        </>
    )
} 

export default Todo