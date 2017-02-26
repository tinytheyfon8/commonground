import React from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import Counter from './Counter'
import CommentAnalytics from './CommentAnalytics'
import { Button, FormControl, HelpBlock, FormGroup, ControlLabel, Grid, Row, Col, Media } from 'react-bootstrap';


class Comment extends React.Component{
  render(){

    var dummyComment = {
      pic: "http://eventraveler.com/images/avatar.png", //Issues with facebook pic url
      facebook: "https://scontent.xx.fbcdn.net/v/t1.0-1/c32.7.160.160/p200x200/10422293_10202393513548914_4261672171306231457_n.jpg?oh=563a76424ee558968112b2fca4391aea&oe=594454DB",
      name: "Greg Bacus",
      input: "Hello, my name is Greg and I am posting the greatest comment of all time. This comment should be upvoted into the stratosphere. Thanks for your support.",
      createdAt: new Date(),
      delta: -102
    }

    var upStyle = {
      fontSize: '25px',
      color: 'green',
      float: 'right'
    }

    var downStyle = {
      fontSize: '25px',
      color: 'red',
      float: 'right'
    }

    var flagStyle = {
      fontSize: '20px',
      color: 'red',
      float: 'left',
      align: 'left'
    }

    var timeStyle = {
      float: 'right',
      fontSize: '14px'
    }

    var deltaStyle;

    if(dummyComment.delta > 0) {
      deltaStyle = {float: 'right', color:'green', fontSize: '16px'}
    } else {
      deltaStyle = {float: 'right', color:'red', fontSize: '16px'}
    }


    console.log('inputStr', this.props)
    console.log('user HERE', this.props.user)

    var currentComment;

    this.props.comments.forEach((comment) => {
      if (comment.id === this.props.commentId) {
        currentComment = comment;
      }
    })
    console.log("current comment", currentComment)

    return (

    <div>

      <li>
      <h4>{this.props.inputStr}</h4>
      <Counter commentId={this.props.commentId}/>
      <CommentAnalytics commentId={this.props.commentId}/>
      </li>

      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPush={6}>
            <div className='well'>
              <Media>
                <Media.Left align="top">
                  <img width={64} height={64} src={dummyComment.facebook} alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{this.props.user.fullname}<span style={deltaStyle} >{dummyComment.delta}</span></Media.Heading>
                  <p>{this.props.inputStr}</p>
                  <p style={timeStyle}> - <em>{dummyComment.createdAt.toDateString() + ' at ' + dummyComment.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</em></p>
                </Media.Body>
                <Media>
                  <span className="glyphicon glyphicon-menu-up" aria-hidden="true" style={upStyle}></span>
                  <span className="glyphicon glyphicon-menu-down" aria-hidden="true" style={downStyle}></span>
                  <span className="glyphicon glyphicon-flag" aria-hidden="true" style={flagStyle}></span>
                </Media>
              </Media>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>



    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profileReducer,
    comments: state.commentGet.comments
  }
}

export default connect(mapStateToProps)(Comment);