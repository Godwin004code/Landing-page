
import { makeStyles } from "@material-ui/core";

export const useStyle =  makeStyles(theme => {
    return {
    Card: {
        width: '70%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
            }
    }
}
})