import { makeStyles } from "@mui/material";

const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(9,0,6)
    },
    icon: {
        marginRight:'20px',
    },

    buttons: {
        marginTop:'40px',
    }
}));