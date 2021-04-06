import React, { useEffect, useRef } from "react";
import AceEditor from "react-ace";
import axios from "axios";
import { connect } from "react-redux";
import { SET_LOADING, RESET_LOADING, SET_OUTPUT,SET_COMPILE_OFF } from "../store/Action/action";
import {languageMapper} from './Functions/index';

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-kotlin";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-clouds";

import "ace-builds/src-noconflict/ext-language_tools";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import Modal from './Modal/Modal'

//main
const Editor = (props) => {
  const editorRef = useRef();

    useEffect( async() => {

    if(props.tools.nowCompile === true && props.tools.isLoading === false){
        props.setOutPut('')
        props.setLoading()
        console.log("Compiling", editorRef.current.editor.getValue());
        const url = "/execute";

        const {language,versionIndex} = languageMapper(props.tools.language)

        const sendData = {
          clientId: "d4b7771b3992895017e5ac5f42ec46e6",
          clientSecret:
            "37f00b6e1c5f23675ff6bd195a0e6d6631b9f8384dd9c25d1a82a5d274256db3",
          script: editorRef.current.editor.getValue(),
          stdin: props.tools.input,
          language,
          versionIndex
        };

        let response;
        try {

          response = await axios({
            method: "post", //you can set what request you want to be
            url,
            mode: "no-cors",
            data: sendData,
            headers: {
              "Access-Control-Allow-Methods": "*",
              "Content-Type": "application/json",
            },
          });
          console.log("sucessfull", response.data);
        } catch (e) {
          console.log(e);
          props.setOutPut("404")
        }
        props.resetCompile();

        try{
           props.setOutPut(response.data.output)
           console.log(response.data.output)
        }catch(e){
          props.setOutPut("Oops something went wrong")
        }
        props.resetLoading();
      };

  },[props.tools.nowCompile]);

  return (
      <Grid style={{ minHeight: "71.8vh" ,borderRadius:'5px'}}>
      <AceEditor
          ref={editorRef}
          width='100%'
          height='71.8vh'
          mode={props.tools.language}
          theme={props.tools.theme}
          fontSize={props.tools.fontSize}
          enableLiveAutocompletion={true}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: false }}
        />
      {props.tools.isLoading === true?<Modal/> : null}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOutPut: (value) => dispatch({ type: SET_OUTPUT, value }),
    setLoading: () => dispatch({ type: SET_LOADING}),
    resetLoading: () => dispatch({ type: RESET_LOADING}),
    resetCompile: () => dispatch({ type: SET_COMPILE_OFF}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);