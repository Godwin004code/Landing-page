import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme =>{
    return {
    appbar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        margin: '0 auto',
        padding: '1rem 0',
       
    },
    nav : {
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    ul: {
        display: 'flex',
        color: 'white',
        
    },
    box: {
        width: '24%',
        boxShadow: '0px 0px 10px #ccc',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        padding:'2rem .8rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '2rem auto',
            
            }
    },
    img : {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        margin: '0 auto',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    menu : {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
    }
})

