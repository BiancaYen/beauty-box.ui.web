enum Categories {
    accessories = 'accessories',
    fashion = 'fashion',
    decor = 'decor',
    hair = 'hair',
    handbags = 'handbags',
    jewellery = 'jewellery',
    makeup = 'makeup',
    mood = 'mood',
    shoes = 'shoes',
    skincare = 'skincare',
}

export interface CategoryItem {
    id: number | string,
    copy: string,
}

export interface ConfigType {
    appName: string,
    logoImage: string,
    logoSize: number,
    rank: string,
}

export interface ExploreItem {
    id: number,
    heading: string,
    image: string,
}

export type ExploreType = ExploreItem[];

export interface LeaderboardItem {
    avatar: string,
    id: number,
    points: number,
    position: string,
    prize: string,
    fullName: string,
    submissionDetails: string,
    submissionImage: string,
}

export type LeaderboardType = LeaderboardItem[];

export interface LookItem {
    id: number,
    heading: string,
    image: string,
    isOwn: boolean,
    submissionDetails: string,
    vote: 'downvoted' | 'upvoted',
}

export type LooksType = LookItem[];

export type RankItem = Pick<LeaderboardItem, 'points' | 'position'>;

export interface WishlistItem {
    category: string,
    id: number,
    currency: string,
    image: string,
    productName: string,
    shop: string,
    price: number,
}

export type WishlistType = WishlistItem[];

export interface WardrobeCategoryItem {
    copy: number | string,
    link: string,
}

export const config: ConfigType = {
    appName: 'Beauty Box',
    logoImage: '/beauty-breeze/logo.png',
    logoSize: 30,
    rank: '1st',
};

export const categories = [
    {
        copy: 'Fashion',
        id: Categories.fashion,
    },
    {
        copy: 'Makeup',
        id: Categories.makeup,
    },
    {
        copy: 'Skincare',
        id: Categories.skincare,
    },
    {
        copy: 'Hair',
        id: Categories.hair,
    },
    {
        copy: 'Shoes',
        id: Categories.shoes,
    },
    {
        copy: 'Jewellery',
        id: Categories.jewellery,
    },
    {
        copy: 'Handbags',
        id: Categories.handbags,
    },
    {
        copy: 'Accessories',
        id: Categories.accessories,
    },
    {
        copy: 'Decor',
        id: Categories.decor,
    },
    {
        copy: 'Mood',
        id: Categories.mood,
    },
];

export const explore: ExploreType = [
    {
        id: 1,
        contentHeading: 'My top vintage finds',
        heading: 'Fashion',
        image: '/beauty-breeze/explore/fashion.jpeg',
        presenter: 'Mbali Rose Ntuli',
        presenterImageSrc: 'https://image-prod.iol.co.za/square/670/Young-Famous-and-African-Season-2-Stylist-Mbali-Rose-Ntuli-shares-the-inspo-behind-her-favourite-looks?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ec121eea-e129-5e9f-8c43-d4f577f61097&operation=CROP&offset=0x430&resize=1536x1536&webp=true',
    },
    {
        id: 2,
        contentHeading: 'Glowing summer skin',
        heading: 'Makeup',
        image: '/beauty-breeze/explore/makeup.jpeg',
        presenter: 'Mbali Rose Ntuli',
        presenterImageSrc: 'https://image-prod.iol.co.za/square/670/Young-Famous-and-African-Season-2-Stylist-Mbali-Rose-Ntuli-shares-the-inspo-behind-her-favourite-looks?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ec121eea-e129-5e9f-8c43-d4f577f61097&operation=CROP&offset=0x430&resize=1536x1536&webp=true',
    },
    {
        id: 3,
        heading: 'Jewellery',
        image: '/beauty-breeze/explore/jewellery.jpeg',
        presenter: 'Bonang Matheba',
        presenterImageSrc: 'https://scontent.cdninstagram.com/v/t51.2885-15/207965935_4067201096660719_1695795578847281617_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=CvWByPfmLegAX-xb1b2&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjYwNDIyNTYxNzIxNTY5NjMzMA%3D%3D.2-ccb7-5&oh=00_AfDuw2Bx8iortqjl38wLDJvG5lbKQnD-O5osVFSz5ColMQ&oe=657071EB&_nc_sid=10d13b',
    },
    {
        id: 4,
        heading: 'Shoes',
        image: '/beauty-breeze/explore/shoes.jpeg',
        presenter: 'Mbali Rose Ntuli',
        presenterImageSrc: 'https://image-prod.iol.co.za/square/670/Young-Famous-and-African-Season-2-Stylist-Mbali-Rose-Ntuli-shares-the-inspo-behind-her-favourite-looks?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ec121eea-e129-5e9f-8c43-d4f577f61097&operation=CROP&offset=0x430&resize=1536x1536&webp=true',
    },
    {
        id: 5,
        heading: 'Handbags',
        image: '/beauty-breeze/explore/handbags.jpeg',
        presenter: 'Natasha Thahane',
        presenterImageSrc: 'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/401490696_354232160412143_2657992681619540652_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=7hzOs22lSXcAX-5MvtZ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzMzgzMTE0MTMyMzMyNTA4Nw%3D%3D.2-ccb7-5&oh=00_AfC3ip8pH7btV5JklZrp6C5x_nlosioSElZLBq_qP3W6Sg&oe=656EF749&_nc_sid=ee9879'
    },
];

