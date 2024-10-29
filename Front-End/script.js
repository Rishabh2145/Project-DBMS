const erase = document.getElementById("delete");
const insert = document.getElementById("insert");
const update = document.getElementById("update");
const menu = document.getElementById("menu");
const back = document.getElementById("Back");
const insertion = document.getElementById("insertion");
const deletion = document.getElementById("deletion");
const updation = document.getElementById("updation");
const submitInsert = document.getElementById("submitInsert");
const submitUpdate = document.getElementById("submitUpdate");
const submitDelete = document.getElementById("deleteSubmit");
const delCondition = document.getElementById("inlineFormInputGroupUsername");
const setCondition = document.getElementById("setCondition");
const whereCondition = document.getElementById("whereCondition");
const fn = document.getElementById("firstname");
const ln = document.getElementById("lastname");
const enroll = document.getElementById("enroll");
const email = document.getElementById("email");
erase.onclick = function () {
    menu.style.display = "none";
    back.style.display = "block";
    deletion.style.display = "block";
}
insert.onclick = function () {
    menu.style.display = "none";
    back.style.display = "block";
    insertion.style.display = "block";
}
update.onclick = function () {
    menu.style.display = "none";
    back.style.display = "block";
    updation.style.display = "block";
}
back.onclick = function () {
    operation();
    insertion.style.display = "none";
    deletion.style.display = "none";
    updation.style.display = "none";
    refreshing();
}
submitDelete.onclick = ()=>{
    const chk = confirm("Do you really want to Delete this Data?");
    if(chk == true)
        {
        deletion.style.display = "none";
        operation();
        window.alert("The Data Deleted Successfully!!");
        refreshing();
    }
}
submitUpdate.onclick = ()=>{
    const chk = confirm("Do you really want to Delete this Data?");
    if(chk == true)
        {
        updation.style.display = "none";
        operation();
        window.alert("The Data Updated Successfully!!");
        refreshing();
    }
}
submitInsert.onclick = () => {
    insertion.style.display = "none";
    operation();
    window.alert("Your Data is Inserted Successfully!!");
    refreshing();
}
function refreshing() {
    fn.value = '';
    ln.value = '';
    email.value = '';
    enroll.value = '';
    delCondition.value = '';
    setCondition.value = '';
    whereCondition.value = '';
}
function operation(){
    menu.style.display = "block";
    back.style.display = "none";
}