const sampleData = [
    {
        title: "Fighter",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "hindi",
    },
    {
        title: "Fighter",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "english",
    },
    {
        title: "Fighter",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "sidebar",
    },
    {
        title: "Fighter",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "nepali",
    },
    {
        title: "Fighter",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "sidebar",
    },
    {
        title: "Fighter",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "anime",
    },
    {
        title: "Fighter",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "upcoming",
    },
    {
        title: "krish 4",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "upcoming",
    },
    {
        title: "Smuggler",
        description: "it is the action moview of bollywood.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit obcaecati deleniti doloribus blanditiis eius itaque nam officia maiores laborum alias quo, est, dolor quod neque illum quidem nesciunt vitae eligendi, et facere numquam vel voluptatem voluptatum temporibus. Molestias laborum necessitatibus assumenda mollitia non. Blanditiis accusantium eveniet labore ut dolore doloribus.",
        releasedDate: "8 january 2024",
        language: "Hindi",
        duration:" 2 hrs 30 min 21 sec",
        genre: "Comedy and Social Drama",
        director: "Rohit Shetty, Sharukh Khan",
        producer: "Rohit Shetty, Sharukh Khan, sanjay dutt",
        cast: "Ajay devgan, Kapil Sharma, ",
        image: "https://github.com/prakashraj111/Netflixclone/blob/main/bgimg.jpg?raw=true",
        category: "upcoming",
    },
];


module.exports = { data: sampleData };