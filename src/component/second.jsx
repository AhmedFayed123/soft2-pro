import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../convex/_generated/api'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';




const Second =()=>{
const [first,setFirst] = useState(true);
const [second,setSecond] = useState(true);
const [third,setThird] = useState(true);
const [fourth,setFourth] = useState(true);


const [title1,setTitle1] = useState('');
const [title2,setTitle2] = useState('');
const [title3,setTitle3] = useState('');
const [title4,setTitle4] = useState('');



const addItem =(data)=>{

  if(data=='first'){
    if(first==true){
    console.log(data)

    setTitle1('Adult Cut,30 minutes ,Looking for a quick haircut This is the one for you ,300$')

    }
    setFirst(!first)
  }
  if(data=='second'){
    if(second==true){
      console.log(data)
      setTitle2('Cut & Shampoo ,1 hours ,This cut includes a shampoo service with some of our favorite professional products ,400$ ');


    }
    setSecond(!second)
  }
  if(data=='third'){
    if(third==true){
      console.log(data)
      
      setTitle3('Permanent ,30 minutes ,(for gray coverage or going lighter or darker): Receive a professional hair color service performed by one of our experts to cover gray or to lighten or darken your natural hair color ,129$');

    }
    setThird(!third)
  }
  if(data=='fourth'){
    if(fourth==true){
      console.log(data)
      setTitle4('Semi ,1 hours ,Looking for a new color, but not ready for a total commitment? Ask your stylist if semi-permanent is right for you. ,400$ ');


    }
    setFourth(!fourth)
  }

}
  const saveData = useMutation(api.services.saveData)
  
  const save=()=>{
    saveData({title1,title2,title3,title4});
};
    
    return (
        <div>
    <        h1>Services</h1>
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>HairCuts</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                <h5>Adult Cut</h5>
                <ul>
                <li>30 minutes   .</li>  
                <li>Looking for a quick haircut? This is the one for you.</li>  
                    </ul>
                    300$ <Checkbox onChange={()=>addItem('first')} value={first} />

                <h5>Cut & Shampoo</h5>
                <ul>
                <li>1 hours   .</li>  
                <li>This cut includes a shampoo service with some of our favorite professional products</li>  
                    </ul>
                    400$ <Checkbox  onChange={()=>addItem('second')} value={second}/>

                </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography>All-Over Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                <h5>Permanent</h5>
                <ul>
                <li>30 minutes   .</li>  
                <li>(for gray coverage or going lighter or darker): Receive a professional hair color service performed by one of our experts to cover gray or to lighten or darken your natural hair color.</li>  
                    </ul>
                    129$ <Checkbox  onChange={()=>addItem('third')} value={third} />

                <h5>Semi</h5>
                <ul>
                <li>1 hours   .</li>  
                <li>Looking for a new color, but not ready for a total commitment? Ask your stylist if semi-permanent is right for you.</li>  
                    </ul>
                    400$ <Checkbox  onChange={()=>addItem('fourth')} value={fourth} />
                </Typography>
            </AccordionDetails>
            </Accordion>
            <br /><br /><br />
            <div id='b'>
                <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={save}>save</Button>
                </Stack>
                </div><br /><br />
                <span>Click on Second-Step to Contnue &uarr;</span>

        </div>
    );
};

export default Second;