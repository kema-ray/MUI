import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">New Bags</BannerTitle>
                <BannerDescription variant="subtitle">
                    Grab yourself and another lovely person a classy, elegant bag that comes in different
                    shapes and sizes and features diverse colors to suit the everyday activities.
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}