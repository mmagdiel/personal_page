import styled from 'styled-components'
import { Box } from "rebass"
 
export const Tooltip = styled(Box)`
    visibility: ${props => props.visibility};

    &:before, &:after {
        position: absolute;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: hidden;
        opacity: 0;
        z-index: 1000000;
        pointer-events: none;
        -webkit-transition: 0.3s ease;
        -moz-transition: 0.3s ease;
        transition: 0.3s ease;
        -webkit-transition-delay: 0ms;
        -moz-transition-delay: 0ms;
        transition-delay: 0ms;
    }
    
    &:hover:before, &:hover:after {
        visibility: visible;
        opacity: 1; 
        -webkit-transition-delay: 100ms;
        -moz-transition-delay: 100ms;
        transition-delay: 100ms; 
    }
        
    &:before {
        content: '';
        position: absolute;
        background: transparent;
        border: 6px solid transparent;
        z-index: 1000001; 
    }
    
    &:after {
        background: #383838;
        color: white;
        padding: 8px 10px;
        font-size: 12px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 12px;
        white-space: nowrap; 
        white-space: normal;
        line-height: 1.4em;
        word-wrap: break-word;
        width: 150px;
    }
    
    &[aria-label]:after {
        content: attr(aria-label); 
    }
    
    &[data-hint]:after {
        content: attr(data-hint); 
    }
    
    [aria-label='']:before, [aria-label='']:after,
    [data-hint='']:before,
    [data-hint='']:after {
      display: none !important; 
    }
`