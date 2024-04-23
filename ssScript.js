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
//function for selection sort
async function SelectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    // Assign 0 to min_idx 
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {

        // Assign i to min_idx 
        min_idx = i;

        // Provide darkblue color to the ith bar 
        bars[i].style.backgroundColor = "purple";
        for (var j = i + 1; j < bars.length; j += 1) {

            // Provide red color to the jth bar 
            bars[j].style.backgroundColor = "red";

            // To pause the execution of code for 300 milliseconds 
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // To store the integer value of jth bar to var1  
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);

            // To store the integer value of (min_idx)th bar to var2  
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            // Compare val1 & val2 
            if (val1 < val2) {
                if (min_idx !== i) {

                    // Provide skyblue color to the (min-idx)th bar 
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {

                // Provide skyblue color to the jth bar 
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar 
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        // To pause the execution of code for 300 milliseconds 
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );

        // Provide skyblue color to the (min-idx)th bar 
        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

        // Provide lightgreen color to the ith bar 
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

    // To enable the button "Generate New Array" after final(sorted) 
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "cyan";

    // To enable the button "Selection Sort" after final(sorted) 
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