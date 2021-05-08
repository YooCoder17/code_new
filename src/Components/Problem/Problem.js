import React, { useState, useEffect, useRef } from "react";
import "./Problem.css";
import Spinner from "../Spinner/BlogSpinner";

import {
  Grid,
} from "@material-ui/core";

export default function App(props) {
  const socket = props.socket;
  const [link, setLink] = useState(null);
  const [loader, setLoader] = useState(false);
  const ProblemRef = useRef();

  useEffect(() => {
    socket.on("problem", (problem) => {
      ProblemRef.current.innerHTML = problem;
      setLoader(false);
      console.log(problem);
    });
  }, []);

  const changeHandler = (e) => {
    setLink(e.target.value);
  };

  const problemFetchHandler = () => {
    setLoader(true);
    socket.emit("codeforces-problem", link);
    setLink("");
    ProblemRef.current.innerHTML = "";
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "6vh",
            fontSize: "20px",
            padding: "0 0 0 2vh",
            textAlign: "center",
            background: "#3F51B5",
            boxSizing: "border-box",
          }}
        >
          <p style={{ fontSize: "18px", color: "#fff", margin: "1vh 0 0 0" }}>
            Problems
          </p>
        </div>
        <Grid
          style={{
            height: "74vh",
            maxWidth: "120vh",
            display: "flex",
            flexFlow: "column",
            padding: "1vh",
            border: "2px solid black",
            margin: "1.5vh",
            borderRadius: "10px",
            backgroundColor: "#313332",
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
          }}
        >
          <Grid
            ref={ProblemRef}
            style={{
              overflowY: "auto",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          ></Grid>
          <Grid
            style={{
              display: "flex",
              minHeight: "8vh",
              margin: "1vh 0 0 0",
              flexDirection: "row",
              maxWidth: "110vh",
              boxSizing: "border-box",
            }}
          >
            <input
              placeholder="Problem Link"
              className="place"
              onChange={changeHandler}
              value={link}
            />
            <div
              style={{
                minHeight: "4vh",
                background: "#872e2e",
                color: "#fff",
                width: "35px",
                borderRadius: "5px",
                margin: "2.5vh 0 0 1vh",
                padding: "1vh 1vh 0 1vh",
                cursor: "pointer",
                textAlign: "center",
                
              }}
              onClick={problemFetchHandler}
            >
              Fetch
            </div>
          </Grid>
          {loader ? <Spinner /> : null}
        </Grid>
      </div>
    </>
  );
}
