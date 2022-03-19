import { Box, Paper, Typography } from '@mui/material';
import './Description.css';

function Description(props) {
    return(
        <Box className='box'>
            <Paper className='description' elevation={props.elevation}>
                <Typography gutterBottom variant='h3'>{props.title}</Typography>
                <Typography gutterBottom variant='body1'>{props.text}</Typography>
            </Paper>
        </Box>
    )
}

export default Description;