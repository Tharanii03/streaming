import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
export default function PaymentForm() {
  const handlenext=()=>{
    alert("Payment Done Successfully!")

  }
  return (
    <React.Fragment>
      <div style={{backgroundColor:"pink",color:"black",marginLeft:"200px", marginRight:"200px",
    boxShadow:"80px",padding:"10px",marginTop:"50px",borderradius:"50%",
    

}}>
   <center>
      <Typography variant="h5" gutterBottom style={{marginTop:"80px"}}>
        <b>Payment method💳</b><hr></hr>
      </Typography>
     </center>
     <br></br><br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <center>
          <TextField
            required
            id="cardName"
            label="Name on card"
            
            autoComplete="cc-name"
            variant="standard" style={{marginLeft:"250px"}}
          /><br></br>
          </center>
        </Grid>
       <br></br>
        <Grid item xs={12} md={6}>
          <center>
          <TextField
            required
            id="cardNumber"
            label="Card number"
       
            autoComplete="cc-number"
            variant="standard" style={{marginRight:"250px"}}
         
          />
          </center>
        </Grid>

        <Grid item xs={12} md={6}>
          <center>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            
            autoComplete="cc-exp"
            variant="standard" style={{marginLeft:"250px"}}
          />
          </center>
        </Grid>
        <Grid item xs={12} md={6}>
          <center>
            <div class="cvv">
          <TextField 
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
           
            autoComplete="cc-csc"
            variant="standard"  style={{marginRight:"250px"}}
          />
          </div>
          </center>
        </Grid>
        <Grid item xs={12}>
          <center>
          <FormControlLabel
          
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />  <br></br><br></br> 
          <button onClick={handlenext} >Submit</button>
          </center>
         
        </Grid>
     
        <Card/>
        <Box/>
      </Grid>
      </div>
    </React.Fragment>
   
  );
}