export const feed = [
    {
        id: 1,
        category: Categories.fashion,
        contentHeading: 'My top vintage finds',
        heading: 'Fashion',
        image: 'https://instagram.fcpt2-1.fna.fbcdn.net/v/t51.2885-15/316178589_865320934498705_4133150831005751032_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fcpt2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vGGeza8QYl4AX_uIJB3&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk3NzA3NTQxMTkwMzM1ODk0MA%3D%3D.2-ccb7-5&oh=00_AfD9sr5nw7PAwCNcpvaqlZXxcyQA1ynbciuiE3NPdomzmw&oe=6572FD3E&_nc_sid=b41fef',
        presenter: 'Mbali Rose Ntuli',
        presenterImage: {
            alt: 'Mbali-Rose-Ntuli',
            src: 'https://image-prod.iol.co.za/square/670/Young-Famous-and-African-Season-2-Stylist-Mbali-Rose-Ntuli-shares-the-inspo-behind-her-favourite-looks?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ec121eea-e129-5e9f-8c43-d4f577f61097&operation=CROP&offset=0x430&resize=1536x1536&webp=true',
        }
    },
    {
        id: 2,
        category: Categories.skincare,
        contentHeading: 'Standard Beauty',
        heading: 'Makeup',
        image: '/beauty-breeze/feed/standard-beauty.webp',
        presenter: 'Mbali Rose Ntuli',
        presenterImage: {
            alt: '',
            src: 'https://image-prod.iol.co.za/square/670/Young-Famous-and-African-Season-2-Stylist-Mbali-Rose-Ntuli-shares-the-inspo-behind-her-favourite-looks?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ec121eea-e129-5e9f-8c43-d4f577f61097&operation=CROP&offset=0x430&resize=1536x1536&webp=true',
        },
    },
    {
        id: 3,
        category: Categories.hair,
        contentHeading: 'Our favourite Queen Charlotte looks',
        heading: 'Jewellery',
        image: '/beauty-breeze/feed/bonang-matheba.jpeg',
        presenter: 'Bonang Matheba',
        presenterImage: {
            alt: '',
            src: 'https://scontent.cdninstagram.com/v/t51.2885-15/207965935_4067201096660719_1695795578847281617_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=CvWByPfmLegAX-xb1b2&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjYwNDIyNTYxNzIxNTY5NjMzMA%3D%3D.2-ccb7-5&oh=00_AfDuw2Bx8iortqjl38wLDJvG5lbKQnD-O5osVFSz5ColMQ&oe=657071EB&_nc_sid=10d13b',
        },
    },
    {
        id: 4,
        category: Categories.handbags,
        heading: 'Handbags',
        image: 'https://instagram.fcpt2-1.fna.fbcdn.net/v/t51.2885-15/179428045_130134789141295_60545857846955701_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjA4eDEyMDguc2RyIn0&_nc_ht=instagram.fcpt2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=XZaVboKQL_EAX960X80&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU2NDA1NTQ3OTc1Mzg1NTQ4Mw%3D%3D.2-ccb7-5&oh=00_AfChwJqgCEDUG6snsXvy6qlwQuIExqb27CfP-NcJfLlbLQ&oe=65720F1D&_nc_sid=b41fef',
        presenter: 'Natasha Thahane',
        presenterImage: {
            alt: '',
            src: 'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/401490696_354232160412143_2657992681619540652_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=7hzOs22lSXcAX-5MvtZ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzMzgzMTE0MTMyMzMyNTA4Nw%3D%3D.2-ccb7-5&oh=00_AfC3ip8pH7btV5JklZrp6C5x_nlosioSElZLBq_qP3W6Sg&oe=656EF749&_nc_sid=ee9879'
        },
    },
    {
        id: 5,
        category: Categories.makeup,
        contentHeading: 'Fun looks for summer',
        heading: 'Makeup',
        image: 'https://instagram.fcpt2-1.fna.fbcdn.net/v/t51.2885-15/400762345_1798654313893879_5658024360891640022_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMjcweDQwMzIuc2RyIn0&_nc_ht=instagram.fcpt2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=mKCLjPgx5lUAX824zAl&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzIzMzcwNjYzMTM0NTc1NzQyMg%3D%3D.2-ccb7-5&oh=00_AfC5GhBNwoNJcxOtYXdX8-9HF1_CfPYN036p8O0ryvES7g&oe=65721C59&_nc_sid=b41fef',
        presenter: 'Mihlali Ndamase',
        presenterImage: {
            alt: '',
            src: 'https://instagram.fcpt2-1.fna.fbcdn.net/v/t39.30808-6/406481309_18401935570007584_8346620651222481934_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fcpt2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=u_7rQR1AdzAAX87_PH8&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI0OTY1MzE1MjY2MjI0NzExNQ%3D%3D.2-ccb7-5&oh=00_AfBMHoFMmtEHI5WBqYR5oQ71ySVwcWac14MkfM-ZWZvzpA&oe=65733091&_nc_sid=ee9879'
        },
    },

];

