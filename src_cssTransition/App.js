import React, {Component,Fragment} from 'react';
import './index.css'


import { CSSTransition } from 'react-transition-group';

class App extends  Component {
    constructor(props){
        super(props);
        this.state = {
            show : true
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    render(){
        return (
           <Fragment>
               <CSSTransition in={this.state.show} timeout={2000} classNames="fade" appear={true} unmountOnExit onEntered={(el) => {el.style.color='red'}}>
                 <div>Hello world</div>
               </CSSTransition>
               <button onClick={this.handleToggle}>Toggle</button>
           </Fragment>
        )
    }
    handleToggle(){
        this.setState({
            show : !this.state.show
        })
    }
}


export default App;
