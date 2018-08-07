//let node = require('node');
//let fs = require('fs');

//var resume = JSON.parse(fs.readFileSync('resume.json','utf8'));
var resume = JSON.parse('{"name": "Mohammad Nadeem","lnkdin": "https://www.linkedin.com/in/mnad16","github": "https://github.com/mnadev","email": "mohammednadeem902@gmail.com"}');
// just getting all info from JSON
let name = resume.name;
let lnkdinURL = resume.lnkdin;
let githubURL = resume.github;
let email = resume.email;
//let work = resume.work;
//let education = resume.education;
//let projects = resume.projects;
//let skills = resume.skills;

//alert(resume.name);
//alert(resume.lnkdin);
//alert(resume.github);
/*
document.getElementById("information").innerHTML += "<h2 align = \"left\" class=\"text-center text-uppercase\">" +  resume.name + "</h2>";
document.getElementById("information").innerHTML +="<div class=\"row\"> <div class=\"col text-left\"><a href=\"" + resume.lnkdin + "\">"+ "LinkedIn" + "</a></div>";
document.getElementById("information").innerHTML +="<div class=\"col text-center\"><a href=\"" + resume.github + "\">"+ "Github" + "</a></div>";
document.getElementById("information").innerHTML +="<div class=\"col text-right\"><a href=\"" + resume.email + "\">"+ "Email" + "</a></div></div>";
*/
for(job in resume.work){
  document.getElementById("work").innerHTML += "<div class=\"row\"><h5>" + job.company + "</h5></div>";
  //col-md-3 col-sm-3 col-lg-3 col-xl-3

}
