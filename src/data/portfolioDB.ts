
type PortfolioItem = {
  img: string;
  retina: string;
  link:string;
};
type Portfolio = PortfolioItem[];


const portfolio: Portfolio = [
  {
    img: "/img/portfolio/1x/brige.jpg",
    retina: "/img/portfolio/2x/brige2x.jpg",
    link: "https://bridgenation.com.pl/"
  },
  {
    img: "/img/portfolio/1x/nanowo.jpg",
    retina: "/img/portfolio/2x/nanowo2x.jpg",
     link: "https://www.nanowo.com.pl"
  },
  {
    img: "/img/portfolio/1x/cherep.jpg",
    retina: "/img/portfolio/2x/cherep2x.jpg",
    link:"https://nocturn-studioo.webflow.io/?fbclid=PAdGRleAPNx49leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaedjfGlSRwq7ymzKswMMMwqY4BfOgfba8qKmwoT_toTPdLOtJO9xdcSj-XhuA_aem_UuAhxzuJyNvLDvvZmrSZsg"
  },
  {
    img: "/img/portfolio/1x/Behance.jpg",
    retina: "/img/portfolio/2x/Behance2x.jpg",
        link:"https://www.behance.net/gallery/221560901/Mobile-Fitness-App-Sport-Buddy"
  },
  {
    img: "/img/portfolio/1x/nft.jpg",
    retina: "/img/portfolio/2x/nft2x.jpg",
        link:"https://cybermuse.webflow.io/?fbclid=PAdGRleAPNx2dleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAad79VqAT_0SIC5sUWEfbZa26T0nZ6Yt531SXLdvaiWGL4vOa7_b08oBEtKtGA_aem_20sOhfidztLBvplEHzR1Tg"
  },
  {
    img: "/img/portfolio/1x/sakura.jpg",
    retina: "/img/portfolio/2x/sakura2x.jpg",
        link:"https://best-apartment.webflow.io/?fbclid=PAdGRleAPNx7hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae-zyLaXNnBuAidumy8isSNUcQHDChtkz6qH0vpGGoyqAasE4cxObrVZh7riA_aem_Uk99TgrvddJ0xvzT6-WzNw"
  }
];

export default portfolio;
