import React, { useEffect, useState } from 'react';

const SampleComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/backend/api/sample.php')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Sample Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default SampleComponent;