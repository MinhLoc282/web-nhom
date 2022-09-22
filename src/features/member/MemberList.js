import React from 'react'
import {Member} from './Member'
import Stack from '@mui/material/Stack';

const members = [
    {
        id:1,
        name: "Phan Lê Minh Lộc",
        mssv: "20110673",
        img: ""
    },
    {
        id:2,
        name: "Bùi Bá Lộc",
        mssv: "20110671",
        img: "https://i.imgur.com/M38MUZF.jpg"
    },
    {
        id:3,
        name: "Phạm Phúc Bình",
        mssv: "20110252",
        img: "https://i.imgur.com/E9aWXUJ.jpg"
    },
    {
        id:4,
        name: "Đặng Hữu Tiến",
        mssv: "20110734",
        img: "https://i.imgur.com/iPz4UMu.jpg"
    },
    {
        id:5,
        name: "Nguyễn Thành Phương",
        mssv: "20110294",
        img: "https://i.imgur.com/oTqgKWu.jpg"
    },
]

export const MemberList = () => {
  return (
    <Stack direction="row" spacing={2} sx={{
        bgcolor: '#124D6A',
        minHeight:'100%',
        minWidth:'100%',
        position: 'fixed',
        alignItems: 'center', 
        justifyContent: 'space-around'
    }}>
        {members.map((member) => {
            return <Member key={member.id} {...member}/>
        })}
    </Stack>
  )
}
