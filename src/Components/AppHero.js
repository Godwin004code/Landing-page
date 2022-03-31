
import { Button, Typography, Container } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import image from "../Assests/illustration-flowing-conversation.svg"
import { useStyle } from './AppHero.style'
import "../style/responsive.scss"

const AppHero = () => {
  const classes = useStyle()
  return (
    <div className={classes.main__container}>
      <div className={classes.sub__container}>
        <Navbar className='nav' />

        <div className={classes.container}>
          <Container className={classes.heroText}>
            <h6 className={classes.h6}>It is a long exhibition</h6>
            <h1 style={{color: '#ce8f00'}}>Technology</h1>
            <h1 style={{color: 'white'}} >Can solve problem.</h1>
            <Typography className={classes.p}>A big problem could solve by technology, Technology is the future. Dolor franklin gothic medium arial narrow arial narrow</Typography>
            <Button variant='contained' color='inherit' style={{marginRight: '5px', color: '#ce8f00', border: '1px solid #ce8f00',backgroundColor: 'white'}}>
              Get Started
            </Button>
            <Button variant='outlined' style={{border: '2px solid #ce8f00', color: '#ce8f00',}}>Read More</Button>
          </Container>
          <div className={classes.heroImage}>
            <img className={classes.img} src={image} alt="Hero Image" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default AppHero
