import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import React,{useState} from 'react'

import Button from '@mui/material/Button';
import './Settings.css'
import { pink } from '@mui/material/colors';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    color:'white'
  },
});



export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const color = pink[500];
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }
  const handlesave=()=>{
    alert("Changes Saved!")
  }
  
const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return (
    <div>
        <div className="App">
        <div className="settings-container">
        <center>
      <h1>Settings</h1><hr></hr> 
        
     
    <ThemeProvider theme={isDarkMode ? darkTheme : createTheme()}>
      <CssBaseline />
      <main><center>
        <h3>Change Your Display Mode</h3>
        {isDarkMode ? 'Dark Mode Enabled!' : 'Light Mode Enabled!'}</center>                                                                                                                                                                                                                                        
      </main>
    </ThemeProvider>
    <Switch
      checked={isDarkMode}
      onChange={handleToggleTheme}
    /><hr></hr>
    <h3> App Languages</h3>
   <select>
    <option>
        English
    </option>
    <option>Spanish</option>
    <option>Tamil</option>
    <option>Malayalam</option>
    <option>Hindi</option>
    <option>Telugu</option>
    <option>japanese</option>
    <option>French</option>
    <option>Marati</option>
    <option>Kanadam</option>
    <option>Arabic</option>
    <option>Russian</option>
    <option>Portuguese</option>
    <option>Punjabi</option>
    <option>Chinese</option>
   </select>
   <hr></hr>
  
   <div>
  <h3>Privacy</h3>
  <h4>Following & Followers</h4>
  <p>show Your Following & Followers list on your Profile.</p>
  <div>
      
      <Switch {...label} defaultChecked />
    </div>
</div>
    <Button variant="contained" color="success"onClick={handlesave} >
        Save Changes
      </Button></center>
  </div>
  </div>
  </div>
  );
}
