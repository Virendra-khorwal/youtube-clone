import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const SearchBox = styled("div")({});

const Input = styled("input")({
  backgroundColor: "#333",
  padding: 8,
  borderStyle: "none",
  color: "white",
  borderRadius: 2,
  fontSize: 18,

  "&:focus": {
    borderStyle: "none",
    outline: "none",
  },
});



const Search = () => {
  return (
    <SearchBox>
      <Input placeholder="Search"></Input>
      <Button >
        <SearchIcon sx={{
            color: '#333'
        }} />
      </Button>
    </SearchBox>
  );
};

export default Search;
