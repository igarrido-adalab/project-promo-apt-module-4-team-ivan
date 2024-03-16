import PropTypes from "prop-types";

function ButtonLink({ text, href }) {
  return (
    <a className="button--link" href={href}>
      {text}
    </a>
  );
}

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ButtonLink;
