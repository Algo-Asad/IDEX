import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../../store/language/languageActions";

const Login = () => {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.languageReducer.lang)
    const onChange = async (e) => {
        dispatch(await setLanguage(e.target.value))
    }
    return <div>
        <select value={lang || 'en'} onChange={onChange}>
            <option value="lorem">lorem</option>
            <option value="en">English</option>
        </select>

    </div>
}

export default Login
