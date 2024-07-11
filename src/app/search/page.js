import { Input } from "@mui/joy";
import { Box } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

export default function search() {
  return (
   <>
    
        <Box className='mt-36' >
          <Box className=' w-[800px] mx-auto' >
                      <Input placeholder="Search for restaurants and food "
           className=' w-[800px] px-4 py-3 bg-inherit'  endDecorator={<SearchIcon className='cursor-pointer' />} />

          </Box>

    
</Box>
    
  
  
   
   </>
  );
}