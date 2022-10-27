import styled from "styled-components"


export const Background = styled.header`
width: 1290px;
height: 135px;
padding: 0px 10px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
background-color: #100e1d;
border-bottom: 1px solid rgba(255, 255, 255, 0.05);

img{
    max-width: 100%;
    width: 175px;
    height:34px;
    display: block;

}
ul {
    list-style: none;
    color:#fff;
    display: flex;
    
}
li{
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    margin-right: 15px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: 40px;
}

a{
    font-size: 40px;
    color: rgb(255, 255, 255);
    margin-left: 10px;
    padding: 0;
    display: flex;
   float: left;


}
`

export const Section = styled.section`
    width: 1290px;
    height: 355px;
    padding: 10px 0px;


`
export const Navigator= styled.ul`
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    list-style: none;
    display: flex;
   
    
    
   
    li{
        width: 118px;
        height: 35px;
        font-size:20px; 
        background-color: #353644;
        border: solid 1px #353644;
    }

`