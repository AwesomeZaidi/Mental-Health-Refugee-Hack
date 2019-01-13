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

var keywordToTimestamp = {};

// each time we run this, for items in tTK, if the key is larger than
// x (number), we 1) update concernLevel 2) delete that entry from tTK

// sum of severity of search terms for this user
var concernLevel = 0; // lol how do u initialize stuff in JS?? wWHO KNOWS!?

const timeStrings = {
    "January" : "01",
    "February" : "02",
    "March" : "03",
    "April" : "04",
    "May" : "05",
    "June" : "06",
    "July" : "07",
    "August" : "08",
    "September" : "09",
    "October" : "10",
    "November" : "11",
    "December" : "12"
}

function updateConcernLevel(scrapeRes) { // curr time doesn't matter, bc of how we're creating timestamp as int
   var date;
   for item in scrapeRes{
       if (item.match(day) {
           date = item;
       } else {
            searchTime = item.split(" ")[0];
            xm = item.split(" ")[1];
            timestamp = timestampFormat(date, searchTime, xm );
            for key in keywordToTimestamp: // SYNTAX!?
                if item.match(key);
                    keywordToTimestamp[key] = timestamp;
                    keyword = key;
            concernLevel += keywordToSeverity[key];
       }
   // check timestamp of keywords in scrapeRes
   // if timestamp is same
   }
}
// why not same func?? seems decenyly simple?

// how does the scraper work?? ask that in conjunction with the question u just asked

// scrape 10 pages at a time
// is there some way to only run this when a new tab is opened? on the first
// item in the history?? bc we wouldn't be looking at the full history, but we
// would never accidentally count twice

// pattern-match to time - also date, right???????
''// string "4:32 jan 12 2019" --> 043201122019 int
// timestamp = yyyymm dd hh ii ss

// timestamp isn't difference/time elapsed, it's unique "time of search"
// no more bc we have unique id for exact time of search
// so we don't keep looking at the same items in a user's history


function timestampFormat(date, searchTime, xm) { // wait for arg formatting once scraper works
// all are strings
    datePieces = date.split(",");
    month = datePieces[1].split(" ")[0];
    day = datePieces[1].split(" ")[1];
    if (Integer.parseInt(day) < 10) {
        day = "0" + day;
    }
    year = datePieces[2];
    timePieces = searchTime.split(":");
    if (xm == "PM") {
        Integer.toString(Integer.parseInt(timePieces[1]) += 12);
    }
    return year + month + day + timePieces[0] + timePieces[1];
}




   // call match
   // determine which keyword it is?
   // add to concern level
   // update

// how to find out when a new tab is opened

// timestamp, or "minutes since"? so we don't have

// maybe in one of the files for the actul extension?
// not actually sure how this thing runs....


