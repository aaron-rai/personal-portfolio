var container = document.getElementById("array");

//Generate array of blocks
function generateArray() {
    for (var i = 0; i < 20; i++) {
        //Return a value from 1-100
        var value = Math.ceil(Math.random() * 100);

        //Creating element div
        var array_ele = document.createElement("div");

        //Adding class to div
        array_ele.classList.add("block");

        //Add style to the div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        //Create lable to display size of block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        //Append to bubbleSort.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

//Swap two Blocks function
function swap(el1, el2) {
    return new Promise((resolve) => {
        //exchange styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame(function() {
            //Wait 25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

//Bubble sort function
async function BubbleSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");

    //Algorithm for bubble sort
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {

            //Change background color of blocks that are compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            //Wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

            //To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }

            //Change color back
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }

        //Change color of greatest element in the array
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}

//generete array
generateArray();

//Call bubbleSort
BubbleSort();