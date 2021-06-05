import { useEffect, useState } from "react";
import { Grid, Tooltip, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ProfileFeild from "./ProfileFeild";
import Amongus1 from "../../Assets/images/amongus1.png";
import HomePageImg from "../../Assets/images/HomePageImg.png";

import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import CodeforcesIcon from "../../Assets/images/Codeforces.png";
import LinkedInIcon from "../../Assets/images/Linkedin.png";
import GithubIcon from "../../Assets/images/Github.png";
import CodechefIcon from "../../Assets/images/codechef.png";
import AtcoderIcon from "../../Assets/images/atcoder.png";
import Stars from "../Stars/Stars";
import Nav from "../Nav/Nav";
import Back from "../Back/Back";

const Profile = (props) => {
  const history = useHistory();
  const backHandler = () => {
    history.push("/homepage");
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse, #1b2735 0%, #090a0f 100%)",
        paddingBottom: "50px",
        paddingTop:'20px',
        boxSizing:'border-box',
      }}
    >
      <Stars />
      <div style={{position:'absolute',}}>
      <Back clicked={backHandler} />
      </div>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "30px",
          boxSizing: "border-box",
        }}
      >
        <img src={HomePageImg} style={{ height: "70px" }} alt="code-n-collab" />
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "35px",
          padding: "30px",
          boxSizing: "border-box",
          fontSize: "25px",
          border: "10px double grey",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px 40px 5px 40px",
            background: "#fff",
            boxSizing: "border-box",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid grey",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={Amongus1}
                alt="avatar"
                style={{ height: "80px", width: "80px", borderRadius: "10px" }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  margin: "10px",
                  fontFamily: ["edgwick Ave Display", "cursive"].join(),
                }}
              >
                <div>Adnan Shamsi</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Tooltip
                title="update profile"
                onClick={() => history.push("/updateUser")}
              >
                <IconButton>
                  <EditIcon style={{ cursor: "pointer" }} />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="share"
                onClick={() => {
                  navigator.clipboard.writeText("dsfsd");
                  return alert("copied to clipboard");
                }}
              >
                <IconButton>
                  <ShareIcon style={{ cursor: "pointer" }} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div
            style={{
              width: "90%",
              margin: "auto",
            }}
          >
            <ProfileFeild title="Designation" value="Web Developer" />
            <ProfileFeild title="Country" value="India" />
            <ProfileFeild title="Institution" value="Jamia Millia Islamia" />
            <ProfileFeild
              title="Motto"
              value="To complete code-n-collab work"
            />
            <ProfileFeild title="CodeForces Handle" value="AdnanShamsi" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <a
              title="Codeforces"
              style={{
                display: "inline-block",
                margin: "10px",
                boxSizing: "border-box",
              }}
              href={""}
              target="_blank"
            >
              <img
                src={CodeforcesIcon}
                alt="Codeforces"
                style={{
                  height: "50px",
                  marginTop: "10px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              />
            </a>
            <a
              title="Codechef"
              style={{
                display: "inline-block",
                margin: "10px",
                boxSizing: "border-box",
              }}
              href={""}
              target="_blank"
            >
              <img
                src={CodechefIcon}
                alt="Codechef"
                style={{
                  height: "50px",
                  marginTop: "10px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              />
            </a>
            <a
              title="Atcoder"
              style={{
                display: "inline-block",
                margin: "10px",
                boxSizing: "border-box",
              }}
              href={""}
              target="_blank"
            >
              <img
                src={AtcoderIcon}
                alt="Atcoder"
                style={{
                  height: "50px",
                  marginTop: "10px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              />
            </a>
            <a
              title="linkedIn"
              style={{
                display: "inline-block",
                margin: "10px",
                boxSizing: "border-box",
              }}
              target="_blank"
              href={null}
            >
              <img
                src={LinkedInIcon}
                alt="Linkedin"
                style={{
                  height: "50px",
                  marginTop: "10px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              />
            </a>
            <a
              title="Github"
              style={{
                display: "inline-block",
                margin: "10px",
                boxSizing: "border-box",
              }}
              href={null}
              target="_blank"
            >
              <img
                src={GithubIcon}
                alt="Github"
                style={{
                  height: "50px",
                  marginTop: "10px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
