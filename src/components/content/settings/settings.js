import React from 'react';
import './settings.scss';

const Settings = ({view,toggleView}) => {
    
    return (
        <div className="settings-panel">
            <div className="setting">Выбрать язык</div>
            <div className="setting">Выбрать тему</div>
            <div className="setting">Обратная связь</div>
        </div>
    )
}

export default Settings;