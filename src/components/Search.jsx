import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
});

const Input = styled("input")({
  backgroundColor: "#222",
  padding: 8,
  borderStyle: "solid",
  borderWidth:1,
  borderColor: '#333', 
  color: "white",
  borderRadius: 2,
  fontSize: 18,

  "&:focus": {
    outline: "none",
  },
});

const Button = styled("button")({
  background: "#383838",
  // borderStyle: "none",
  display: "flex",
  padding: 6,
  paddingLeft: 16,
  paddingRight: 16,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#333",
  "&:hover": {
    backgroundColor: "none",
  },
});

const Search = () => {
  return (
    <ButtonContainer>
      <Input placeholder="Search"></Input>
      <Button>
        <SearchIcon
          sx={{
            color: "white",
            fontSize: 25,
          }}
        />
      </Button>
    </ButtonContainer>
  );
};

export default Search;
