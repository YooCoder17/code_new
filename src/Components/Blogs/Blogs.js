import { useState, useEffect } from "react";
import { Grid, Box, Button, Typography, Avatar } from "@material-ui/core";
import axios from "../../Axios/axios";
import BlogBar from "./BlogBar";
import BlogSpinner from "../Spinner/BlogSpinner";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";

function Blogs(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("blogs/Allblogs")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.blogPosted]);
  let allBlogs = <BlogSpinner />;

  if (blogs.length >= 1) {
    allBlogs = blogs.map((item) => {
      return (
        <Grid
          key={item._id}
          style={{
            border: "2px solid #e2e2e2",
            padding: "1vh",
            minHeight: "16vh",
            width: "80vh",
            marginTop: "3vh",
            backgroundColor: "#fff",
            borderRadius: "20px",
          }}
        >
          <Grid container direction="row">
            <Avatar style={{ margin: "1vh 0 0 0" }}>A</Avatar>
            <Grid style={{ margin: "1vh 0 0 3vh" }}>
              <Typography>User</Typography>
              <Typography style={{ fontStyle: "italic", fontSize: "14px" }}>
                Software Engineer
              </Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "1vh" }}>
            <Typography>
              <ReactMarkdown>{item.Body}</ReactMarkdown>
            </Typography>
          </Grid>
          <BlogBar _id={item._id} />
        </Grid>
      );
    });
  }
  return <div>{allBlogs}</div>;
}

const mapStateToProps = (state) => {
  return {
    blogPosted: state.tools.blogPosted,
  };
};

export default connect(mapStateToProps, null)(Blogs);
