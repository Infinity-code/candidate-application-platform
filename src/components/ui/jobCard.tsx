import { Grid, Card, CardContent, Box, Typography, Button, Link } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export type job={
  companyTitle:string,
  jobTitle:string,
  location:string,
  jobDescription:string,
  minExp:number,
  jobLink:string,
  jobCurrency:string,
  minSalary:number,
  maxSalary:number,
}

export function JobCard({companyTitle,jobTitle,location,jobDescription,minExp,jobLink,jobCurrency,minSalary,maxSalary}:job){
    
    return (
          
          <Grid item xs={12} md={6} lg={4} sx={{display:'flex',alignItems:'center', justifyContent:'center', width:'100%'}} >
            <Card sx={{
              width:'60%',
              borderRadius:'20px',
              minWidth:"340px",
              maxWidth:"340px",
              p:'4%',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
            }} elevation={2} >

              <CardContent sx={{padding:'2%'}}>
                
                <Box sx={{display:'flex', flexDirection:'row',gap:'5px',marginBottom:'8px'}}>
                    <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <img alt="Logo"/>
                    </Box>
                    <div className="main-title-container">
                        <div className="title-container">
                            <Box component='h3'>
                                <Link href={jobLink} underline="hover" sx={{fontSize: '13px','font-weight': 600,letterSpacing: '1px',marginBottom: '0px',color: '#8b8b8b', padding: 0}}>
                                    {companyTitle}
                                </Link>
                            </Box>
                            <h2>{jobTitle[0].toUpperCase()+jobTitle.substring(1,jobTitle.length)}</h2>
                        </div>
                    <p>{location[0].toUpperCase()+location.substring(1,location.length)}</p>
                    </div>
                    
                </Box>

                <Box component='p' sx={{display:'flex', justifyContent:'start'}}>
                    Estimated Salary: {`${minSalary} - ${maxSalary} ${jobCurrency}`}
                </Box>
                
                <Box sx={{textAlign:'left', marginBottom:'8px'}}>
                
                    <Typography variant="body1" fontWeight={500} marginTop={'20px'} >
                        About Company:
                    </Typography>
                    
                    <p style={{maskImage:'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))',marginTop:'5px', fontWeight:'400', whiteSpace:'pre-wrap', height:'250px'}}>
                    {jobDescription}
                    </p>
                    
                </Box>

                <div className="title-container">
                    <h3>Minimum Experience</h3>
                    <h2>{minExp} years</h2>
                </div>
              </CardContent>
              
              <Box sx={{display:'flex',flexDirection: 'column',justifyContent:'flex-end',alignItems:'flex-start', width:'90%',marginTop:'20px',padding:'0 15px'}}>
                <Button variant='text' sx={{backgroundColor: 'rgb(85, 239, 196)',color: 'rgb(0, 0, 0)',fontWeight: 500,padding: '8px 18px',width:'100%',textTransform:"none",fontSize:'16px'}} >
                <span>⚡ Easy Apply</span>
                </Button>
              </Box>
              <Box sx={{display:'flex',flexDirection: 'column',justifyContent:'flex-end',alignItems:'flex-start', width:'90%',marginTop:'20px',padding:'0 15px'}}>
                <Button variant='text' sx={{backgroundColor: 'rgb(73, 67, 218)',color: '#fff',fontWeight: 500,padding: '8px 18px',width:'100%',textTransform:"none",fontSize:'16px',gap:'4px'}} >
                <AccountCircleIcon/>
                <Box >Ask for a referral</Box>
                
                </Button>
              </Box>
              <Box>
              </Box>
            </Card>
          </Grid>
      
        
    )
}