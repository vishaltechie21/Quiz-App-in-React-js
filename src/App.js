// src/App.js
import React, { useState } from 'react';
import Quiz from './component/Quiz/Quiz';
import TopicSelector from './component/TopicSelector/TopicSelector';
import './App.css'; // Import your styles
import Footer from './component/Footer/Footer';


const App = () => {
    const [topicId, setTopicId] = useState(null);

    const selectTopic = (id) => {
        setTopicId(id);
    };

    const restartSelection = () => {
        setTopicId(null);
    };

    return (
        <div className="app-container" >
            <h1>Quiz App</h1>
            {topicId ? (
                <Quiz topicId={topicId} restartSelection={restartSelection} />
            ) : (
                <TopicSelector selectTopic={selectTopic} />
            )}
            
            <Footer />
            
        </div>
    );
};

export default App;
