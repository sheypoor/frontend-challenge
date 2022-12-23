import { useContext } from 'react';
import { FormContext } from '~/context/FormContext';
import PropTypes from 'prop-types';
import { Box } from '~/components';

const FormSections = ({ steps }) => {
  const { activeStep } = useContext(FormContext);

  const handleShowComponent = () => {
    const { component } = steps.find((step) => step.index === activeStep);
    return component;
  };

  return <Box sx={{ width: '100%' }}>{handleShowComponent()}</Box>;
};

FormSections.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default FormSections;
