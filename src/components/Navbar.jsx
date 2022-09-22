import { styled } from "@mui/system";
import { Menu, YouTube } from "@mui/icons-material/";
import Search from "./Search";

const NavigationBar = styled("nav")({
  backgroundColor: "#222",
  // padding: 1,
  color: "white",
});

const Div = styled("div")({
  display: "flex",
  rowGap: 4,
  alignItems: "center",
});

const GridBlock = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <NavigationBar>
      <GridBlock>
        <Div>
          <Menu
            sx={{
              padding: 4,
            }}
          />
          <Div>
            <YouTube
              sx={{
                fontSize: 40,
                color: "red",
              }}
            />
            <h1>Youtube</h1>
          </Div>
        </Div>
        <Search />
        <Div>Login</Div>
      </GridBlock>
    </NavigationBar>
  );
};

export default Navbar;
