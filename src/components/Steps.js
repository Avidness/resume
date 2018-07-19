import React from 'react'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faMobileAlt, faUserTie } from '@fortawesome/fontawesome-free-solid';

class Steps extends React.Component {
  render() {
    return (
      <Stepper activeStep={1} alternativeLabel>
        <Step>
          <StepLabel>
            <FontAwesomeIcon icon={faMobileAlt} size="6x" />
          </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <FontAwesomeIcon icon={faCoffee} size="6x" />
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <FontAwesomeIcon icon={faUserTie} size="6x" />
            </StepLabel>
          </Step>
        </Stepper>
    )
  }
};

export default Steps