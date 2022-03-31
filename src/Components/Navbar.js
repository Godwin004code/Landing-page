import React from 'react'
import { AppBar, Button, ButtonGroup, List, ListItem, MenuItem, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { useStyles } from './Navbar.style'
import {FaBars} from "react-icons/fa"
import "../style/responsive.scss"
import DrawerComp from './DrawerComp'


const Navbar = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    
  return (
      <>
        <AppBar color='inherit'style={{ backgroundColor: '#466cc2', boxShadow: 'initial', position: 'initial'}}>
            {
                isMatch ? (
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '90%',
                    margin: '1rem auto 0  auto'}}>
                        <Typography variant='h4'>Logo</Typography>
                        <DrawerComp />
                    </div>
                ) : (
                    <div className={classes.appbar}>
            <div>Logo</div>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                <ListItem>Home</ListItem>
                <ListItem>Features</ListItem>
                <ListItem>Pricing</ListItem>
                <ListItem>Testimonial</ListItem>
                <ListItem>Blog</ListItem>
                
                </ul>
                
            </nav>
            <ButtonGroup>
                <Button style={{color: '#ce8f00', backgroundColor: 'white',}} >Get Free Trial</Button>
            </ButtonGroup>
            </div>
                )
            }
            
            
        </AppBar>
      </>

  )
}

export default Navbar