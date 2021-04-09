import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { SET_INPUT } from "../../store/Action/action";

import { connect } from "react-redux";
import styles from "./IO.module.css";

import {
  Typography,
  CssBaseline,
  Box,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Io = (props) => {
  const classes = useStyles();

  const changeHandler = (event) => {
    props.setInput(event.target.value);
    // console.log(event.target.value)
  };

  return (
    <Grid
      style={{ display: "flex", minHeight: "28vh", backgroundColor: "#1f273d" }}
    >
      <Grid
        lg={6}
        style={{
          backgroundColor: "#272822",
          height: "27vh",
          zIndex: "100",
          border: "2px solid #fff",
          borderRadius: "5px",
        }}
      >
        <textarea
          placeholder="Input"
          onChange={changeHandler}
          rows="3"
          cols="56"
          style={{
            border: "none",
            resize: "none",
            overflowY: "scroll",
            fontSize: "15px",
            padding: "1vh",
            backgroundColor: "#272822",
            color: "#fff",
          }}
        />
      </Grid>

      <Grid
        lg={6}
        style={{
          backgroundColor: "#272822",
          height: "27vh",
          zIndex: "200",
          border: "2px solid #fff",
          borderRadius: "5px",
        }}
      >
        <textarea
          disabled
          value={props.output}
          placeholder="Output"
          rows="4"
          cols="56"
          style={{
            border: "none",
            resize: "none",
            overflowY: "scroll",
            fontSize: "15px",
            paddingLeft: "1vh",
            backgroundColor: "#272822",
            color: "#fff",
          }}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    output: state.tools.output,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInput: (value) => dispatch({ type: SET_INPUT, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Io);
