import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
   shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false;
        }
   }
    render(){
        const {content} = this.props;
        return (
            <Fragment>
                 <li onClick={this.handleClick}>{content}</li>
            </Fragment>
        )
    }
    handleClick(){
        const {handleDelete,index} = this.props;
        handleDelete(index);
    }
}
TodoItem.propTypes = {
    test : PropTypes.string.isRequired,
    content : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    handleDelete : PropTypes.func,
    index : PropTypes.number
}
TodoItem.defaultProps ={
    test : 'Hello wolrd'
}


export default  TodoItem;
