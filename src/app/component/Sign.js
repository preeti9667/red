"use client"
import { Box, List, ListItem,Drawer, Button, Avatar, Typography,TextField } from "@mui/material";
import React,{useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function Sign() {
const [sign, setSign] = useState(false);


    const toggleDrawers = (newSign)=>()=> {
        setSign(newSign)
    }
   


  const Lists = (
        <Box>
            <List>
            
                {
                    [''].map((text, index) => (
                        <ListItem key={text}>
                            <ListItem className='flex flex-col '>
                                <ListItem>
                                    <CloseIcon className="cursor-pointer" onClick={toggleDrawers(false)} />
                                </ListItem>
                                <ListItem className='  flex flex-col w-[400px]'>                           
                                        <Box className="flex  w-[400px]   justify-between">                                             
                                        <Box className="flex flex-col">
                                            <Typography variant="h4" className='font-bold'>Login</Typography>
                                            <Box>
                                            or
                                            <Button  className='text-red-400'  >create an account</Button>
                                            </Box>
                                            <Box>
                                            </Box>                                       
                                         </Box>
                                           <Box>
                                            <Avatar className="w-[100px] h-[100px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" />
                                         </Box>
                                        </Box>            
                                    <Box className='w-[400px] mt-10' >
                                    <TextField
                                            label="Phone number"
                                            fullWidth
                                            className=''
                                        />
                                        <Button 
                                        fullWidth
                                        className='bg-orange-500 mt-7 py-4 hover:bg-none text-white'
                                        >LOGIN</Button>
                                        <Typography variant="body2">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</Typography>
                                    </Box>
                                </ListItem>
                            </ListItem>
                        </ListItem>
                    ))}
            </List>
        </Box>
    )

    return (
     <>
      <Box className=" hover:text-orange-500 ">
                            <Box
                                onClick={toggleDrawers(true)} className=" hover:text-orange-500 flex gap-2 text-blue-950 cursor-pointer ">
                                <AccountCircleOutlinedIcon />
                                Sign In
                            </Box>

                            <Drawer open={sign}  anchor='right' onClose={toggleDrawers(false)}>
                             
                              {Lists}
                               
                                
                            </Drawer>
                        </Box>
     </>
    );
  }