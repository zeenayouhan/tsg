import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getAllProducts } from '../common/actions/common.actions';
import { productSelector } from '../common/selectors/product.selectors';
import { Box, Card, CardContent, CardMedia, Grid, Rating, TextField, Typography } from '@mui/material';
import './Home.css'; // Import the CSS file
import SearchIcon from '@mui/icons-material/Search';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const productSelectors = useSelector(productSelector);
  const [searchItem, setSearchItem] = useState<string>('');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchItem(event.target.value);
    dispatch(fetchProduct({limit:12, skip:0, q: searchItem}));
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <TextField
      placeholder="Search..."
      variant="outlined"
      size="small"
      style={{ marginTop: 20, marginBottom:20,width: 800, alignContent:'center', justifyContent:'center', }}

      onChange={handleSearch }
      InputProps={{
        startAdornment: <SearchIcon style={{ color: 'gray' }} />,
      }}/>
    <Grid container>
      

      {productSelectors &&
        productSelectors.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card style={{ minHeight: '450px' }} className={'hover-card'}>
              <CardMedia component="img" height="300" image={product.thumbnail} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {product.brand}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={9} md={10}>
                    <Typography variant="h6">{product.title}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={3} md={2}>
                    <Typography color="text.secondary" fontWeight="bold" fontSize={20}>
                      ${product.price}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={8}>
                  <Rating name="simple-controlled" value={product.rating} />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Box
                    marginLeft={3}
                    // Adjust the margin as needed
                    padding={1}
                    paddingRight={4}
                    bgcolor="red"
                    color="white"
                    borderRadius={3}
                  >
                    {`-${product.discountPercentage}%`}
                  </Box>
                </Grid>
                </Grid>
              </CardContent>

              {/* {product && product.images.length > 0 && (
        <Grid container spacing={2}>
          {product.images.map((image, index) => (
            <Grid item key={index} xs={12} sm={3}>
              <CardMedia
                component="img"
                height="140"
                image={image.toString()}
              />
            </Grid>
          ))}</Grid>)} */}
              {/* Add more details as needed */}
            </Card>
          </Grid>
        ))}
    </Grid>
    </div>
  );
};

export default Home;
