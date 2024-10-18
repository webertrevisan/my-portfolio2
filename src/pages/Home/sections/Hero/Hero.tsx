import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import React from "react"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";
import { Padding } from "@mui/icons-material";

const Hero = () => {


    const StyledHero = styled("div")(({theme})=>({ 
        backgroundColor: theme.palette.primary.main,
        height: "105vh",
        display:"flex",
        alignItems:"center",
        
    }))

    const StyledImg = styled("img")(({theme})=>({
        width: "65%",
        borderRadius: "50%",
        border:"1px solid #ffffff"
    

    }))
    
    return (
        <>
<StyledHero>
<Container maxWidth="lg">

<Grid container spacing={2}>
  <Grid item xs={12} md={5}>
<Box position={"relative"}>
<Box position={"absolute"} width={"150%"} top={-100} right={0}>
<AnimatedBackground/>
</Box>
<Box position="relative" textAlign="center">
<StyledImg src={Avatar} />
</Box>
</Box>

  </Grid>
  <Grid item xs={12} md={7}>
    <Typography color="primary.contrastText" variant="h1" textAlign="center" pd={2}>Weber Trevisan</Typography>
    <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>

<Grid container display="flex" justifyContent="center" spacing={3} pt={3}>

<Grid item xs={12} md={4} display="flex" justifyContent="center">

    <StyledButton onClick={()=> console.log("download")}>
    <DownloadIcon/>
    <Typography>DOWNLOAD CV</Typography>
    </StyledButton>
    </Grid>
<Grid item xs={12} md={4} display="flex" justifyContent="center">
    <StyledButton onClick={()=> console.log("contacta")}>
    <MailOutlineIcon/>
<Typography>CONTACT ME</Typography>
    </StyledButton></Grid>

</Grid>
  </Grid>
</Grid>

</Container>

            </StyledHero>
        </>
    )
}
  
  export default Hero