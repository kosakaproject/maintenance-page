const progress = document.querySelector('.progress');
const progress_percentage = document.querySelector('.progress span');

let per = 0;
function progressLoad() {
    if(per >= 40){
        progress.style.width = '40%';
        progress_percentage.innerHTML = "40%"
    } else {
        progress.style.width = `${per}%`;
        progress_percentage.innerHTML = `${per}%`;
    }
    per++
}
setInterval(progressLoad, 70)
