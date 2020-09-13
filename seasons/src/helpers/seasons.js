const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const northernSeasons = {
    Dec: 'Winter',
    Jan: 'Winter',
    Feb: 'Winter', 
    Mar: 'Spring', 
    Apr: 'Spring', 
    May: 'Spring',
    Jun: 'Summer', 
    Jul: 'Summer', 
    Aug: 'Summer',
    Sept: 'Automn', 
    Oct: 'Automn', 
    Nov: 'Automn'
};

const southernSeasons = {
    Dec: 'Summer',
    Jan: 'Summer',
    Feb: 'Summer', 
    Mar: 'Automn', 
    Apr: 'Automn', 
    May: 'Automn',
    Jun: 'Winter', 
    Jul: 'Winter', 
    Aug: 'Winter',
    Sept: 'Spring', 
    Oct: 'Spring', 
    Nov: 'Spring'
};

export const seasonConfig = {
    Winter: {
        message: "No winter lasts forever; no spring skips its turn. - Hal Borlad",
        imgUrl: "./img/winter.jpg"
    },
    Spring: {
        message:"Spring is nature's way of saying let's party. - Robin Williams" ,
        imgUrl: "./img/spring.jpg"
    },
    Summer: {
        message: "Some of the best memories are made in flip flops. - Kellie Elmore",     
        imgUrl: "./img/summer.jpg"
    },
    Automn: {
        message: "Notice that autumn is more the season of the soul than of nature. - Friedrich Nietzsche",
        imgUrl: "./img/automn.jpeg"
    }
}

export const getSeason = (lat, monthIndex) => {
    const month = months[monthIndex];

    if (lat > 0) {
        return northernSeasons[month];
    }
    else {
        return southernSeasons[month];
    }
}