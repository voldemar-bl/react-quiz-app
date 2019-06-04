import React, { Component } from 'react';
import Header from '../../components/Header/Header'
// import lightBlue from '@material-ui/core/colors/lightBlue';
import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
// import Button from '@material-ui/core/Button';
import NavigateNext from '@material-ui/icons/NavigateNext';

import SentimentSatisfied from '@material-ui/icons/SentimentSatisfiedRounded';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfiedRounded';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfiedRounded';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import AnimatedProgressProvider from './AnimProg';
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import CircularProgress from '@material-ui/core/CircularProgress';
import ScrapperData from '../../components/ScrapperData';

import Typography from '@material-ui/core/Typography';

class QuizList extends Component {
  constructor() {
    super()

    this.state = {

      radioVal: null,

      sec: 0,
      min: 3,

      correct: 0,
      scored: false,

      similey: null,

    }
    this.handleChange = this.handleChange.bind(this);
    this.updating = this.updating.bind(this);
    this.quizTimer = this.quizTimer.bind(this);
    this.timer()
  }


  handleChange(e) {
    this.setState({
      radioVal: e.target.value,
    });

  }

  async updating() {

    const { started, qstnNo, onPress } = this.props;
    const { correct, radioVal } = this.state;
    var radio = document.querySelector("input[type='radio']:checked");
    if (radioVal == null) {
      alert('Selection Required');
    }

    else {
      if ((qstnNo === started.qArr.length - 1) && (started.qArr[qstnNo].answer.match(radioVal))) {

        await this.setState({
          correct: correct + 1,
          min: 0,
          sec: 0
        })

      }
      else
        if ((qstnNo === started.qArr.length - 1) && !(started.qArr[qstnNo].answer.match(radioVal))) {

          await this.setState({
            min: 0,
            sec: 0
          })

        }
        else
          if (!(qstnNo === started.qArr.length - 1) && (started.qArr[qstnNo].answer.match(radioVal))) {

            await this.setState({
              correct: correct + 1,
              radioVal: null,
            })
            radio.checked = false;
            onPress(qstnNo);
          }
          else {
            await this.setState({
              radioVal: null,
            })
            radio.checked = false;            
            onPress(qstnNo);
          }
    }
  }

  async scoreCal() {
    const { started } = this.props;
    const { correct } = this.state;

    await this.setState({
      scored: ((correct) * (100 / started.qArr.length)).toFixed(2),
      date: new Date(),
    })

    this.saveScore();
    // localStorage.setItem("score", JSON.stringify(this.state.score))
  }

  saveScore() {
    const { started } = this.props;
    const { scored, date } = this.state;

    started.score = scored;
    started.attemptDate = date.toLocaleDateString();
    started.attemptTime = date.toLocaleTimeString();

    if (scored == 100) {
      this.setState({
        similey: <SentimentVerySatisfied className="similey" color="disabled" />
      })
    }
    else
      if (scored == 0) {
        this.setState({
          similey: <SentimentVeryDissatisfied className="similey" color="disabled" />
        })
      }
      else
        if (scored >= 60) {
          this.setState({
            similey: <SentimentSatisfied className="similey" color="disabled" />
          })
        }
        else
          if (scored < 60 && scored > 0) {
            this.setState({
              similey: <SentimentDissatisfied className="similey" color="disabled" />
            })
          }

  }

  quizTimer() {
    const { sec, min } = this.state;

    if ((sec === 0) && (min === 0)) {

      clearInterval(this.time);

      this.scoreCal();

    }

    else
      if ((sec <= 0) && !(min === 0)) {

        this.setState({
          sec: 59,
          min: min - 1,
        })
      }

      else {
        this.setState({
          sec: sec - 1,
        })
      }

  }

  timer() {
    this.time = setInterval(this.quizTimer, 1000);
  }

  render() {
    const { started, qstnNo, back, quizName, subQuizName, logout } = this.props;
    const { correct, scored, min, sec } = this.state;
    return (
           <div className="wrapper">
<div className="main-panel" style={{borderTop:"1px solid #f3a4b5"}}>
        <Header logout={logout} />

        {scored !== false ?
<>
          
<Card style={{border: "1px solid #f3a4b526",maxWidth: "20rem",display:'inline-block',margin:"0 0.54%", overflow:"hidden"}}>
        <CardBody className="text-right">
        <CardText><footer className="blockquote-footer text-left">{quizName}({subQuizName})</footer></CardText>
        <div className="text-center" style={{width:"65%", margin:"0 auto"}}>
        <AnimatedProgressProvider
        valueStart={0}
        valueEnd={scored}
        duration={1}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              strokeWidth={2}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ textColor: "rgba(243, 164, 181, 0.15)",
              pathColor: "rgba(243, 164, 181, 0.55)",
              trailColor: "rgba(243, 164, 181, 0.15)",
              textSize: "14px"}
              )}
            />
          );
        }}
      </AnimatedProgressProvider>
      </div>
        <CardTitle>
        <p className="text-left text-muted"> Total Questions: {started.qArr.length} <br/>  Correct: {correct}</p></CardTitle>
        
          <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={() => back()}><code>Back</code></Button>
        </CardBody>
         
      </Card>
            
      <hr/>
        <ScrapperData workData={quizName} />
      
  </>
          :
        <>
        <Card style={{border: "1px solid #f3a4b526",maxWidth: "20rem",display:'inline-block',margin:"0 0.54%", overflow:"hidden"}}>
        <CardBody className="text-right">
        <CardText><footer className="blockquote-footer text-left">{quizName}({subQuizName}) <code className="float-right">{min}:{sec}</code></footer></CardText>
        <CardTitle><h4 className="mb-0 text-left title-up">{qstnNo + 1+ " . "+started.qArr[qstnNo].question}</h4></CardTitle>
          <FormGroup className="text-left" value={this.state.radioVal}
                   onChange={this.handleChange}>
          <FormGroup check  className="form-check-radio">
            <Label className="form-check-label">
                <Input type="radio" name="exampleRadios1" id="exampleRadios11" value="1" />
                {started.qArr[qstnNo].option1}
                <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check  className="form-check-radio">
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios1" id="exampleRadios12" value="2" />
              {started.qArr[qstnNo].option2}
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check  className="form-check-radio ">
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios1" id="exampleRadios13" value="3"  />
              {started.qArr[qstnNo].option3}
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check  className="form-check-radio ">
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios1" id="exampleRadios14" value="4"  />
              {started.qArr[qstnNo].option4}
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          </FormGroup>
          <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={() => back()}><code>Back</code></Button>
             <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={this.updating.bind(this)}><code>Next</code></Button>
        </CardBody>
         
      </Card>
    </>
          

        }
</div>
      </div>
    )
  }

}

export default QuizList;

