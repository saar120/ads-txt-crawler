import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        fullWidth
        variant="outlined"
        label="Search"
        name="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
