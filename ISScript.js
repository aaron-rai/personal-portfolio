const container = document.querySelector(".data-container");

//Generate bars
function generateBars(num = 20) {
    for (let i = 0; i < num; i++) {
        //Genereate random values
        const value = Math.floor(Math.random() * 100) + 1;
        //Create div
        const bar = document.createElement("div");
        bar.classList.add("bar");
        //Add height to bar
        bar.style.height = `${value * 3}px`;
        //Translate according to x-axis
        bar.style.transform = `translateX(${i * 30}px)`;
        //Create label
        const barLabel = document.createElement("label");
        //add id to label
        barLabel.classList.add("bar_id");
        //Assign value
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}
//Function for insertionSort
async function InsertionSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");

    //lightgreen to 0th bar
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";
    for (var i = 1; i < bars.length; i += 1) {

        // Assign i-1 to j 
        var j = i - 1;
        // To store the integer value of ith bar to key  
        var key = parseInt(bars[i].childNodes[0].innerHTML);
        // To store the ith bar height to height 
        var height = bars[i].style.height;
        // For selecting section having id "ele" 
        var barval = document.getElementById("ele")
            // For dynamically Updating the selected element 
        barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;
        //Provide darkblue color to the ith bar  
        bars[i].style.backgroundColor = "darkblue";
        //pause code for 600 milliseconds 
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 600)
        );

        // For placing selected element at its correct position  
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

            //darkblue to jth bar 
            bars[j].style.backgroundColor = "darkblue";

            // For placing jth element over (j+1)th element 
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText =
                bars[j].childNodes[0].innerText;

            // Assign j-1 to j 
            j = j - 1;

            //pause code for 600 milliseconds 
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 600)
            );

            //lightgreen color to sorted part 
            for (var k = i; k >= 0; k--) {
                bars[k].style.backgroundColor = " rgb(49, 226, 13)";
            }
        }

        // Placing the selected element to its correct position 
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;

        //pause the code for 600 milliseconds 
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 600)
        );

        //light green to the ith bar 
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

    barval.innerHTML = "<h3>Sorted!!!</h3>";

    // To enable the button  
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "cyan";

    // To enable the button  
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "cyan";
}

//Recall
generateBars();

//Genereate new random array
function generate() {
    window.location.reload();
}

//disable buttons
function disable() {
    //Disable generate array
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "teal";

    //Disable Selection Sort 
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "teal";
}