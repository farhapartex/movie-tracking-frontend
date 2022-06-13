import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Typography, CardContent, Button, CardMedia, Card } from '@mui/material';

export type Item = {
    Name: string,
    Caption: string,
    contentPosition: "left" | "right" | "middle",
    Items: { Name: string, Image: string }[]
}

export interface SettingsT {
    autoPlay: boolean,
    animation: "fade" | "slide",
    indicators: boolean,
    duration: number,
    navButtonsAlwaysVisible: boolean,
    navButtonsAlwaysInvisible: boolean,
    fullHeightHover: boolean,
    cycleNavigation: boolean,
    swipe: boolean,
    [key: string]: any
}

export const DefaultSettingsT: SettingsT = {
    autoPlay: false,
    animation: "fade",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true
}

interface BannerProps {
    item: Item,
    contentPosition: "left" | "right" | "middle",
    length?: number,

}

export const Banner = (props: BannerProps) => {

    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems: number = props.length ? props.length : props.item.Items.length;

    let items = [];


    for (let i = 0; i < totalItems; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={3} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    // if (contentPosition === "left") {
    //     items.unshift(content);
    // } else if (contentPosition === "right") {
    //     items.push(content);
    // } else if (contentPosition === "middle") {
    //     items.splice(items.length / 2, 0, content);
    // }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}