import React from 'react';
import {
    HISTORY,
    HISTORY_LIST
}
from '../constants/labels.js';

export default function History (){
    return (
        <div className="History">
            <div className="HistoryIntroduction">
                <p>{HISTORY.title}</p>
                <p>{HISTORY.description}</p>
            </div>

            <div className="HistoryList">
                {HISTORY_LIST.map((item) => (
                <div className="HistoryItem" key={item.id}>
                    <h4>{item.title}</h4>
                    <ul>
                        {item.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
        </div>
    )
}