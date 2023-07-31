import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { useState, KeyboardEvent } from "react";

type SearchInputProps = {
  onSearchClick: (value: string) => void;
  initialValue?: string;
};

export const SearchInput = (props: SearchInputProps) => {
  const [value, setValue] = useState<string>(props.initialValue ?? "");

  const handleClick = () => {
    props.onSearchClick(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="standard"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <IconButton onClick={handleClick}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
