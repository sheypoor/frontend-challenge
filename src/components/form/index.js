import React, { Component } from 'react';
import { createUser } from '../sdk';
import  './styles.css';

class MainForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        name:  '',
        age: '',
        email: '', 
        newsletter:''
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { name, age, email, newsletter } = this.state
      createUser(this.state);
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 1 ? 2 : currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for buttons
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <2){
      return (
        <button 
          className="btn-primary" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <p>Step {this.state.currentStep} </p> 
  
        <form className="container" onSubmit={this.handleSubmit}>
        
          <FirstStep 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            name={this.state.name}
          />
          <SecondStep 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            age={this.state.age}
            newsletter={this.state.newsletter}
          />
         
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </React.Fragment>
      );
    }
  }
  
  function FirstStep(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-section">
        <label className="myLable" htmlFor="name">name</label>
        <input
        className="myInput"
          id="name"
          name="name"
          type="name"
          placeholder="Enter name"
          value={props.name}
          onChange={props.handleChange}
          />
          <label className="myLable" htmlFor="age">age</label>
        <input
        className="myInput"
          id="age"
          name="age"
          type="text"
          placeholder="Enter age"
          value={props.age}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function SecondStep(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-section">
        <label className="myLable" htmlFor="email">email</label>
        <input
        className="myInput"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> 
          <label className="myLable" htmlFor="newsletter">newsletter</label>
          <input
          className="myInput"
            id="newsletter"
            name="newsletter"
            type="text"
            placeholder="newsletter"
            value={props.newsletter}
            onChange={props.handleChange}
            />
             <button className="btn-signup">Sign up</button>
      </div>
    );
  }
  
 
  

export default MainForm;
