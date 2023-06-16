import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      <label htmlFor="passwordSize">Quantos dígitos a senha deve ter:</label>
      <input
        type="number"
        placeholder="Quantidade de dígitos"
        value={props.passwordSize}
        min={1}
        onChange={(e) => props.setpasswordSize(+e.target.value)}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setpasswordSize: PropTypes.func,
};
