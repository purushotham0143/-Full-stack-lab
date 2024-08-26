let tasks = [];
let id = 1;
let taskname = document.querySelector("#taskname");
let taskList = document.querySelector("#taskList");
taskname.addEventListener("keypress", function (e) {

       console.log(e);
    if (e.key == "Enter") {
        // tasks.push(taskname.value);
        let obj = {};
        obj.title = taskname.value;
        obj.status = 'Pending';
        obj.id = id;
        id++;
        tasks.push(obj);
        setLocalStorage();
        addDom(obj);
        // console.log(tasks);
        taskname.value = '';


    }

    // console.log("Enter pressed");



})
function addDom(task) {
    // let li=document.createElement("li");
    // li.innerText=taskname.value;

    // taskList.append(li);

    let taskdiv = document.createElement("div");
    taskdiv.setAttribute("id", task.id);

    let span = document.createElement("span");
    span.innerText = task.title;

    let chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click", function () {

        //console.log(chk.checked);
        let status = "Pending";
        if (chk.checked == true) {
            status = "Completed";
            span.style.textDecoration = "line-through";
        }
        else {
            status = "Pending";
            span.style.textDecoration = "none";


        }
        // this is used to  Update the  Status in array
        tasks = tasks.map(function (item) {

            if (item.id == task.id)
                item.status = status;

            return item;

        })
        setLocalStorage();
        console.log(tasks);

    })
    let delbtn=document.createElement("button");
    delbtn.innerText="Del";
    // delbtn.addEventListener("click",function(){
    //     taskdiv.remove();
    //     //console.log(tasks);
    //     tasks=tasks.filter(function(item){
    //         if(item.id!=task.id)
    //                 return true;
    //     })
    //     console.log(tasks);


    // })
    delbtn.addEventListener("click",delHandler);



    taskdiv.append(span);
    taskdiv.append(chk);
    taskdiv.append(delbtn);


    taskList.append(taskdiv);



}

function delHandler(e)
{
    //e.target.parentNode.remove();
let parent=e.target.parentNode;
let id=parent.getAttribute("id");
parent.remove();

    //taskdiv.remove();
        //console.log(tasks);
        tasks=tasks.filter(function(item){
            if(item.id!=id)
                    return true;
        })
        console.log(tasks);
        setLocalStorage();

}
function setLocalStorage()
{
    //let arr=["one","two"];
    //document.write(arr);
   // let obj={};
   // obj.title="Test";
//    let arr=[{"name":"Code"}]
//     //document.write(JSON.stringify(obj));

//     localStorage.setItem("items", JSON.stringify(arr));
//     let data=JSON.parse(localStorage.getItem("items"));

//    console.log( data[0]);

localStorage.setItem("tasks",JSON.stringify(tasks));


}
//setLocalStorage();
function getLocalStorage()
{
    // if(localStorage.getItem("tasks"))
    //         tasks=JSON.parse( localStorage.getItem("tasks"));
    //     else
    //     tasks=[];

    tasks=(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[])
    tasks.forEach(element => {
        addDom(element);

        
    });
  console.log(tasks);


}
getLocalStorage();