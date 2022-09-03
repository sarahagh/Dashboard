import styled from '@emotion/styled'

export const SLayout = styled.div`
 
 .side-bar{
    width: 240px;
    height: calc(100vh - 48px) ;
     position: fixed;
    top: 24px;
    left: 24px;
    border-radius :12px;
    background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
 }

 .main-content-wrapper{
    
    padding-left: 240px;
 }

 .main-content{
      padding: 24px;
 }


 
`
