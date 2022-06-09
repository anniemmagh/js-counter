var button = document.getElementById("btncounter");;
count = 0;
button.addEventListener("click", test = () => {
    count += 1;
    button.innerHTML = 'Loading : ' + count;

    if (count == 10) {
        button.addEventListener("click", test)
        timer = setInterval(() => {
            document.getElementById("btncounter").value = count
            count -= 1;
            if (count == 0) {
                clearInterval(timer);
                button.addEventListener("click", test);
            }
        }, 1000)
    }
})