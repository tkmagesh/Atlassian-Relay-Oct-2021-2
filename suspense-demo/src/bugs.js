import { useState, useEffect } from 'react';
const Bugs = () => {
    const [bugs, setBugs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3030/bugs");
            const data = await result.json();
            setBugs(data);
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <h2>Bugs</h2>
            <ul>
            {bugs.map(bug => (
                <li key={bug.id}>{bug.name}</li>
            ))}
            </ul>
        </div>
    );
}

export default Bugs