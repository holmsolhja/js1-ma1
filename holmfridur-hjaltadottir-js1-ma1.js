// Question 1
const cat = {
    complain: function() {
        console.log("Meow");
    }
} 
console.log(cat.complain);

cat.complain();

// Question 2
const heading = document.querySelector(".h3");
console.dir(heading);

// Question 3
function heading(){
document.querySelector("h3").style.fontSize ="2em";
}

// Question 4
document.querySelector("h3").heading.add(".subheading")

// Question 5
const paragraphs = document.querySelectorAll(".p");
console.dir(paragraphs);

// Question 6
const resultsContainer = document.querySelector(".result");
resultsContainer.innerHTML = "<p>New Paragraph</p>";

console.log(resultsContainer)

// Question 7 Create a function that has one argument called catArray. Inside the function, loop through the catArray argument and console log the name property in each object. Call the function and pass in the cats variable below.

function cat(catArray){
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
}

for (var i=0; i < cats.length; i++){ 
    console.log(cats[i].name);
}

// Question 8

function cat(catArray){
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    }
    
    for (var i=0; i < cats.length; i++){ 
        const name = "<h5>" + cats[i].name + "</h5>";
        console.log(cats[i].name);
    }

// Question 9



// Question 10
function cat(catArray){
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    }
    
    for (var i=0; i < cats.length; i++){ 
    const details = `<div>
    <h5>${cats[i].name}</h5>
    </div>`;
    `<div>
    <p>${cats[i].age}</p>
    </div>`;
    }

