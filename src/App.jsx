import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RepoList from './components/RepoList';
import Modal from './components/Modal';
import ContributionGraph from './components/ContributionGraph';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-container">
        <div className="layout-grid">
          <div className="sidebar-column">
            <Sidebar />
          </div>
          
          <div className="content-column">
            <RepoList onProjectClick={handleProjectClick} />
            <ContributionGraph />
          </div>
        </div>
      </main>

      <Modal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default App;
