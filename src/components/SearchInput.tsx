import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

type SearchInputProps = {

}

export const SearchInput = (props:SearchInputProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField id="outlined-basic" label="Search" variant="standard" />
        <IconButton><SearchIcon /></IconButton>
      </Box>

      
   
  );
}