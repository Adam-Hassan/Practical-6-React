import React from 'react';
import styled from 'styled-components'

const PanelStyles= `
    background-color: #f6f6f6;
`

const Panel = (props) =>{
    return ( 
    <PanelStyles>
        {props.children}
    </PanelStyles>
     )
}

export default Panel;