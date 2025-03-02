document.addEventListener("DOMContentLoaded", function () {
    const colors = ["Green", "Pink", "Blue", "Yellow", "Red", "Orange", "Purple", "Cyan"];
    let index = 0;

    document.getElementById("theme-change").addEventListener("click", function () {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    });
});



function updateDate() {
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
    const monthDayYear = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    document.getElementById("date-time").innerHTML = `${weekday} <br> ${monthDayYear}`;
}

updateDate();


const completed = document.querySelectorAll('.completed')
const task = document.getElementById('task-count');
let convertTask = parseInt(task.innerText);
const taskCheck =document.getElementById('task-check')
let convertTaskChake = parseInt(taskCheck.innerText);

for(let btn of completed){
    btn.addEventListener('click', function(event){
        event.target.disabled = true
        alert('Board update succressfully')

        if(convertTask > 0){
            convertTask--;
            task.innerText = convertTask;
            if(convertTask == 0){
                alert('congrates!!! You have completed all the task')
            }
            
        }
        if(convertTaskChake > 0){
            convertTaskChake++;
            taskCheck.innerText = convertTaskChake;
        }
                      
        document.getElementById('history').style.display = 'block'


        document.body.onclick = function(event) {
            if (event.target.classList.contains("completed")) {
                const taskCard = event.target.closest(".task-card");
                const taskTitle = taskCard.dataset.title;
                document.getElementById("history").innerHTML = `
                
                <div class="p-3">
                            <div class="bg-[#f4f7ff] p-3 rounded-lg ">
                                <p>You have Complete ${taskTitle} at  ${new Date().toLocaleTimeString()}</p>
                            </div>
                        </div>
                
                
                ` + document.getElementById("history").innerHTML;
            }
        };

    })
}
    const clearHistory = document.getElementById('clear-history').addEventListener('click',function(){
    document.getElementById('history').style.display = 'none'
})

const nextPage =document.getElementById('next-page').addEventListener('click',function(){
    window.location.href = './question-ans.html'
})

