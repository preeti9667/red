
import { AppBar, Box,  Icon, } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import Link from "next/link";
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SupportIcon from '@mui/icons-material/Support';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Map from "./Map";
import Sign from "./Sign";


export default function Nab() {

    return (
        <>
            <AppBar className=' text-black bg-white'>
                <Box className='flex items-center justify-between p-3 mx-4 text-center '>
                    <Box className='flex items-center gap-10 cursor-pointer'>
                        <Icon className=' w-fit h-fit '>
                            <GradeIcon className='text-orange-400 w-10 h-10 hover:font-bold hover:text-orange-600' />
                        </Icon>
                        <Box>
                                <Map />
                        </Box>
                    </Box>
                    <ul className='flex gap-14 p-3 '>

                        <li className=' hover:text-orange-500 flex gap-2'>
                            <TvIcon />
                            <a target="_blank" href='https://www.swiggy.com/about-us/'> Swiggy Corporate</a>

                        </li>
                        <li className=" hover:text-orange-500 flex gap-2">
                            <SearchIcon />
                            <Link href='/search'>Search</Link>
                        </li>
                        <li className=" hover:text-orange-500 flex gap-2">
                            <LocalOfferOutlinedIcon />
                            <Link href='/offers'>offers</Link>
                        </li>
                        <li className=" hover:text-orange-500 flex gap-2">
                            <SupportIcon />
                            <Link href='/help'>Help</Link>
                        </li>
                            <Box>
                                <Sign/>
                            </Box>
                        <li className=" hover:text-orange-500 flex gap-2 ">
                            <LocalAtmOutlinedIcon />
                            <Link href='/cart'>Cart</Link>
                        </li>

                    </ul>
                </Box>
            </AppBar>
        </>

    );
}


