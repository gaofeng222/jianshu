import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrap = styled.div`
    height : 56px;
    border-bottom:1px solid #ccc;
`


export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
   width:960px;
   height:100%;
   margin:0 auto;
   padding-right: 70px;
`;
export const NavItem = styled.div`
   line-height:56px;
   color:#333;
   padding:0 15px;
   font-size:17px;
   &.left{
   float : left;
   }
   &.right{
   float:right;
   color:#969696;
   }
   &.active{
    color:#ea6f5a;
   }
   
`;
export const SearchWrap = styled.div`
    position:relative;
    float: left;
    .iconfont{
        position:absolute;
        top:20px;
        right:10px;
        &.active{
            background: #131313;
            width: 25px;
            height: 25px;
            text-align: center;
            background-position: center;
            display: inline-block;
            line-height: 25px;
            color: #fff;
            border-radius: 50%;
            top:16px;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    &.slide-enter{
        transition: all .2s ease-out;
       
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition: all .2s ease-out; 
    }
    &.slide-exit-active{
        width:160px;
    }
    width:180px;
    height:38px;
    border:none;
    outline:none;
    margin-left:15px;
    color:#bbb;
    padding:0 20px;
    margin-top:9px;
    border-radius:19px;
    background:#eee;
    box-sizing:border-box;
    font-size:14px;
    &::placeholder{
        color:#ccc;
    }
    &.active{
        width:240px;
    }
`;
export const Addition = styled.div`
    position : absolute;
    right:10px;
    top:9px;
`
export const Button = styled.a`
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin: 0 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    outline:none;
    color: #ea6f5a;
    display:inline-block;
    text-align:center;
    &:hover{
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236,97,73,.05);
    }
    &.write{
        width: 100px;
        height: 38px;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
`
