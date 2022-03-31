
import { Grid, List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Card from './Card'
import { useFooterStyles } from './Footer.style'


const Footer = () => {
    const classes = useFooterStyles()
  return (
    <div className={classes.footer__container}>
        <div className={classes.footer__card}>
            <div item className={classes.footer__box}>
                <div>Logo</div>
                 <Typography style={{width: '200px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam. </Typography> 
            </div>
            <div item className={classes.footer__box}>
                <Typography variant='h5'>Company</Typography>
                <List>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                </List>
            </div>
            <div item className={classes.footer__box}>
                <Typography variant='h5'>News</Typography>
                <List>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>

                </List>
            </div>
            <div item className={classes.footer__box}>
                <Typography variant='h5'>Socials</Typography>
                <div className={classes.social__container}>
                    <div className={classes.social}>
                        <FaWhatsapp />
                    </div>
                    <div className={classes.social}>
                        <FaFacebook />
                    </div>
                    <div className={classes.social}>
                        <FaTwitter />
                    </div>
                    <div className={classes.social}>
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer