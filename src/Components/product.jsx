import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {CardActions} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
// import Header from "./Header";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';

import data from "./data";
import './product.css'

export default function ActionAreaCard(props){
 
    return (
    <div className="pop">
   <div className="papa">
      {props.hhhh.map((item,index)=>{
        return(


      <div className="mama">
      {/* <div className="dis " > */}
    <Card className="card" sx={{ width: 300 , display:"flex"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // width="100%"
          image={item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" justifyContent="space-between" display="flex"  sx={{fontSize:16}}>
            {item.title} <FavoriteBorderIcon/>
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{fontSize:18 , fontWeight: "bold"}}>
            {item.price}
          </Typography>
          <CardActions>
          <Typography variant="body2" color="text.secondary">
            {item.location}
          </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>

    </Card>
    </div>
  
  
        )
      })}
      </div>
       <div className="btn">
        <Button  sx={{color:"black" , border: "2px solid black",margin:"40px"}} variant="outlined" size="large">
          Load More
        </Button>
        </div>
        </div>
   
  );
}