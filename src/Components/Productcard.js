import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

class Productcard extends React.Component {
  render() {
    const { product, onDelete } = this.props;

    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <Card variant="outlined" sx={{ width: 350 , height:"auto", borderColor:'text.primary', 
       
        '&:hover': {
          boxShadow: "0px 4px 15px rgba(250,39,17)",
        }, }}
        >
          <CardMedia
            component="img"
            alt={product.title}
            height="300"

            image={product.thumbnail}
            sx={{ width: "100%", objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
            <Typography variant="h6">${product.price}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={() => onDelete(product.id)}>Delete</Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default Productcard;
