import Athar from "../../Assets/images/athar.jpg"
import Linkedin from "../../Assets/images/Linkedin.png"
import Codeforces from "../../Assets/images/Codeforces.png"
import AtharPortfolio from "../../Assets/images/AtharPortfolio.jpg"
import Github from "../../Assets/images/Github.png"

import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  Admin:{
    backgroundColor:'#fff',
    height:'20vh',
    width:'20vw',
    borderRadius:'20px',
    padding:'10px',
    display:'flex',
    flexDirection:"column",
  },
  Athar:{
    fontFamily: ["edgwick Ave Display", "cursive"].join(),
    fontSize:'23px'
  }

}))



export default function Admin(props){

  const classes = useStyles();

  return(
    <div className={classes.Admin}>
      <div style={{display:'flex',height:'10vh'}}>
        <img src={Athar} style={{height:'80%',
        borderRadius:'50%',marginRight:'10px'}}/>
        <p className={classes.Athar}>{props.Name}</p>
      </div>
      <div style={{height:'38%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingRight:'1vh',
        boxSizing:'border-box',
        width:'60%'}}>
        <a title="linkedIn" style={{width:'50%'}}
        href="https://www.linkedin.com/in/athar-mohammad-34068a157/">
          <img src={Linkedin} alt="Linkedin" style={{height:'80%'}}/>
        </a>
        <a title="Github" style={{width:'50%'}}
        href="https://github.com/atharmohammad">
          <img src={Github} alt="Github" style={{height:'80%'}}/>
        </a>
        <a title="Codeforces" style={{width:'50%'}}
        href="https://codeforces.com/profile/KickAss">
          <img src={Codeforces} alt="Codeforces" style={{height:'80%'}}/>
        </a>
        <a title="My Portfolio" style={{width:'50%'}}
        href="https://atharmohammad.github.io/Portfolio/">
          <img src={AtharPortfolio} alt="My Portfolio"
          style={{height:'80%',borderRadius:'10px'}}/>
        </a>
      </div>
    </div>
  )
}
