import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const YOUR_APP_ID = '72eb2109';
const YOUR_APP_KEY = '389180ab8a35d4d3fc12e04b8dd8c769';

const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState('');

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSearch = () => {
    fetchRecipes();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchRecipes();
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: '20px auto',
      }}
    >
      <TextField
        fullWidth
        label="Tu wpisz czego szukasz."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="fullWidth"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onKeyPress={handleKeyPress}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'lightblue',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
