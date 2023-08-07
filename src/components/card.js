import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import '../css/card.css';
import ColorButtons from './button';

export default function ProjectCard(props) {
  const { image, alt, title, description, buttonLabel } = props;
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0' }}>
      <CardActionArea sx={{ height: 'maxContent' }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='pr-title'>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='pr-title'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{ flexGrow: 1 }}></div>
      <CardActions>
        {buttonLabel && <ColorButtons label={buttonLabel}></ColorButtons>}
      </CardActions>
    </Card>
  );
}