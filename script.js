document.getElementById("squabble").addEventListener("submit",(formresponse)=>
{
    document.getElementById("preloader").style.display = 'block';
    formresponse.preventDefault();
    let name=document.getElementById("firstname").value;
    let PRN=document.getElementById("roll").value;
    let Email=document.getElementById("mail").value;

    serialJSON["name"]=name;
    serialJSON["PRN"]=PRN;
    serialJSON["Email"]=Email;
    sendData("squabble",serialJSON);
})


document.getElementById("nexus").addEventListener("submit",(formresponse)=>
{
    document.getElementById("preloader").style.display = 'block';
    formresponse.preventDefault();
    let name=document.getElementById("name1").value;
    let PRN=document.getElementById("roll1").value;
    let Email=document.getElementById("mail1").value;

    serialJSON["name"]=name;
    serialJSON["PRN"]=PRN;
    serialJSON["Email"]=Email;
    sendData("nexus",serialJSON);
})



let serialJSON={};
function sendData(event){
    serialJSON["event"]=event;
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbysOrp6Lznr7B9_1ovxQvw6tPrcftyVKFzwOexINpyfwLCciCo6FSdZLBHhuH7pXhJdnQ/exec",
        type:"POST",
        data: serialJSON,

        success: function(res){
            console.log(res);
            alert(res.returnStatus);
            window.location.reload();
        },
        error: function(res){
            console.log(res);
            alert("Error!Refresh the page.");
        },

    });
}