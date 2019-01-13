// data struct that maps keyword to keyword's severity
const keywordToSeverity = {
    "sad" : 1,
    "depress" : 1,
    "tired" : 1,
    "don't want to" : 2,
    "lonely" : 3,
    "want to die" : 5,
    "dying" : 4,
    "death" : 4,
    "suicide" : 5,
    "how to die" : 5,
    "lethal dose" : 4,
    "overwhelm" : 3,
    "anxi" : 4,
    "self harm" : 5,
    "cut" : 3,
    "burn" : 3,
    "upset" : 2,
    "asphix" : 3,
    "apath" : 3
};
// WHEN WE ACTUALLY RUN .match() IT'LL LOOK AT EACH INDIV WORD!!
// WITH * THEN.

// each time we run this, for items in tTK, if the key is larger than
// x (number), we 1) update concernLevel 2) delete that entry from tTK

// sum of severity of search terms for this user
var concernLevel = 0; // lol how do u initialize stuff in JS?? wWHO KNOWS!?


// dictionary that maps keyword to condition
var terms = {};


// main?? idk!
// .match needs to be able to access this file

function addSearch(lst) {
// how does the scraper work?? ask that in conjunction with the question u just asked

// scrape 10 pages at a time
// is there some way to only run this when a new tab is opened? on the first
// item in the history?? bc we wouldn't be looking at the full history, but we
// would never accidentally count twice

// pattern-match to time - also date, right???????
''// string "4:32 jan 12 2019" --> 043201122019 int
// timestamp = yyyymm dd hh ii ss
// not military; 9am pm

function timeFormat(???) { // wait for arg formatting once scraper works
// when item doesn't begin with
// if split History by /n, if line starts with a-z instead of 0-9?

    // returns int in yyyymmddhhiiss
    // adjusts for am/pm as needed
}


   // call match
   // determine which keyword it is?
   // add to concern level
   // update
}

// how to find out when a new tab is opened

// timestamp, or "minutes since"? so we don't have

// maybe in one of the files for the actul extension?
// not actually sure how this thing runs....
