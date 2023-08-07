import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../css/button.css'

export default function ColorButtons(props) {
    return (
        <Stack direction="row" spacing={2}>
            {props.label.map((button, index) => (
                <Button key={index} variant="contained" color="success"
                    href={button.url} sx={{
                        fontFamily: 'Poppins',
                        // color: button.label === 'Visit' ? 'black' : 'white',
                        backgroundColor: button.label === 'Visit' ? 'black' : '#2e7d32',
                        '&:hover': {
                            backgroundColor: button.label === 'Visit' ? '#292727' : '#1b5e20', // New color for hover
                        }
                    }} className="visit-button" target="_blank">
                    {button.label}
                </Button>
            ))}
        </Stack>
    );
}