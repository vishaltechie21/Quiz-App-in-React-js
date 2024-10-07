// src/components/TopicSelector.js
import React from 'react';
import './TopicSelector.css'; // Import styles

const TopicSelector = ({ selectTopic }) => {
    const topics = [
        { id: 18, name: 'Data Structures' },     // Category: Computers (ID: 18)
        { id: 18, name: 'Algorithms' },          // Use the same ID for related categories
        { id: 18, name: 'Object-Oriented Programming' },
        { id: 18, name: 'Databases' },
        { id: 18, name: 'Operating Systems' },
        { id: 18, name: 'Web Development' },
        { id: 18, name: 'Networking' },
        { id: 18, name: 'Software Engineering' },
        { id: 18, name: 'Coding Challenges' },
        { id: 18, name: 'JavaScript' },
        { id: 18, name: 'Python' },
        { id: 18, name: 'Machine Learning' },
    ];
    
    return (
        <div className="topic-selector">
            <h2>Select a Quiz Topic</h2>
            <div className="topics-container">
                {topics.map((topic) => (
                    <button
                        className="topic-button"
                        key={topic.id}
                        onClick={() => selectTopic(topic.id)}
                    >
                        {topic.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopicSelector;
