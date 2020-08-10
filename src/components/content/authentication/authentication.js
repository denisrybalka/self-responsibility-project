import React from 'react'
import {Link} from 'react-router-dom'

import './authentication.scss';

const Authentication = ({page}) => {

    const authPage = page === "login";

    const linkStyle = {
        color:"#C2C2C2",
        fontWeight: "800",
        fontSize: "12px",
    }

    const RegisterAsk = () => {
        return (
            <div style={linkStyle}>
                уже есть аккаунт?
                <Link to="/login" style={{color:"#49DD9C"}}> Вход</Link>
            </div>
        )
    }

    const LoginAsk = () => {
        return (
            <div style={linkStyle}>
               еще нет аккаунта?
               <Link to="/register" style={{color:"#49DD9C"}}> Регистрация</Link>
            </div>
        )
    }

    return (
        <div>
            <Link to="/" className="auth-overlay"></Link>
            <div className="auth-modal" style={ authPage ? {height:"400px"} : null}>
                <Link to="/" className="item-close"></Link>
                <div className="auth-title">{authPage ? "Вход" : "Регистрация"}</div>
                <div className="auth-ask">{authPage ? <LoginAsk/> : <RegisterAsk/>}</div>

                <label htmlFor="login">Login</label>
                <input
                    className="sample-input auth-input"
                    id="login"
                    type="text"
                    placeholder="Nick Name"
                />

                {!authPage ?
                <div>
                    <label htmlFor="email" style={{display:"block"}}>Email</label>
                    <input
                        className="sample-input auth-input"
                        id="email"
                        type="email"
                        placeholder="example123@example.com"
                    />
                </div> : null }

                <label htmlFor="password">Password</label>
                <input
                    className="sample-input auth-input"
                    id="password"
                    type="password"
                    placeholder="mr_kek2009"
                />

                <div className="auth-btn-block">
                    <button className="main-btn">{authPage ? "Войти" : "Регистрация"}</button>
                    <Link to="/"><button className="secondary-btn">Отмена</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Authentication;