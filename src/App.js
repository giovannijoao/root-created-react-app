import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
    const [projects, setProjects] = useState(["Projeto 01", "Projeto 02"]);
    const handleClick = () => setProjects(state => [...projects, `Projeto ${(state.length + 1).toString().padStart(2, '0')}`]);
    return (<>
        <Header />
        <ul>
            {projects.map(project => <li title={project}>{project}</li>)}
        </ul>
        <button onClick={handleClick}>Adicionar projeto</button>
    </>)
};

export default App;