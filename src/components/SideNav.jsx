import { styled } from "@mui/system";

const Section = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})

const SideNav = () => {
    return (
        <div>
            <Section>
                <h5>Home</h5>
                <h5>Explore</h5>
                <h5>Subscription</h5>
                <h5>Library</h5>
            </Section>
        </div>
    )
}

export default SideNav;