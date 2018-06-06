import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/fontawesome-free-solid'

const Header = ({ siteTitle }) => (
  
  <div className="svg-bg">
    <br />
    <br />
    <Typography variant="display2" color="inherit" align="center">
      <img className="circle" src="https://placekitten.com/200/200" alt="profile" style={{height:200}} />
    </Typography>
    <Typography variant="display2" color="inherit" align="center">
      Alan's resume
    </Typography>
    <Typography variant="subheading" color="inherit" align="center">
      Full-Stack Web Developer
    </Typography>
    <br />
    <br />
    <br />
    <Typography variant="button" color="inherit" align="center">
      <Button variant="fab" color="inherit" aria-label="Call">
        <FontAwesomeIcon icon={faPhone} />
      </Button>
    </Typography>
    <Typography variant="title" color="inherit" align="center">
      Call Now
    </Typography>
    <Typography variant="title" color="inherit" align="center">
      123-123-1234
    </Typography>
    <br />
    <br />
    <br />
    <Typography variant="headline" color="inherit" align="center">
      More info
    </Typography>
    <Typography variant="title" color="inherit" align="center">
      <Button color="inherit">
        <i className="fa fa-2x fa-chevron-down" />
      </Button>
    </Typography>
  </div>
)

export default Header
