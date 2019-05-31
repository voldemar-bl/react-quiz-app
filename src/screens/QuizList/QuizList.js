import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class QuizList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list, onPress, logout } = this.props;
    return (
      <div className="wrapper">
        <div className="main-panel" style={{borderTop:"1px solid #f3a4b5"}}>
        <Header logout={logout} />
          <div>
          {list.map((quiz, index) => {

            return ( 

            <Card style={{border: "1px solid #f3a4b526",maxWidth: "16rem",display:'inline-block',margin:"0 0.54%", overflow:"hidden"}}>
                <CardImg top src={quiz.image} title={quiz.name} component="img" style={{ objectFit: 'cover' ,borderRadius:"0"}} height="160" alt="..."/>

                <CardBody className="text-right">
                <CardTitle><h4 className="mb-0 text-left title-up text-uppercase">{quiz.name}</h4></CardTitle>

                    <CardText><footer className="blockquote-footer  text-left">{quiz.description}</footer></CardText>
                    <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={() => onPress(index)}><code>Join</code></Button>
                </CardBody>
            </Card>

            )

          }
          )}
          </div>
         
        </div>

        </div>


    )
  }

}

export default QuizList;   
