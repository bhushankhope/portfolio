import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import '../css/accordion.css'

export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ maxWidth: 800 }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        sx={{ color: 'white', backgroundColor: '#2f154c', fontWeight: 500, marginBottom: '0.5rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='custom-accordion-summary'
        >
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
            Angular Developer @CNS Indiana University
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>May 2022 - August 2023</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 500 }}>
            <span className='loc-url-wrapper'>
              <span className='location'><LocationOnIcon sx={{ fill: '#ff00ff' }} className='icon' />Bloomington, Indiana</span><br />
              <span className='url'><LinkIcon sx={{ fill: '#ff00ff' }} className='icon' />
                <a href='https://cns.iu.edu' className='link' target="_blank">cns.iu.edu</a></span><br />
            </span>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
        sx={{ color: 'white', backgroundColor: '#2f154c', marginBottom: '0.5rem' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className='custom-accordion-summary'
        >
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>Application Development Associate @Accenture</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
            December 2020 - October 2021
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 500 }}>
            <span className='loc-url-wrapper'>
              <span className='location'><LocationOnIcon sx={{ fill: '#ff00ff' }} className='icon' />Pune, India</span><br />
              <span className='url'><LinkIcon sx={{ fill: '#ff00ff' }} className='icon' />
                <a href='https://www.accenture.com/in-en' className='link' target="_blank">accenture.com/in-en</a></span><br />
            </span>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ color: 'white', backgroundColor: '#2f154c' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className='custom-accordion-summary'
        >
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
            Test Engineer Intern @Globalstep Pvt Ltd
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
            Jan 2019 - June 2019
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 500 }}>
            <span className='loc-url-wrapper'>
              <span className='location'><LocationOnIcon sx={{ fill: '#ff00ff' }} className='icon' />Pune, India</span><br />
              <span className='url'><LinkIcon sx={{ fill: '#ff00ff' }} className='icon' />
                <a href='https://globalstep.com/' className='link' target="_blank">globalstep.com</a></span><br />
            </span>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}