export const leaderboard: LeaderboardType = [
    {
        avatar: '/beauty-breeze/avatars/louvadia.jpeg',
        id: 1,
        points: 4000,
        position: '01',
        prize: 'R1 000',
        fullName: 'Louvadia',
        submissionDetails: 'The best dressed at the office by far.',
        submissionImage: '/beauty-breeze/leaderboard/best-dressed-at-the-office.jpeg',
    },
    {
        avatar: '/beauty-breeze/avatars/izzy-thabela.jpeg',
        id: 2,
        points: 3800,
        position: '02',
        prize: 'R1 000',
        fullName: 'Izzy ',
        submissionDetails: 'Comfortable vibes when I\'m with my homies',
        submissionImage: '/beauty-breeze/leaderboard/men-fashion.jpeg',
    },
    {
        avatar: '/beauty-breeze/avatars/xo-matsile.jpeg',
        id: 3,
        points: 2000,
        position: '03',
        prize: 'R1 000',
        fullName: 'Xo Matsile',
        submissionDetails: 'As spotted in the streets.',
        submissionImage: '/beauty-breeze/leaderboard/teen-vogue-high-fashion.jpeg',
    },
];

export const looks: LooksType = [
    {
        id: 1,
        image: '/beauty-breeze/looks/look-1.jpeg',
        isOwn: true,
        submissionDetails: 'To the office or not?',
        vote: 'upvoted',
    },
    {
        id: 2,
        image: '/beauty-breeze/looks/look-2.jpeg',
        isOwn: true,
        submissionDetails: 'blurb',
        vote: 'upvoted',
    },
    {
        id: 3,
        image: '/beauty-breeze/looks/look-3.jpeg',
        isOwn: false,
        submissionDetails: 'Do you like this for work or is it sloppy?',
        vote: 'downvoted',
    },
    {
        id: 4,
        image: '/beauty-breeze/looks/look-4.jpeg',
        isOwn: false,
        submissionDetails: 'For out and about shopping.',
        vote: 'upvoted',
    },
    {
        id: 5,
        image: '/beauty-breeze/looks/look-5.jpeg',
        isOwn: false,
        vote: 'upvoted',
    },
    {
        id: 6,
        image: '/beauty-breeze/looks/look-6.jpeg',
        isOwn: false,
        vote: 'upvoted',
    },
];

export const rank: RankItem = {
    points: 2000,
    position: '10',
};

