import { useState } from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Create from "./pages/Create";

import "../scss/App.scss";

/*
- App
  - Header
  - Create
    - Hero
      - ButtonLink
    - Preview
      - Card
    - Form (useState)
      - ButtonLarge
  - Footer
*/

function App() {
  const [data, setData] = useState({
    name: "", // Nombre del proyecto
    slogan: "", // Slogan del proyecto
    technologies: "", // Tecnologías
    repo: "", // Repo
    demo: "", // Demo
    desc: "", // Descripción
    autor: "", // Nombre de la autora
    job: "", // Trabajo de la autora
    photo: "", // Foto de la autora
    image: "", // Foto del proyecto
  });
  const [ responseFetch, setResponseFetch ] = useState( '' );


  const changeData = (nameProp, newValue) => {
    console.log({ nameProp, newValue });

    const clonData = { ...data };

    clonData[nameProp] = newValue;
    //clonData.slogan = newValue;

    setData(clonData);
  };

  const updateAvatarAuthor = (image) => {

    const clonData = { ...data };

    clonData.photo = image;

    setData( clonData );

  };

  const updateAvatarProject = (image) => {

    const clonData = { ...data };

    clonData.image = image;

    setData( clonData );

  };

  

  const handleFetchCreate = () => {
    const data = {
      name: "", // Nombre del proyecto
      slogan: "", // Slogan del proyecto
      technologies: "", // Tecnologías
      repo: "", // Repo
      demo: "", // Demo
      desc: "", // Descripción
      autor: "", // Nombre de la autora
      job: "", // Trabajo de la autora
      photo: "", // Foto de la autora
      image: "", // Foto del proyecto
    };
    fetch('/api/projectCard',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(dataResponse => {
        console.log('Llegó el fetch!');

        console.log(dataResponse);

        setResponseFetch( dataResponse );
      });
  };


  return (
    <div className="container">
      <Header />

      <main className="main">
        <Create
          changeData={changeData}
          data={data}
          updateAvatarAuthor={updateAvatarAuthor}
          updateAvatarProject={updateAvatarProject}
          onSubmit={handleFetchCreate}
          responseFetch={responseFetch}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
