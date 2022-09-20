import { styled } from "@mui/system";
import {Menu, YouTube} from "@mui/icons-material/";
import Search from "./Search";

const NavigationBar = styled("nav")({
  backgroundColor: "#222",
  padding: 8,
  color: 'white',
});

const Div = styled('div')({
    display: 'flex',
    gap:4,
    alignItems: 'center',
})

const GridBlock = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
})


const Navbar = () => {
  return (
    <NavigationBar>
      <GridBlock>
        <Div>
          <Menu sx={{
            padding:4,
          }} />
          <Div>
            <YouTube />
            <h1>Youtube</h1>
          </Div>
        </Div>
        <Div>
            <Search />
        </Div>
        <Div>Login</Div>
      </GridBlock>
    </NavigationBar>
  );
};

export default Navbar;