export const submissions: LooksType = [
    {
        id: 1,
        heading: 'White button down',
        image: '/beauty-breeze/my-looks/white-button-down-shirt-look.jpeg',
        isOwn: true,
        submissionDetails: 'To the office or not?',
        vote: 'upvoted',
    },
    {
        id: 2,
        heading: 'Big coat coming in!',
        image: '/beauty-breeze/my-looks/big-coat-coming-in-look.jpeg',
        isOwn: true,
        submissionDetails: 'It\'s getting too cold now!',
        vote: 'upvoted',
    },
    {
        id: 3,
        heading: 'Jersey with dresses?',
        image: '/beauty-breeze/my-looks/winter-dress-look.jpeg',
        isOwn: false,
        submissionDetails: 'Do you like this for work or is it sloppy?',
        vote: 'downvoted',
    },
    {
        id: 4,
        heading: 'So comfy',
        image: '/beauty-breeze/my-looks/dress-and-long-shirt-look.jpeg',
        isOwn: false,
        submissionDetails: 'For out and about shopping.',
        vote: 'upvoted',
    },
];

export const wardrobeCategories: WardrobeCategoryItem[] = [
    {
        copy: 'Accessories',
        link: '/accessories',
    },
    {
        copy: 'Blouses',
        link: '/blouses',
    },
    {
        copy: 'Coats & Jackets',
        link: '/coats-and-jackets',
    },
    {
        copy: 'Dresses',
        link: '/dresses',
    },
    {
        copy: 'Hoodies & Sweats',
        link: '/hoodies-and-sweats',
    },
    {
        copy: 'Jeans',
        link: '/jeans',
    },
    {
        copy: 'Jerseys',
        link: '/jerseys',
    },
    {
        copy: 'Jumpsuits',
        link: '/jumpsuits',
    },
    {
        copy: 'Pants',
        link: '/pants',
    },
    {
        copy: 'Shirts',
        link: '/shirts',
    },
    {
        copy: 'Shorts',
        link: '/shorts',
    },
    {
        copy: 'Skirts',
        link: '/skirts',
    },
    {
        copy: 'Sport Wear',
        link: '/sport-wear',
    },
    {
        copy: 'T-shirts & Vests',
        link: '/t-shirts-and-vests',
    },
    {
        copy: 'Trousers',
        link: '/trousers',
    },
];

export const wishlist: WishlistType = [
    {
        category: Categories.shoes,
        currency: 'R',
        id: 1,
        image: '/beauty-breeze/my-wishlist/shoes-jeffrey-campbell-leather-stacked-platform.jpeg',
        price: 800,
        productName: 'Jeffrey Campbell Platforms',
        shop: 'Woolworths',
    },
    {
        category: Categories.makeup,
        currency: 'R',
        id: 2,
        image: '/beauty-breeze/my-wishlist/makeup-mac-lipstick.jpeg',
        price: 199,
        productName: 'Mac Lipstick',
        shop: 'Edgars',
    },
    {
        category: Categories.fashion,
        currency: 'R',
        id: 3,
        image: '/beauty-breeze/my-wishlist/fashion-superbalist-dress.jpeg',
        productName: 'Summer Dress',
        price: 350,
        shop: 'Poetry',
    },
    {
        category: Categories.shoes,
        currency: 'R',
        id: 4,
        image: '/beauty-breeze/my-wishlist/shoes-new-balance-574-spring-sneaker.webp',
        price: 499,
        productName: 'New Balance',
        shop: 'TotalSports',
    },
    {
        category: Categories.handbags,
        currency: 'R',
        id: 5,
        image: '/beauty-breeze/my-wishlist/handbag-gucci-jackie-1961-small-coated-canvas-leather-bag.jpeg',
        price: 675,
        productName: 'Gucci Handbag',
        shop: 'Aldo',
    },
    {
        category: Categories.makeup,
        currency: 'R',
        id: 6,
        image: '/beauty-breeze/my-wishlist/makeup-revlon-eyeshadow-2.jpeg',
        price: 120,
        productName: 'Revlon',
        shop: 'Truworths',
    },
    {
        category: Categories.fashion,
        currency: 'R',
        id: 7,
        image: '/beauty-breeze/my-wishlist/fashion-dress-mango.jpeg',
        productName: 'Mango Dress',
        price: 980,
        shop: 'Edgars',
    },
];
