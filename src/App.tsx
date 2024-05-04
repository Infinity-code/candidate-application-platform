import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Box, Grid } from '@mui/material';
import { JobCard } from './components/ui/jobCard';
import { Filter } from './components/SearchBar/filter';


function App() {
  const [jobs,setJobs]=useState<any>([]);
  const [offset,setoffset]=useState<number>(0);
  const loadRef=useRef(null);

  
  function fetchJobs(){
    const header=new Headers();
    header.append("Content-Type","application/json");

    const body=JSON.stringify({
      "limit":9,
      "offset":offset
    });

    const request={
      method:"POST",
      headers:header,
      body
    }

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",request)
    .then((res)=>res.json())
    .then((job)=>{
      
      setJobs([...jobs,...job.jdList]);
      setoffset(offset+9);
    })
    .catch((err)=>console.log(err));
  }

  useEffect(()=>{
    fetchJobs();

  },[]);
  
  
  function handleIntersect(entries:IntersectionObserverEntry[]){
    const loadIndicator=entries[0];
    if(loadIndicator.isIntersecting){
      fetchJobs();
    }
  }
  
  useEffect(()=>{
    const options={
      root:null,
      rootMargin:'0px',
      threshold:1.0
    }
    const observer=new IntersectionObserver(handleIntersect,options);

    if(loadRef.current){
      console.log("observing")
      observer.observe(loadRef.current);
    }

    return ()=>{
      console.log("unobserving")
      if(loadRef.current){
        observer.unobserve(loadRef.current);
      }
    }
  },[offset,jobs]);

  type job={
    jdUid:string,
    companyName:string,
    jobRole:string,
    location:string,
    jobDetailsFromCompany:string,
    minExp:number,
    jdLink:string,
    salaryCurrencyCode:string,
    minJdSalary:number,
    maxJdSalary:number,
  }
  
  
  return (
    <>
    <div style={{width:'100%', display:'flex',alignItems:'center',flexGrow:0, justifyContent:'center'}}>
      <Box width={'80%'} sx={{display:'flex',flexDirection:'column',alignItems:'center',flexGrow:0, justifyContent:'center', marginTop:'50px'}}  >
        <Filter/>
        <Grid container flexWrap={'wrap'} rowSpacing={'3%'} sx={{display:'flex',alignItems:'center', justifyContent:'center', width:'100%',m:'0px', flexGrow:'wrap', boxSizing:'border-box'}}>
            {jobs.map((jobData:job)=>{
              return <JobCard key={jobData.jdUid} jobDescription={jobData.jobDetailsFromCompany} companyTitle={jobData.companyName} minExp={jobData.minExp} location={jobData.location} jobLink={jobData.jdLink} jobTitle={jobData.jobRole} jobCurrency={jobData.salaryCurrencyCode} minSalary={jobData.minJdSalary} maxSalary={jobData.maxJdSalary} />
            })}
            
        </Grid>
      </Box>
    </div>
    
    <div className='loadIndicator' ref={loadRef}></div>
    </>
  )
}

export default App
