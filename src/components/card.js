import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../css/card.css';

export default function ProjectCard(props) {
  const { image, alt, title, description } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
      <CardActions>
        <Button size="small" color="primary" className='visitBtn'>
          <a href='https://humanatlas.io' target="_blank" rel='noreferrer'>Visit</a>
        </Button>
      </CardActions>
    </Card>
  );
}