import React from "react";
import {
  Typography,
  CssBaseline,
  Box,
  Button,makeStyles,Grid
} from "@material-ui/core";

export default function App() {
  return (
    <Grid style={{  height: "90vh", width:'40vh',display:'flex',flexFlow:'column',padding:'1vh .2vh .3vh .5vh' }}>
      <Typography variant='body' component='h4' style={{fontSize:'18px'}}>Problems</Typography>
      <Typography variant="p" style={{margin:'1vh 0 0 0',fontSize:'12px',color:'gray',opacity:'0.7'}}>* Currently we only fetch problems from codeforces</Typography>
      <Grid style={{display:'flex',height:'4vh',marginTop:'2vh'}}>
        <input placeholder="Code" style={{width:'10vh'}}/>
        <input placeholder="Problem Name" style={{width:'15vh',marginLeft:'2vh'}} />
      </Grid>
      <Box style={{height:'5vh',backgroundColor:'#872e2e',color:'#fff',
      width:'8vh',padding:'1vh',borderRadius:'5px',margin:'1.5vh 0 0 7vh',cursor:'pointer'}}>Fetch</Box>
    </Grid>
  );
}
