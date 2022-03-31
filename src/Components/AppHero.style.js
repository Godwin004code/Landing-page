

import { makeStyles } from "@material-ui/core";

export const useStyle =  makeStyles(theme => {
    return {
    main__container : {
       width: '100%' ,
       background: '#466cc2',
       padding: '0rem 0 0 0'
   },
   sub__container: {
       width: '100%',
       margin: '0 auto'
   },
   container: {
       
       display: 'flex',
       justifyContent: 'space-between',
       width: '90%',
       margin: '0 auto',
       [theme.breakpoints.down('sm')]: {
           flexDirection: 'column'
           }
       

   },
  
   heroImage: {
       width: '50%',
       paddingBottom: '1rem',
       [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: '2rem 0'
        }
   },
   img: {
       width: '100%'
   },
   h6 : {
       padding: '3rem 0 .6rem 0',
       textTransform: 'uppercase',
       color: 'white'
   },
   p: {
       padding: '1.5rem 0 ',
       color: 'white'
   },
 
   heroText: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
     width: '100%'
     }
 }
}
})