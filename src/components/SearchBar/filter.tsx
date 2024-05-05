import { Box, TextField} from "@mui/material";
import { FilterBox } from "./filterBox";



export function Filter(){
    return(
        <div style={{display:'flex', flexWrap:'wrap',alignItems:'flex-end', width:'fit-content',gap:'8px',}}>
            <Box
                sx={{
                width:'fit-content',
                minWidth:'150px',
                display:'flex',
                flexDirection:'row',
                gap:'4px',
                }}
            >
                <FilterBox placeholder="Roles" options={['Frontend','Backend','IOS','Fullstack','Android','Designer']}/>
            </Box>

            <Box
                sx={{
                width:'fit-content',
                minWidth:'220px',
                display:'flex',
                flexDirection:'row',
                gap:'4px',
                }}
            >
                <FilterBox placeholder="Number of Employees" options={['1-10','11-20','21-50','51-100','101-200','201-500','500+']}/>
            </Box>

            <Box
                sx={{
                width:'fit-content',
                minWidth:'150px',
                display:'flex',
                flexDirection:'row',
                gap:'4px',
                }}
            >
                <FilterBox placeholder="Experience" options={['1','2','3','4','5','6','7','8','9','10']}/>
            </Box>
            
            <Box
                sx={{
                width:'fit-content',
                minWidth:'120px',
                display:'flex',
                flexDirection:'row',
                gap:'4px',
                }}
            >
                <FilterBox placeholder="Remote" options={['Remote','Hybrid','In-Office',]}/>
            </Box>

            <Box
                sx={{
                width:'fit-content',
                minWidth:'250px',
                display:'flex',
                flexDirection:'row',
                gap:'4px',
                }}
            >
                <FilterBox placeholder="Minimum Base Pay Salary" options={['0L','1L','2L','3L','4L','5L','6L','7L']}/>
            </Box>
            <Box
                sx={{
                width:'fit-content',
                minWidth:'220px',
                display:'flex',
                flexDirection:'row',
                gap:'4px',
                }}
            >
                <TextField variant="outlined" label="Company Name" placeholder="Search Company Name" size='small'  />
            </Box>
            <div style={{width:'100px'}}></div>
        </div>
        
        
        )
}



