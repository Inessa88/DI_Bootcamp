// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video {
    constructor(title, uploader, time){
        this.titleVideo = title;
        this.uploaderVideo = uploader;
        this.timeVideo = time;
    }

    watch() {
        console.log(`${this.uploaderVideo} watched all ${this.timeVideo} seconds of ${this.titleVideo}!`)
    }
}

const videoOne = new Video("Fluffy cats", 'John Smith', 65);
videoOne.watch();


const videoTwo = new Video("Crazy korgi", 'Sarah White', 47);
videoTwo.watch();


const videos = [
    {
        title: 'Banana Bread',
        uploader: 'Tom Night',
        time: 180,

    },
    {
        title: 'Gluten free brownies',
        uploader: 'Lea Smith',
        time: 420,

    },
    {
        title: 'Greek Salad',
        uploader: 'Mary White',
        time: 130,

    },
    {
        title: 'Dumplings',
        uploader: 'Jake Johnson',
        time: 360,

    },
    {
        title: 'Roasted chiken',
        uploader: 'Ann Harvey',
        time: 240,

    }
];

console.log(videos);

const newVideos = videos.map((videos)=> new Video (videos.title, videos.uploader, videos.time));
console.log(newVideos);

