import GetAvatar from "../web_components/GetAvatar";

import ButtonLarge from "../web_components/ButtonLarge";

function Form({
  changeData,
  data,
  updateAvatarAuthor,
  updateAvatarProject,
  onSubmit,
  responseFetch,
}) {
  const handleChange = (event) => {
    const newValue = event.currentTarget.value;
    const attrIdOfInput = event.currentTarget.id;

    console.log(attrIdOfInput);

    changeData(attrIdOfInput, newValue);
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleChange}
          value={data.slogan}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={handleChange}
            value={data.repo}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={handleChange}
            value={data.demo}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          text="Subir foto del proyecto"
          updateAvatar={updateAvatarProject}
        ></GetAvatar>

        <GetAvatar
          text="Subir foto de la autora"
          updateAvatar={updateAvatarAuthor}
        ></GetAvatar>

        <ButtonLarge text="Guardar proyecto" onSubmit={onSubmit} />

        {responseFetch !== "" && responseFetch.success && (
          <p>
            Tu proyecto ha sido creado en la siguiente dirección:{" "}
            <a href={responseFetch.cardURL}>{responseFetch.cardURL}</a>
          </p>
        )}

        {responseFetch !== "" && !responseFetch.success && (
          <p>Ha ocurrido un error: {responseFetch.error}</p>
        )}
      </fieldset>
    </form>
  );
}

export default Form;
