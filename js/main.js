//const fs = require('fs');

// var resume = JSON.parse(fs.readFileSync('../res/resume.json','utf8'));
//
// let name = resume.name;
// let lnkdinURL = resume.lnkdin;
// let githubURL = resume.github;
// let email = resume.email;

var animatedText = new Terminal({
  dom: document.getElementById('terminal'),
  speed: 4 // I want 2 chars per second speed
});

animatedText.run(function(o) {
  o.output(">_ Coder").wait(300);
  o.del(5).output("Student").wait(300);
  o.del(7).output("Writer").wait(300);
  o.del(6).output("Thinker").wait(300);
});
// for(job in resume.work){
//   document.getElementById("work").innerHTML += "<div class=\"row\"><h5>" + job.company + "</h5></div>";
//   //col-md-3 col-sm-3 col-lg-3 col-xl-3
//
// }
