let btn = document.querySelector('[data-btn]')
let output = document.querySelector('#output')

function middle (){
    let numbers = [12, 18, 11, 5, 8, 2]
    //find lenth of array
    let leng = numbers.length 

    //check if array is even
    if (leng%2 ==0) {
        //for even
        let middleIndex = leng/2 
        output.textContent = numbers[middleIndex -1] + ' , '
        output.textContent += numbers[middleIndex] 
    }else {
        //or odd
        let middleIndex = Math.round(leng/2 - 1)
        output.textContent = numbers[middleIndex]

    }
    

}

btn.addEventListener('click', middle)