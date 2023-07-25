import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { styled } from 'styled-components';




const Tool=styled.div`
  
    width:100%;
    height:100%;
    text-align:center;
`
const Cal =styled.div`

width:20%;
height:50%;
margin-left:40%;
margin-top:10%;
position:absolute;
border-style:inset;
box-shadow:2px 2px 8px 1px lightskyblue ;

background-color:lightgray;
`
const Dis= styled.div`
width:80%;
height:10%;
border-style:inset;
position:relative;
margin-left:10%;
background-color:lightcyan;
`
const Bt=styled(Table)`
    
    width:100%;
    height:80%;
    
    

 td{
    /* padding:50%; */
  
    width:10%;
    height:5%;
 }

   Button{
    border-style:none;

       width:100%;
       height:90%;
       &:hover{
        background-color:skyblue;
       }
       
    }
    
`
const Ent= styled(Button)`
border-style:none;
padding-left:10%;
padding-right:10%;
padding-top:5%;
&:hover{
        background-color:skyblue;
       }
       
    
`




export const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('0');

    const handleButtonClick = (value: string) => {
        setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
      };
      const handleCalculate = () => {
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput('Error');
        }
      };
    

      const handleClear = () => {
        setInput('0');
      };
  return (
    <Tool>
        <Cal>
         <Dis>{input}
         </Dis>
         <Bt>
            <tbody>
                <tr>
                    
                    <td><Button  onClick={() => handleButtonClick('1')}>1</Button></td>
                    <td><Button  onClick={() => handleButtonClick('2')}>2</Button></td>
                    <td><Button  onClick={() => handleButtonClick('3')}>3</Button> </td>
                    
                    
                   
                    </tr>
                    <tr>
                    <td><Button  onClick={() => handleButtonClick('4')}>4</Button></td>
                    <td><Button  onClick={() => handleButtonClick('5')}>5</Button></td>
                    <td><Button  onClick={() => handleButtonClick('6')}>6</Button> </td>
                    
                  
                    </tr>
                    <tr>
                    <td><Button  onClick={() => handleButtonClick('7')}>7</Button></td>
                    <td><Button  onClick={() => handleButtonClick('8')}>8</Button></td>
                    <td><Button  onClick={() => handleButtonClick('9')}>9</Button> </td>
                    
                   </tr>
                   
                   <tr>
                   <td><Button onClick={handleClear} >c</Button> </td>
                   <td><Button  onClick={() => handleButtonClick('.')}>.</Button> </td>
                   <td><Button  onClick={() => handleButtonClick('+')}>+</Button> </td>
                   </tr>
                   <tr>
                   <td><Button  onClick={() => handleButtonClick('-')}>-</Button> </td>
                   <td><Button  onClick={() => handleButtonClick('/')}>/</Button> </td>
                    <td><Button  onClick={() => handleButtonClick('*')}>*</Button> </td>
                   </tr>
                   
            </tbody>
            
         </ Bt>
         <Ent onClick={handleCalculate}>Enter</Ent>
         </Cal>


    </Tool>
  )
}
