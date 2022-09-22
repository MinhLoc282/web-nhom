import React from 'react'
import Avatar from '@mui/material/Avatar';

export const Member = ({name, mssv, img}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: '24px'}}>
        <Avatar alt={name} src={img} sx={{
            width:200,
            height:200
        }}/>
        <h4>{name}</h4>
        <div>{mssv}</div>
    </div>
  )
}
