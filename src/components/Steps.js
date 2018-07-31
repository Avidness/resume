import React from 'react'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import FaIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faMobileAlt, faUserTie } from '@fortawesome/fontawesome-free-solid';

class Steps extends React.Component {
  render() {
    return (
      <Stepper activeStep={1} alternativeLabel>
        <Step>
          <StepLabel>
            <FaIcon icon={faMobileAlt} size="6x" />
          </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <FaIcon icon={faCoffee} size="6x" />
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <FaIcon icon={faUserTie} size="6x" />
            </StepLabel>
          </Step>
        </Stepper>
    )
  }
};

export default Steps