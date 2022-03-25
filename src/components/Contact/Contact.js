import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Grid, Typography } from "@mui/material";
import './Contact.css';

function Constact({ instagramUrl, linkedinUrl, whatsappUrl, githubUrl, emailUrl }) {
    return(
        <Grid className='contact-menu' container spacing={2}>
            <Grid className='contact-title' item xs={12}>
                <Typography variant='h4' mb={4}>Contacto</Typography>
            </Grid>
            <Grid className='contact-item' item xs={1}>
                <a href={instagramUrl} rel='noreferrer' target='_blank'>
                    <InstagramIcon className='icon' fontSize='large' />
                </a>
            </Grid>
            <Grid className='contact-item' item xs={1}>
                <a href={linkedinUrl} rel='noreferrer' target='_blank'>
                    <LinkedInIcon fontSize='large' />
                </a>
            </Grid>
            <Grid className='contact-item' item xs={1}>
                <a href={whatsappUrl} rel='noreferrer' target='_blank'>
                    <WhatsAppIcon fontSize='large' />
                </a>
            </Grid>
            <Grid className='contact-item' item xs={1}>
                <a href={githubUrl} rel='noreferrer' target='_blank'>
                    <GitHubIcon fontSize='large' />
                </a>
            </Grid>
            <Grid className='contact-item' item xs={1}>
                <a href={emailUrl} rel='noreferrer' target='_blank'>
                    <EmailIcon fontSize='large' />
                </a>
            </Grid>
        </Grid>
    )
}

export default Constact;