import React, {useRef, useEffect} from 'react'
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import {selectProject, addLabs, getLabs} from './projectSlice'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { nanoid } from '@reduxjs/toolkit'
import { Project } from './Project';
import Grid from '@mui/material/Grid';

export const ProjectList = () => {
  const labsRef = useRef('')
  const urlsRef = useRef('')
  const imgsRef = useRef('')
  const dispatch = useDispatch()
  const projects = useSelector(selectProject)
  useEffect(() => {
    labsRef.current.focus()
    dispatch(getLabs())
  }, [dispatch])
  const handleAddClick = () => {
    if (labsRef && urlsRef){
      dispatch(
        addLabs({
          id:nanoid().toString(),
          title:labsRef.current.value,
          url:urlsRef.current.value,
          img:imgsRef.current.value
        })
      )
    }
  }
  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="right" alignItems="center" style={{width:'100%'}}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Lab"
            style={{width:500}}
            inputRef={labsRef}
          />
          <TextField
            required
            id="outlined-required"
            label="Link"
            style={{width:500}}
            inputRef={urlsRef}
          />
          <TextField
            required
            id="outlined-required"
            label="Image"
            style={{width:500}}
            inputRef={imgsRef}
          />
        </Box>
        <Button variant="outlined" onClick={handleAddClick}>Thêm</Button>
      </Stack>
      <Grid container spacing={2} style={{padding: 10}}>
          {projects.map(project => {
            return (
              <Grid item xs={3} key={project.id}>
                <Project {...project}/>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}
