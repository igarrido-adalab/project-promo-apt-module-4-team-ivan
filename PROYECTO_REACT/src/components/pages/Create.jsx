import Hero from "../layout/Hero";
import ButtonLink from "../web_components/ButtonLink";
import Form from "./Form";
import Preview from "./Preview";

import "../../scss/pages/Create.scss";

function Create({ changeData, data, updateAvatarAuthor, updateAvatarProject, onSubmit, responseFetch }) {
  return (
    <>
      <Hero>
        <ButtonLink text="Ver proyectos" href="#" />
      </Hero>

      <Preview data={data} />
      <Form
        changeData={changeData}
        data={data}
        updateAvatarAuthor={updateAvatarAuthor}
        updateAvatarProject={updateAvatarProject}
        onSubmit={onSubmit}
        responseFetch={responseFetch}
      />
    </>
  );
}

export default Create;
