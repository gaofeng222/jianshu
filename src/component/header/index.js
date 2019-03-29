import React, { Component } from 'react';
import { connect } from "react-redux"
import { HeaderWrap,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrap} from  './style'
import { CSSTransition } from 'react-transition-group';

//class Header extends Component {
    // constructor(props){
    //    super(props);
    //    this.changeFocusHandle = this.changeFocusHandle.bind(this);
     //   this.changeBlurHandle = this.changeBlurHandle.bind(this);
    // }
    // render(){
    //     return (
    //         <HeaderWrap>
    //             <Logo />
    //             <Nav>
    //                 <NavItem className='left active'>首页</NavItem>
    //                 <NavItem className='left'>下载</NavItem>
    //                 <NavItem className='right'>登陆</NavItem>
    //                 <NavItem className='right'>Aa</NavItem>
    //
    //                     <SearchWrap>
    //                         <CSSTransition  in={this.props.show} timeout={800} classNames='slide'>
    //                             <NavSearch  className={`${this.props.show ? 'active' : ''}`} onFocus={this.props.changeFocusHandle} onBlur={this.props.changeBlurHandle} />
    //                         </CSSTransition>
    //                         <i className="iconfont" className={`${this.props.show ? 'active iconfont' : 'iconfont'}`}>&#xe645;</i>
    //                     </SearchWrap>
    //
    //             </Nav>
    //             <Addition>
    //                 <Button href='http://www.baidu.com'>注册</Button>
    //                 <Button className='write'><i className="iconfont">&#xe60b;</i>写文章</Button>
    //             </Addition>
    //         </HeaderWrap>
    //     )
    // }
    // changeFocusHandle(){
    //     this.setState(() => {
    //         return {
    //             show : true
    //         }
    //     })
    // }
    // changeBlurHandle(){
    //     this.setState(() => {
    //         return {
    //             show : false
    //         }
    //     })
    // }
//}


const Header = (props) => {
        return (  //无状态组件
            <HeaderWrap>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>

                    <SearchWrap>
                        <CSSTransition  in={props.show} timeout={800} classNames='slide'>
                            <NavSearch  className={`${props.show ? 'active' : ''}`} onFocus={props.changeFocusHandle} onBlur={props.changeBlurHandle} />
                        </CSSTransition>
                        <i className="iconfont" className={`${props.show ? 'active iconfont' : 'iconfont'}`}>&#xe645;</i>
                    </SearchWrap>

                </Nav>
                <Addition>
                    <Button href='http://www.baidu.com'>注册</Button>
                    <Button className='write'><i className="iconfont">&#xe60b;</i>写文章</Button>
                </Addition>
            </HeaderWrap>
        )
}


const mapStateToProps = (state) => {
    return {
        show : state.show
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFocusHandle() {
            const action = {
                type : 'search_show'
            };
            dispatch(action)
        },
        changeBlurHandle(){
            const action = {
                type : 'search_hide'
            }
            dispatch(action)
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
