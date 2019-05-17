import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

class QuizInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { quiz, onBack, onPress, logout } = this.props;
    return (
      <div className="wrapper">

        <div className="main-panel" style={{borderTop:"1px solid #f3a4b5"}}>
        <Header logout={logout} />
      
        {/* <h1>{quiz.name}</h1> */}
        <div>

          {quiz.subQuiz.map((subQuiz, index) => {
            return (

          <Card className="text-right" style={{border: "1px solid #f3a4b526",minWidth:"256px",maxWidth: "16rem",display:'inline-block',margin:"0 0.54%", overflow:"hidden", verticalAlign:"top"}}>
              <CardImg top src={quiz.image} title={subQuiz.name} component="img" style={{ objectFit: 'cover' ,borderRadius:"0"}} height="160" alt="..."/>
              {subQuiz.score ?
              <>
                <CardHeader><h4 className="mb-0 text-left title-up text-uppercase">{subQuiz.name}</h4></CardHeader>
                <CardBody className="text-right">
                    <CardTitle><p className="mb-0 text-left text-muted">You have attempted this Quiz.</p></CardTitle>
                    <CardText className="text-left">
                    <footer className="blockquote-footer  text-left">
                    Percentage: <code>{subQuiz.score}%</code>
                         <br />
                         Attempted Date: <code>{subQuiz.attemptDate}</code> 
                         <br />
                         Attempted Time: <code>{subQuiz.attemptTime}</code></footer>
                  </CardText>
                  <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={onBack}><code>Back</code></Button>
            {!subQuiz.score ? <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={() => onPress(index)}><code>Start</code></Button> : null}
                </CardBody>
                </>
              :
              <>
                <CardHeader><h4 className="mb-0 text-left title-up text-uppercase">{subQuiz.name}</h4></CardHeader>
                  <CardBody className="text-right">
                    <CardTitle><p className="mb-0 text-left text-muted">This Quiz is based on the following criteria:</p></CardTitle>
                      <CardText className="text-left">
                    <footer className="blockquote-footer  text-left">

                      Total Questions: <code>{subQuiz.questions}</code>
                       <br />
                       Total Time: <code>{subQuiz.time}</code>
                       <br />
                       Passing Score: <code>60 %</code>
                       </footer>
                    </CardText>
                    <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={onBack}><code>Back</code></Button>
              {!subQuiz.score ? <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={() => onPress(index)}><code>Start</code></Button> : null}
                  </CardBody>
                  </>
                }
             
          </Card>

            )
          })}
        </div>
      </div>
      </div>
    )
  }

}

export default QuizInfo;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
