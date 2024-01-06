import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { api } from '../../convex/_generated/api';
import { useMutation } from 'convex/react';


const First =()=>{


  const [name,setName] = React.useState('');
  const [age,setAge] = React.useState(0);
  const [governorate,setGovernorate] = React.useState('');
  

  const x = useMutation(api.user.saveData)
  const save =()=>{
    x({name,age,governorate});
  
  }

  const getName = (event)=>{
    setName(event.target.value)
  }
  const getAge = (event)=>{
    setAge(+event.target.value)
  }
  const getGovernorate = (event)=>{
    setGovernorate(event.target.value)
  }
    return (
     <div>
         <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

            <div> 
           
            <TextField
                label="Name"
                onChange={getName}
                        />  <TextField
                        id="outlined-number"
                        label="Age"
                        type="number"
                        onChange={getAge}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      /> <TextField
                                label="Governorate"
                                onChange={getGovernorate}
                                        /> 
              
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={save}>Save</Button>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;

        <span>Click on Second-Step to Contnue &uarr;</span>

            </div>
            
        </Box>

      </div>
    );
};
export default First;