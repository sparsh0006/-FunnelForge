// function savefunction()
// {
//     console.log("button clicked") 
// }
let myLeads=[]
let olLeads=[]
const inputEl=document.getElementById("input-el")
const saveBtn=document.getElementById("save-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-el")

// converting string into array and vice-versa using JSON properties;

// mylead=JSON.parse(mylead)
// mylead.push("www.netflix.com")
// mylead=JSON.stringify(mylead)
// console.log(typeof mylead)

const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-button")


if(leadsfromlocalstorage)
{
    myLeads=leadsfromlocalstorage
    render(myLeads)
}


tabBtn.addEventListener("click",function()
{
    // using chrome tab API;
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs)
    {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    }

    )    
}

)


deleteBtn.addEventListener("dblclick",function()
    {
        localStorage.clear()
        myLeads=[]
        render(myLeads)
    }
    
)

saveBtn.addEventListener("click",function()
    {
        myLeads.push(inputEl.value)
        inputEl.value=""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    }
)
 
function render(leads)
{
    let listItems=""

for(i=0;i<leads.length;i++)
{
    // listItems +="<li><a target='_blank' href=' "+ mylead[i] +" '>" + mylead[i] + "</a></li>"
    // or you can use template string or literals using backticks to make content to look like html while in JS;

    listItems +=`<li>
                     <a target='_blank' href=' ${leads[i]}'>
                         ${leads[i]} 
                     </a>
                 </li>`



    // ulEl.innerHTML+="<li>"+ mylead[i]+" "+ "</li>"
    // or using create method;
    // const li=document.createElement("li")
    // li.innerText=mylead[i]
    // ulEl.append(li)
}
ulEl.innerHTML=listItems
}

