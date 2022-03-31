import { makeStyles } from "@material-ui/core";

export const useHomeStyle = makeStyles(theme => {
    return {
    grid: {
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem 1.5rem',
        boxShadow: '0px 0px 10px #ccc',
        borderRadius: '12px',
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            justifyContent: 'initial',
            '& h4': {
                fontSize: '20px'
            }
        }
    },
    grid2: {
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#466cc2',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        margin: '0 12px 0 12px',
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            margin: '1rem 0',
            '& h4': {
                fontSize: '20px'
            }
        }
    },
    odd : {
        background: 'blue'
    },
    h6 : {
        textAlign: 'center'
    },
    img: {
        width: '50%',
        margin: '6rem 0 0 0',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '2rem 0 1rem 0'
        }
    },
    text: {
        width: '40%',
        margin: '6rem 0 0 0',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '3rem 0 0 0',
            '& h6': {
                wordBreak: 'break-all'
            }
        }
    },
    btn : {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    btn__real : {
        width: '25%',
        margin: '2rem auto 4rem auto',
        [theme.breakpoints.down('sm')]: {
            width: '52%'
        }
    },

    
    brands : {
        width: '80%',
        margin: '2rem auto',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 10px #ccc',
        padding: '2rem 1rem',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem 0',
            '& div': {
                marginBottom: '1rem'
            }
        }
    },
    typo: {
        width: '60%',
        margin: '1rem auto 1.7rem auto '
    },
    header4: {
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            margin: '0 auto'
        }
    }
    }
})