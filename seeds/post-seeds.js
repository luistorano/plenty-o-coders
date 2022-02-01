const { Post } = require('../models');

const postdata = [
  {
    title: 'Error when running my code.',
    post_url: 'https://github.com/UCF-Coding-Boot-Camp/UCF-VIRT-BO-FSF-PT-10-2021-U-B',
    user_id: 2,
    question: 'I am having issues getting my code to work.  I am gettin a error at line 47 in activty 4 module 3.'
  },
  {
    title: 'NPM start wont work!!',
    post_url: 'https://github.com/EllaCodes2021/prework-about-me',
    user_id: 1,
    question: 'I am having issues getting my code to work.  I am gettin a error when I run the comand npm start.'

  },
  {
    title: 'I know there is an error in the code but where?',
    post_url: 'https://github.com/EllaCodes2021/urban-octo-telegram',
    user_id: 2,
    question: 'I am having issues getting my code to work.  the tests wont run.'
  },
  {
    title: 'Save me before i toss the Computer out the window.',
    post_url: 'https://github.com/EllaCodes2021/Ella-Challenge-01',
    user_id: 1,
    question: 'I am having issues getting my code to work.  I did something and it fixed one error but now i have 2 more.'
  },
  {
    title: 'Please review and let me know what might work better.',
    post_url: 'https://github.com/EllaCodes2021/task-app',
    user_id: 2,
    question: 'I think i did everything i need to but the code is maybe too long or rednudant.'

  },
  {
    title: 'How does this Look?  Portfolio piece',
    post_url: 'https://github.com/EllaCodes2021/run-buddy',
    user_id: 1,
    question: 'I am working on making my portfolio more professional and need some fresh eyes on my code.'
  },
  {
    title: 'Help Im Stuck on the Module work!',
    post_url: 'https://github.com/EllaCodes2021/super-disco',
    user_id: 2,
    question: 'I am having issues getting my code to work.  Line 47 on the App.js file is giving an error.'
  },
  {
    title: 'Call me Crazy but why wont this work.',
    post_url: 'https://github.com/EllaCodes2021/jest-another-rpg',
    user_id: 1,
    question: 'I am having issues getting my code to work.  I am gettin a error from the main.handlebars file.'
  },
  {
    title: 'If your stuck on flexbox for the CSS Challenge check out this reference.',
    post_url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    user_id: 4,
    question: 'Are those FlexBoxes Trying to Pull a Fast One? Look no further!'
  },
  {
    title: 'Need more JavaScrip in your life? Check out this Video',
    post_url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET',
    user_id: 5,
    question: 'Looking to explore JavaScript fundamentals in more depth? Watch this video series from the Net Ninja!'
  },
  {
    title: 'Trying to Start Your Project & Dont Know Where to Start Psudo Code it.',
    post_url: 'https://blog.usejournal.com/how-to-write-pseudocode-a-beginners-guide-29956242698',
    user_id: 6,
    question: 'Ngunyi Macharia walks beginners through the pseudocoding basics!' 
  },
  {
    title: 'DOM Elements 101.',
    post_url: 'https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/',
    user_id: 7,
    question: 'Looking for a quick guide to DOM events and what they do? Explore this JavaScript.!'
  },
  {
    title: 'JavaScript & jQuery',
    post_url: 'https://www.youtube.com/watch?v=S8ZuLY-Flm0',
    user_id: 8,
    question: 'Still not clear on the differences between jQuery and JavaScript? Heres a short video summarizing some of them!'
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 9,
    question: 'Looking to explore JavaScript fundamentals in more depth? Watch this video series from the Net Ninja!'
  },
  {
    title: 'Check out this Framework!',
    post_url: 'Materialize.css (Links to an external site.)',
    user_id: 10,
    question: 'We were looking for something to work for our Project and Tank recomended this I thought you all might need it!'
  },
  {
    title:'Need an API for Project 1?',
    post_url: 'https://github.com/public-apis/public-apis',
    user_id: 6,
    question: 'Looking for server-side APIs to use in your projects? Peruse this evergreen list of free public APIs!'
  },
  {
    title: 'Node.js Tutorial may help you with your first Node Project.',
    post_url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
    user_id: 7,
    question: 'Need some more information about Node.js? Check out this Node.js Tutorial for Beginners (Links to an external site.) from Programming with Mosh.'
  },
  {
    title: 'Asynchronous JavaScript and how to understand it.',
    post_url: 'https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff',
    user_id: 8,
    question: 'Sukhjinder Arora explains how JavaScript works under the hood in this guide to Understanding Asynchronous JavaScript!'
  },
  {
    title: 'What is routing with Node.js?',
    post_url: 'https://www.geeksforgeeks.org/routing-in-node-js/',
    user_id: 9,
    question: 'I found this tutorial from Geeks for Geeks it explained it well it may help you!'
  },
  {
    title: 'MVC threw me for a loop here is what saved my bacon!',
    post_url: 'https://www.youtube.com/watch?v=pCvZtjoRq1I',
    user_id: 10,
    question: 'Check out Traversey medias MVC brakedown!'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
