import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme)=>({
    root: {[theme.breakpoints.down('xs')]:{
        flexGrow:1,

        }
    },
    header:{
      backgroundColor:"black"
    },
    button:{
        fontWeight:"500",
        color : "white",
        height:"20px",
        width:"30px",
    },
    categories:{
        fontSize:"1.3em",
        color:"white",
        flexGrow:1,
    },
    search: {

      paddingLeft:"20px",
      marginLeft:"10px",
        flexGrow:"1",
        marginTop:"10px",
        marginBottom:"10px",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#bdbcc0",
        '&:hover': {
          backgroundColor: "white",
        },

        width:"auto",
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      menuItem:{
          fontColor:"black",
      }
}));