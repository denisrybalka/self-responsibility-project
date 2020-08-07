import React from 'react';
import './settings.scss';

const Settings = ({view,toggleView}) => {
    
    return (
        <div>
            <div className="settings" onClick={() => toggleView()}></div>
            {view ?
                <div className="settings-panel">
                    <div className="setting">Выбрать язык</div>
                    <div className="setting">Выбрать тему</div>
                    <div className="setting">Обратная связь</div>
                </div>
            : null}
        </div>
    )
}

export default Settings;