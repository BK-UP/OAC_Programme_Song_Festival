let arr = [["page_1",6],["page_2",5],["page_3",4],["page_4",3],["page_5",2],["page_6",1]];
let currentIndex = 0;

function nextPage() {
    if (currentIndex >= arr.length - 1) {
        return; // Already at last page
    }
    
    let currentpage = document.querySelector(`.${arr[currentIndex][0]}`);
    
    // Decrease z-index for all pages before current
    for (let i = 0; i <= currentIndex; i++) {
        arr[i][1]--;
        if(i==currentIndex){
            currentpage.classList.add("flip");
            setTimeout(()=>{
                document.querySelector(`.${arr[i][0]}`).style.zIndex = arr[i][1];
            },1000)
        }
        else
            document.querySelector(`.${arr[i][0]}`).style.zIndex = arr[i][1];
    }
    
    currentIndex++;
}

function previousPage() {
    if (currentIndex <= 0) {
        return; // Already at first page
    }
    
    let previousIndex = currentIndex - 1;
    let previouspage = document.querySelector(`.${arr[previousIndex][0]}`);
    
    // Increase z-index for all pages up to the previous one
    for (let i = 0; i <= previousIndex; i++) {
        arr[i][1]++;
        document.querySelector(`.${arr[i][0]}`).style.zIndex = arr[i][1];
    }
    
    previouspage.classList.remove("flip");
    currentIndex--;
}