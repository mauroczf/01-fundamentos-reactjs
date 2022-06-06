import React, {useState, useEffect} from "react";
import api from './services/api';
import "./styles.css";

function App() {

  const [project, setProject] = useState([]);

  useEffect(() => {
    loadApi()
  }, []);


  async function handleAddRepository() {
    const response = await api.post(`repositories`, {
      title: "Desafio React BootCamp RocketSeat",
      techs: ["React", "ReactJS", "NodeJS"],
      url: "https://github.com/mauroczf/01-fundamentos-reactjs"
    })
    setProject([...project, response.data]);
  }

  async function loadApi() {
    const response = await api.get(`/repositories`);
    setProject(response.data);
  }

  async function handleRemoveRepository(id) {
    // await api.delete(`/repositories/${id}`);
    // handleAddRepository();
    setProject([]);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {project.map((el, index) => (
          <li key={el.id}>
            {el.title}

          </li>
        ))}
      </ul>
      <button onClick={() => handleRemoveRepository()}>Remover</button>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
