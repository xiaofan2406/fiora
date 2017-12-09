import PropTypes from 'prop-types';
import withFiora from './withFiora';

function Submit({ children, handleSubmit }) {
  return children({ handleSubmit });
}

Submit.propTypes = {
  children: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFiora({ withHandleSubmit: true })(Submit);

export { Submit as Component };
