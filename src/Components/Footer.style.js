import {makeStyles} from "@material-ui/core"

export const useFooterStyles = makeStyles(theme => {
    return {
    footer__container: {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '2rem',
        padding: '2rem 0',
      
    },
    footer__card : {
        width: '70%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    footer__box: {
        width: '25%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
           
        }
    },
    social__container: {
        display: 'flex',
        justifyContent: 'space-between',
       
    },
    social: {
        width: '32px',
        height: '32px',
        border: '1px solid white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
           marginRight: '5px'
        }

    },
    }
})