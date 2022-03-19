import { Box } from '@mui/system';
import './Image.css';

function Image(props) {
    return(
        <Box className='image-box' sx={{width: 250}}>
            <img src={props.src} alt={props.alt}></img>
        </Box>
    )
};

export default Image;