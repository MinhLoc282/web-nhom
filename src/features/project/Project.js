import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const Project = ({title, url, img}) => {
    const handleOnClick = () => {
        var win = window.open(url, '_blank');
        win.focus();
    }
    return (
        <Card sx={{ maxWidth: 345 }} onClick={handleOnClick}>
            <CardMedia
                component="img"
                height="250"
                image={img}
                alt="green iguana"
                sx ={{
                    maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}
