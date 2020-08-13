import React, { Component } from "react";
import Axios from "axios";
import NewsHead from "./NewsHead";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // title: [],
      // desc: []
      res: []
    };
  }

  componentDidMount() {
    Axios.get(
      " http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df94152aaf0645c1920cc60c4e921f5c"
    )
      .then((response) => {
        const result = response.data.articles;
        this.setState({ res: result });
        // console.log(response.data.articles);
        // console.log(result);
        // result.forEach((element) => {
        //   //   console.log(element.title);
        //   //   console.log(element.description);
        //   this.setState({ title: element.title });
        //   this.setState({ desc: element.description });
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // const { title, desc } = this.state;
    const { res } = this.state;
    // console.log(title);
    // console.log(desc);
    // console.log(res);

    return (
      <div className="container">
        <h1>welcome to news app</h1>

        {
          res.length ? res.map((element, index) => <NewsHead key={index} index={index} title={element.title} desc={element.description} url={element.url} />) : null
        }
      </div>
    );
  }
}

export default News;
