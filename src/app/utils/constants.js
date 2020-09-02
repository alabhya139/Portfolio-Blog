export const dashboardItem = [
    { title: 'Capsules', filter: true, filterArray: ['Upcoming', 'Past'] },
    { title: 'Cores', filter: true, filterArray: ['Upcoming', 'Past'] },
    { title: 'Dragons', filter: false },
    { title: 'History', filter: false },
    { title: 'Landing Pads', filter: false },
    { title: 'Launches', filter: true, filterArray: ['Upcoming', 'Past', 'Latest', 'Next'] },
    { title: 'Launch Pads', filter: false },
    { title: 'Missions', filter: false },
    { title: 'Payload', filter: false },
    { title: 'Rockets', filter: false },
    { title: 'Roadster', filter: false },
    { title: 'Ships', filter: false }
];

export const constants = {
    API: {
        baseUrl: "https://api.spacexdata.com/v3/"
    }
}

export const CATEGORY_LIST = [
    {
        categoryName: 'Technology'
    },
    {
        categoryName: 'Travel'
    },
    {
        categoryName: 'Programming'
    },
    {
        categoryName: 'News'
    },
    {
        categoryName: 'Trending'
    },
    {
        categoryName: 'Music'
    }
]