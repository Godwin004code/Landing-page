import { Drawer, IconButton, List, ListItemText, makeStyles} from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
//import { useStyles } from './Drawer.style'

const DrawerComp = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false)
    const useStyles = makeStyles(theme => ({
        listItemText: {
            width: '100%',
            padding: '0 0 2rem 0',
            margin: '3rem 0 0 0'
        },
        list : {
            width: '300px',
            textAlign: 'center',
            padding: '1.8rem 0 0 2rem'
            
        }
    }))
    const classes =useStyles()
  return (
    <div >
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List  className={classes.list} >
                <ListItemText className={classes.listItemText} >Home</ListItemText>
                <ListItemText  className={classes.listItemText}>Features</ListItemText>
                <ListItemText  className={classes.listItemText}>Pricing</ListItemText>
                <ListItemText  className={classes.listItemText}>Testimonial</ListItemText>
                <ListItemText  className={classes.listItemText}>Blog</ListItemText>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <FaBars />
        </IconButton>
    </div>
  )
}

export default DrawerComp