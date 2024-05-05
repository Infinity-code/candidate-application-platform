import { Autocomplete, Box, Chip, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export function FilterBox({placeholder,options}:{placeholder:string,options:any[]}){
    return(
        <Autocomplete className="selection-bar"
                options={options}
                filterSelectedOptions={true}
                multiple={true}
                size={'small'}
                defaultValue={[]}
                
                clearIcon={<DeleteIcon size={24} bgHover='none' colorHover='black'/>}
                
                renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip variant="filled" label={option} {...getTagProps({index})}  sx={{borderRadius:'4px',height:"23px",'&:hover':{cursor:'default'}}} deleteIcon={<DeleteIcon size={16} bgHover='#ffcdd2' colorHover='#f44336'/>}/>
                    ))
                  }
                
                renderInput={(params) => (
                    <TextField
                    label={placeholder}
                    {...params}
                    variant="outlined"
                    sx={{'&:hover':{cursor:'default'}}}
                    />
                )}
                sx={{width:'100%', borderBottom:"0px"}}
            />
    )
}

function DeleteIcon({size,bgHover,colorHover}:{size:number,bgHover:string,colorHover:string,cursor?:string}){
    return(
        <Box sx={{borderRadius:"4px", height:"100%",fontSize:`${size}px`,width:"20px", '&:hover':{bgcolor:bgHover, color:colorHover,cursor:'default'},display:"flex", justifyContent:"center",fontWeight:'4'}}>
            <ClearIcon sx={{height:'100%'}} fontSize="inherit"/>
        </Box>
        
    )
}