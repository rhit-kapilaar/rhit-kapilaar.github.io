// Getting the element with id tech so we can refer to each of its list element and the paragraph tags inside them
let listItems = document.querySelectorAll("#tech li");

// Getting the element with id work-experience so we can refer to each row in it and the data columns
let workItems = document.querySelectorAll("#work-experience tr");

// This portion basically gets each of the li elements and for each it gets the p element and adds mouseenter and mouseleave action listeners
//------------------Note:
// There was no particular inspiration for this simple feature as it is a pretty common one on many websites (usually it is collapsible button kind of feature)
// I however just found making display of a p element hidden and not hidden as easy to implement so I didn't go for anything complex.
listItems.forEach(li => {
    
    const para = li.querySelector("p");

    li.addEventListener("mouseenter", () => {
        para.style.display = "block";
    });

    li.addEventListener("mouseleave", () => {
        para.style.display = "none";
    });

});

// This portion basically gets each of the rows with the tbody element, adds click listener to them, removes background of all rows, but sets background of the clicked row
// to lightgreen (highlights the clicked row)
// ---------------------Note:
// THere was no particular inspiration for this simple feature but i have seen a couple websites where clicking a table row makes it highlighted
// Thats what the feature below is about
// It is useful for viewing all related information about any one of my work experiences as each work experience is organised in a row
workItems.forEach(tr => {

    tr.addEventListener("click", () => {
        workItems.forEach(r => r.style.backgroundColor = "white");
        tr.style.backgroundColor = "lightgreen";
    });

});

