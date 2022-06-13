import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { SettingsT, DefaultSettingsT, Banner, Item } from './Banner';

const VerticalCarousel = (props: any) => {

    const [settings, setSettings] = React.useState<SettingsT>(DefaultSettingsT);
    const items: Item[] = [
        {
            Name: "Electronics",
            Caption: "Electrify your friends!",
            contentPosition: "left",
            Items: [
                {
                    Name: "Macbook Pro",
                    Image: "https://source.unsplash.com/featured/?macbook"
                },
                {
                    Name: "iPhone",
                    Image: "https://source.unsplash.com/featured/?iphone"
                },
                {
                    Name: "Washing Machine WX9102",
                    Image: "https://source.unsplash.com/featured/?washingmachine"
                },
                {
                    Name: "iPhone",
                    Image: "https://source.unsplash.com/featured/?iphone"
                },
            ]
        },
        {
            Name: "Home Appliances",
            Caption: "Say no to manual home labour!",
            contentPosition: "middle",
            Items: [
                {
                    Name: "Washing Machine WX9102",
                    Image: "https://source.unsplash.com/featured/?washingmachine"
                },
                {
                    Name: "Learus Vacuum Cleaner",
                    Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
                },
                {
                    Name: "iPhone",
                    Image: "https://source.unsplash.com/featured/?iphone"
                },
            ]
        },
        {
            Name: "Home Appliances 2323",
            Caption: "Say no to manual home labour!",
            contentPosition: "middle",
            Items: [
                {
                    Name: "Washing Machine WX9102",
                    Image: "https://source.unsplash.com/featured/?washingmachine"
                },
                {
                    Name: "Learus Vacuum Cleaner",
                    Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
                },
                {
                    Name: "iPhone",
                    Image: "https://source.unsplash.com/featured/?iphone"
                },
            ]
        },
        {
            Name: "Decoratives",
            Caption: "Give style and color to your living room!",
            contentPosition: "right",
            Items: [
                {
                    Name: "Living Room Lamp",
                    Image: "https://source.unsplash.com/featured/?lamp"
                },
                {
                    Name: "Floral Vase",
                    Image: "https://source.unsplash.com/featured/?vase"
                },
                {
                    Name: "Washing Machine WX9102",
                    Image: "https://source.unsplash.com/featured/?washingmachine"
                },
            ]
        }
    ]


    return (
        <Carousel className="BannerStyle" {...props} {...settings} >
            {
                items.map((item, index) => {
                    return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                })
            }
        </Carousel>
    )
}

export default VerticalCarousel;