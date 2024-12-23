//IoT Project list
const iotlist = document.getElementById("iotlist")

let iot_array=[
    {project:'CHANGE LED COLOR AND ON/OFF LED THROUGH BLUETOOTH',url: '/gzxproj24/GZXP24001.html'},
    {project:'SMART PARKING EMAIL-NOTIFICATION SYSTEM',url: '/gzxproj24/GZXP24002.html'},
    {project:'SMART SECURITY INDICATION AND EMAIL NOTIFICATION SYSTEM',url: '/gzxproj24/GZXP24003.html'},
    {project:'SMART HOME AUTOMATION SYSTEM',url: '/gzxproj24/GZXP24004.html'},
    {project:'VOICE COMMAND THROUGH HOME AUTOMATION SYSTEM',url: '/gzxproj24/GZXP24005.html'},
]
const list_data=document.getElementById('iotlist')
iot_array.forEach(items => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href=items.url
    link.textContent=items.project;
    listItem.appendChild(link);
    list_data.appendChild(listItem);
});