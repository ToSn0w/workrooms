import styled from "styled-components";

export const ArrowMain = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  margin: 0 1rem;

  span {
   position:absolute;
    height:.1rem
    background-color:#efefef
    transition: transform .2s ease
    
    &:nth-child(1)    
    &:nth-child(2)    
    &:nth-child(4)    
    &:nth-child(5)    
      width .625rem
      top .625rem
    
    &:nth-child(1)    
      right 0 
      transform-origin bottom right 
      
    &:nth-child(2)    
      right 0
      transform-origin top right 
    
    &:nth-child(3)    
      width 1.25rem
      top .625rem
      
    &:nth-child(4)    
      left 0
      transform-origin bottom left
      
    &:nth-child(5)    
      left 0
      transform-origin top left}
`;
