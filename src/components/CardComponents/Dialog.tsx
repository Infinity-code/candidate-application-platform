import { Box, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import { useState } from "react";

export function DialogBox({jobDescription}:{jobDescription:string}){
    const [open,setOpen]=useState(false);
    const onClose=()=>{setOpen(false)};
    const handleOpen=()=>{setOpen(true)};
    return(
        <>
            <Box sx={{
            position:'relative',
            top:'-40px',
            textAlign:'center'
            }} >
                <Typography id="show-more-link" component='a' variant="body1" color={"#4943da"} onClick={handleOpen} >
                    Show more
                </Typography>
            </Box>
            <PopDialog open={open} onClose={onClose} jobDescription={jobDescription} />
        </>
        
    )
}

type dialogProps={
    open:boolean,
    onClose:()=>void,
    jobDescription:string
}

function PopDialog({open,onClose,jobDescription}:dialogProps){
    return(
        <Dialog open={open} onClose={onClose} scroll="paper">
            
                <DialogTitle textAlign={'center'} fontSize={'40px'}>Job Description</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{display:'flex',flexDirection:'column', textAlign:'left', gap:'4px',}}  >
                        <Typography variant="h5">About Company</Typography>
                        <Typography variant="body1">
                            {jobDescription}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            
        </Dialog>
    )
}