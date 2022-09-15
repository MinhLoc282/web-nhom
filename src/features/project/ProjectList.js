import React, {useRef, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import {add, remove } from './projectSlice'
import {selectProject} from './projectSlice'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { nanoid } from '@reduxjs/toolkit'

const columns = [
    {
        field: 'title',
        headerName: 'Title',
        width: 300,
        editable: true,
    },
    {
        field: 'url',
        headerName: 'Url',
        width: 650,
        editable: true,
    },
];

export const ProjectList = () => {
  const labsRef = useRef('')
  const urlsRef = useRef('')
  const [ids, setIDs] = useState([])
  const rows = useSelector(selectProject)
  const dispatch = useDispatch()

  useEffect(() => {
    labsRef.current.focus()
  }, [])

  const handleAddClick = () => {
    if (labsRef && urlsRef){
      dispatch(
        add({
          id:nanoid().toString(),
          title:labsRef.current.value,
          url:urlsRef.current.value
        })
      )
    }
  }
  const handleRemoveClick = () => {
    dispatch(
      remove({
        id: ids
      })
    )
  }
  const getId = (ids) => {
    const selectedId = ids
    setIDs(selectedId)
  }
  return (
    <>
      <Box sx={{height:400, width:'100%'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={getId}
        />
      </Box>
      <Stack spacing={2} direction="row" justifyContent="right" alignItems="center" style={{width:'100%'}}>
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
        </Box>
        <Button variant="outlined" onClick={handleAddClick}>Thêm</Button>
        <Button variant="outlined" onClick={handleRemoveClick}>Xóa</Button>
      </Stack>
    </>
  )
}
