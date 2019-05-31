import React, { Component } from "react";
import { render } from "react-dom";
import cheerio from "cheerio";
import renderHTML from "react-render-html";
import { Button, Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardColumns } from 'reactstrap';
class ScrapperData extends Component {
  state = {
    data: [],
    logos: []
  };

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = (e) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.work.ua/jobs-kyiv-html%2C+css%2C+js/?advs=1&anyword=1"
    )
      .then(response => response.text())
      .then(data => {
        const $ = cheerio.load(data);
        var log = $(".card.job-link");
        var arr = [];
        var arrM = [];
        log.each(function (i, elem) {
          arr.push(
            // $(this).find("h2"),
            $(this).find("h2 a").text(),
            $(this).find("b").text(),
            "https://www.work.ua" + $(this).find("h2 a").attr("href"),
            $(this).find("h2").siblings("p.overflow").text(),
            $(this).find("h2 span span").text(),
            "<br/>"
          )
          arrM.push(arr);
          arr = [];
        });
        console.log(arrM);

        this.setState({ logos: arrM });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };



  render() {
    const thisLogos = this.state.logos;
    return <CardColumns className="col-8">
      {thisLogos.map(function name(item, i) {
        return <Card style={{ border: "1px solid #f3a4b526", overflow: "hidden" }}>
          <CardBody className="text-right">
            <CardTitle><h4 className="mb-0 text-left title-up text-uppercase">{item[0]}</h4></CardTitle>
            <CardText className="text-left">{item[1]} <code> {item[4]}</code></CardText>
            <CardText><footer className="blockquote-footer  text-left">{item[3]}</footer></CardText>
            <Button className="btn-link" style={{ border: "1px solid #f3a4b526",color: "#f3a4b5"}} href={item[2]}><code>Open</code></Button>
          </CardBody>
        </Card>
      })}
    </CardColumns>;
  }
} export default ScrapperData;

// render(<App />, document.getElementById("ScrapperData"));
