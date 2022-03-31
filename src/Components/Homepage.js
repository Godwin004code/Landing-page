
import { Button, Grid, IconButton, List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import Card from './Card'
import { useStyles } from "./Navbar.style"
import { useHomeStyle } from './Homepage.style'
import GridImage from "../Assests/illustration-mockups.svg"
import { Texts } from './Texts'
import "./style.css"
import Blog from './Blog'
import { FaChevronCircleDown } from 'react-icons/fa'

const Homepage = () => {
    const classes = useStyles()
    const classnames = useHomeStyle()
  return (
    <>
    <div  className={classnames.brands}>
        <div >Brand</div>
        <div>Brand</div>
        <div>Brand</div>
        <div>Brand</div>
    </div>
    <Card>
      <Grid item className={classnames.text}>
        <Typography variant='h4'>20 Growth Tips for your startup.</Typography>
        <Typography variant='h6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam soluta quaerat esse, adipisci obcaecati. Aliquid neque ducimus dignissimos rem dictacupiditate impedit sed optio voluptatibus velit, veniam nesciunt obcaecati possimus atque nemo ut nihil! Accusamus quod, esse saepe sit earum optio alias</Typography>
        <List>
          <ListItem>Clean Code</ListItem>
          <ListItem>Data Analytic</ListItem>
          <ListItem>Fully secured</ListItem>
          <ListItem>Easy tracking</ListItem>
          <ListItem>Management</ListItem>
          <ListItem>Strong Data</ListItem>
        </List>
      </Grid>
      <Grid item className={classnames.img}>
        <img src={GridImage} style={{width: '100%'}} alt='Image'/>
      </Grid>
    </Card>
    <div>
      <Typography variant='h4' style={{textAlign: 'center'}}>Digitally and truly yours</Typography>
      <Typography style={{textAlign: 'center'}} className={classnames.typo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti voluptas vitae sed quidem voluptatibus neque porro unde fugit nostrum necessitatibus?</Typography>
      <Card>
      {Texts.map((text) => {
        const { id, clas, img, title, des } = text
        return (
          <Grid item className={classes.box}>
            <Typography  className={classes.img} id={clas} >
              <div>{img}</div>
            </Typography>
            <Typography variant='h6' style={{margin: '1.8rem 0 0 0'}}>{title}</Typography>
            <Typography>{des}</Typography>
            <IconButton><FaChevronCircleDown /></IconButton>
          </Grid>
        )
      })}
      
      </Card>
      <div className={classnames.btn} >
      <Button variant='contained' style={{backgroundColor: '#ce8f00'}} className={classnames.btn__real}>See All Features</Button>
      </div>
    </div>
    <div>
      <Typography variant='h4' className={classnames.header4} style={{textAlign: 'center'}}>Choose your best pricing plan</Typography>
      <Typography variant='h6' style={{textAlign: 'center', margin: '1rem 0 1.8rem 0'}}>Added for Monthly 
        <div className="center">
          <input type="checkbox" name='' />
        </div>
       Yearly</Typography>
      <Card>
      <Grid item className={classnames.grid}>
        <Typography variant='h6' style={{textAlign: 'initial'}} className={classnames.h6}>Free Trial</Typography>
        <Typography variant='h4' className={classnames.h4}>$00 <span>Per Month</span></Typography>
        <List>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
        </List>
        <Button variant='outlined'>Start now</Button>
      </Grid>
      <Grid item className={classnames.grid2}>
      <Typography variant='h6'>Free Trial</Typography>
        <Typography variant='h4'>$00 <span>Per Month</span></Typography>
        <List>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
        </List>
        <Button variant='outlined'>Start now</Button>
      </Grid>
      <Grid item className={classnames.grid} >
      <Typography variant='h6'>Free Trial</Typography>
        <Typography variant='h4'>$00 <span>Per Month</span></Typography>
        <List>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
          <ListItem>Live access to infos</ListItem>
        </List>
        <Button variant='outlined'>Start now</Button>
      </Grid>
      </Card>
    </div>
    <Blog />
    </>

  )
}

export default Homepage