import PropTypes from 'prop-types';

function ButtonLarge({ text="Guardar", onSubmit }) {

  const handleClick = (event) => {
    event.preventDefault();

    console.log('Fetch time!');
    onSubmit();
  };

  return (
    <button className="button--large" onClick={handleClick}>{text}</button>
  );
}

ButtonLarge.propTypes = {
  text: PropTypes.string.isRequired
};

export default ButtonLarge;