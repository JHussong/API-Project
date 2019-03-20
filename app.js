const baseURL = "https://www.thesportsdb.com/api/v1/json";
const key = "1";
const ul1 = document.querySelector("#about");
const ul2 = document.querySelector("#next");
const ul3 = document.querySelector("#previous");
let liverpool;
let nextFive1;
let nextFive2;
let nextFive3;
let nextFive4;
let nextFive5;
let lastFive0;
let lastFive1;
let lastFive2;
let lastFive3;
let lastFive4;


fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Liverpool")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
   
    
    liverpool = data.teams[0];
    teamdesc = data.teams[0].strDescriptionEN;

    let desc = document.createElement("li");
    desc.innerText = teamdesc;
    ul1.appendChild(desc);

});

fetch("https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);

    nextFive1 = data.events[0];
    event0 = data.events[0].strFilename;

    let match0 = document.createElement("li");
    match0.innerText = event0;
    ul2.appendChild(match0);


    nextFive2 = data.events[1];
    event1 = data.events[1].strFilename;

    let match1 = document.createElement("li");
    match1.innerText = event1;
    ul2.appendChild(match1);


    nextFive3 = data.events[2];
    event2 = data.events[2].strFilename;

    let match2 = document.createElement("li");
    match2.innerText = event2;
    ul2.appendChild(match2);

    nextFive4 = data.events[3];
    event3 = data.events[3].strFilename;

    let match3 = document.createElement("li");
    match3.innerText = event3;
    ul2.appendChild(match3);

    nextFive5 = data.events[4];
    event4 = data.events[4].strFilename;

    let match4 = document.createElement("li");
    match4.innerText = event4;
    ul2.appendChild(match4);

    
});

fetch("https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
   
    lastFive0 = data.results[0];
    last0 = data.results[0].strFilename;

    let lmatch0 = document.createElement("li");
    lmatch0.innerText = last0;
    ul3.appendChild(lmatch0);


    lastFive1 = data.results[1];
    last1 = data.results[1].strFilename;

    let lmatch1 = document.createElement("li");
    lmatch1.innerText = last1;
    ul3.appendChild(lmatch1);

    lastFive2 = data.results[2];
    last2 = data.results[2].strFilename;

    let lmatch2 = document.createElement("li");
    lmatch2.innerText = last2;
    ul3.appendChild(lmatch2);

    lastFive3 = data.results[3];
    last3 = data.results[3].strFilename;

    let lmatch3 = document.createElement("li");
    lmatch3.innerText = last3;
    ul3.appendChild(lmatch3);

    lastFive4 = data.results[4];
    last4 = data.results[4].strFilename;

    let lmatch4 = document.createElement("li");
    lmatch4.innerText = last4;
    ul3.appendChild(lmatch4);


});





















