// src/components/Projects.tsx
import React from 'react';

const projects = [
  { title: 'Projeto 1', description: 'Descrição do Projeto 1' },
  { title: 'Projeto 2', description: 'Descrição do Projeto 2' },
  { title: 'Projeto 3', description: 'Descrição do Projeto 3' },
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Meus Projetos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ margin: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
