import Card from "../web_components/Card";

function Preview({ data }) {

  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{ backgroundImage: data.image && `url(${data.image})` }}></div>
      <Card data={data} />
    </section>
  );
}

export default Preview;
