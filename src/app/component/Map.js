'use client'
import { Box, ListItem, Input, List,Button , Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React,{useState} from "react";
export default function Map() {
    const [open, SetOpen] = useState(false);


    const toggleDrawer = (newOpen) => () => {
        SetOpen(newOpen);
    };


    const DrawerList = (
        <Box>
            {/* role="presentation" onClick={toggleDrawer(false)} */}
            <List>
                {
                    [""].map((text, index) => (
                        <ListItem key={text} disablePadding className='flex flex-col  h-[100vh] m-3' >
                            <ListItem>
                                <CloseIcon className="cursor-pointer" onClick={toggleDrawer(false)} /></ListItem>
                            <ListItem  className=''>
                                <Input placeholder=" Search for area, street name." className='w-[350px] px-4 py-2 border border-b-zinc-400  hover:shadow  '/>
                            </ListItem>
                            <ListItem>
                                <Box className=' w-[350px] border border-b-zinc-400 px-4 py-3 flex flex-col my-3'>
                                    <Box className='flex gap-2'>
                                        <GpsFixedOutlinedIcon />
                                        Get current location
                                    </Box>
                                    <Box className='px-7 text-fuchsia-200'>
                                        Using GPS
                                    </Box>
                                </Box>
                            </ListItem>
                            {/* <ListItemText primary={text} /> */}
                        </ListItem>
                    ))
                }
            </List>
        </Box>)

    return (
        <>
            <Box
                onClick={toggleDrawer(true)} className=" hover:text-orange-500 text-blue-950">Other
                <KeyboardArrowDownIcon className='text-orange-400' />
            </Box>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}