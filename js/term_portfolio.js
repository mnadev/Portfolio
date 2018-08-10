// create instance of terminal
var term = new Terminal();

var urlMoreInfo = document.getElementById('moreinfo');

function enterHandler(command) {
  console.log(command + " entered");
  switch(command) {
    case "get education":
      term.writeln("");
      term.writeln("Education:");
      term.writeln("I am currently a student at Rutgers University New Brunswick");
      term.writeln("I am double majoring in Computer Engineering and Computer Science.");
      term.writeln("I am also doing a minor in Math. I plan to graduate in May 2020.");
      term.writeln("\nI also participated in the Program in Algorithmic and Combinatorial Thinking.");
      term.writeln("I was in this program from June 2014 to April 2015.");
      term.writeln("I learned a lot about discrete mathematics, algorithms and proofs.");
      term.writeln("For more info, click the links below.");
      term.write("\nme@menadeem:~$ ");
      urlMoreInfo.innerHTML = "<a href=\"https://algorithmicthinking.org/\">Program in Algorithmic and Combinatorial Thinking</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://cs.rutgers.edu\">Rutgers CS</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://ece.rutgers.edu\">Rutgers ECE</a>";
      break;
    case "get work experience":
      term.writeln("");
      term.writeln("Work Experience:");
      term.writeln("I've worked at iD Tech Camps where I taught students programming and hardware.");
      term.writeln("Each week I taught a different course. I taught Java, Python and C++.");
      term.writeln("I also taught Scratch and a course in Raspberry Pi using Pi-Tops");
      term.writeln("\nI've also worked at Rutgers University as a Grader for the Math Department.");
      term.writeln("I graded Maple Labs for Math 244 which was a differential equations course.");
      term.writeln("The Maple labs were just assignments in Maple, the computational software.");
      term.writeln("\nI also worked as a Help Desk Consultant for ECS at Rutgers.");
      term.writeln("ECS handles all technology services for the School of Engineering.");
      term.writeln("I have to ensure all of the labs are in order by doing routine sweeps.");
      term.writeln("But mainly, I help anyone with any technical issues they may have.");
      term.writeln("\nI also worked as a Teaching Assistant at Kumon Learning Center Cherry Hill.");
      term.writeln("I helped teach students of various ages Math and Reading skills.");
      term.writeln("I got training on how to effectively tutor kids.");
      term.writeln("\nFor more info, click the links below.");
      term.write("\nme@menadeem:~$ ");
      urlMoreInfo.innerHTML = "<a href=\"https://www.idtech.com/\">iD Tech Camps</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://math.rutgers.edu/\">Rutgers Math Departments</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"http://ecs.rutgers.edu\">Rutgers ECS</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://www.kumon.com/cherry-hill\">Kumon Cherry Hill</a>";
      break;
    case "get projects":
      term.writeln("");
      term.writeln("Projects:");
      term.writeln("My first major project was a Pebble Watch App called RUBus that shows Rutgers bus timings.");
      term.writeln("I used Pebble.js and an API that obtained the data to create the app.");
      term.writeln("\nThen, I moved on and created many projects in Java.");
      term.writeln("For my class, Software Methodology, CS 213, I created text-based chess.");
      term.writeln("The hard part with chess was writing the logic to know when checkmate occured.");
      term.writeln("It was an exhaustive algorithm. I also created a Song Library Project in JavaFX.");
      term.writeln("\nUsing JavaFX, I created a photos app in which the user can add albums and photos and view them.");
      term.writeln("I also included the ability to add tags and search photos with certain tags.");
      term.writeln("I recreated this photos app in Android with the same features.");
      term.writeln("Honestly, JavaFX and Android are very similar so I found it pretty simple.");
      term.writeln("\nI have also created some games. I created Flappy Bird in Java using Processing.");
      term.writeln("I also worked as a Teaching Assistant at Kumon Learning Center Cherry Hill.");
      term.writeln("I also created Pong in Python using PyGame.");
      term.writeln("\nCurrently, I have some projects I am working on. I created a Paint app in JavaScript using p5.js.");
      term.writeln("I plan to add functionality to this app to allow the user to save the drawing as a BMP file.");
      term.writeln("I also plan to create a service that texts shipping updates to users who order online.");
      term.writeln("I am going to use Ruby on Rails and the Twilio API to create this service.");
      term.writeln("\nFor more info, click the links below.");
      term.write("\nme@menadeem:~$ ");
      urlMoreInfo.innerHTML = "<a href=\"https://apps.rebble.io/en_US/application/599dc335461a8d8fd10011ed?query=Ru%2520Bus&section=watchapps\">RUBus</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://github.com/mnadev/chess.py\">Chess</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://github.com/mnadev/FlappyWorm\">FlappyWorm</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://github.com/mnadev\">More projects here.</a>";
      break;
    case "get skills":
      term.writeln("");
      term.writeln("Skills and Interests:");
      term.writeln("In terms of human languages, I know English, Hindi, and Urdu.");
      term.writeln("I am a beginner in Spanish and I know Latin, but that's not really spoken.");
      term.writeln("\nIn terms of programming languages, I know Java, JavaScript and Python.");
      term.writeln("I also know MATLAB. Let's just say it's reputation precedes it.");
      term.writeln("I am currently learning C++ and Ruby. I have a basic knowledge of C as well.");
      term.writeln("I am also trying to learn Node.js.");
      term.writeln("\nI am really interested in back-end web development and systems programming.");
      term.writeln("I am also interested in wireless communications and IoT.");
      term.writeln("\nI hope to create a wearable ecosystem.");
      term.writeln("Technology should help our lives without decreasing our quality of life.");
      term.writeln("\nI am also interested in cryptocurrency.");
      term.writeln("Bitcoin probably fell 10% in the two seconds it took you to read this line.");
      term.writeln("But blockchain in general has a lot of potential to revolutionize the world.");
      term.write("\nme@menadeem:~$ ");
      urlMoreInfo.innerHTML = "<a href=\"https://github.com/mnadev\">Check out my Github</a>";
      break;
    default:
      term.writeln("");
      term.writeln("These commands allow you to interact with my resume.");
      term.writeln("\nType \'help\' to get help");
      term.writeln("\nType \'get education\' to look at my education");
      term.writeln("\nType \'get work experience\' to look at my work experience");
      term.writeln("\nType \'get projects\' to look at my projects");
      term.writeln("\nType \'get skills\' to look at my skills");
      term.writeln("For other info, click the links below.");
      term.write("\nme@menadeem:~$ ");
      urlMoreInfo.innerHTML = "  <a href=\"https://github.com/mnadev\">Github</a>";
      urlMoreInfo.innerHTML += "<br/><a href=\"https://www.linkedin.com/in/mohammed-nadeem-a01714126\">LinkedIn</a>";
      break;
  }
}

term.open(document.getElementById('terminal'));
term.writeln("Hello. Welcome to my interactive resume.");
term.writeln("To get started, type help");
term.write("me@menadeem:~$ ");
let command = "";
term.on('key', (key, ev) => {
        console.log(key.charCodeAt(0));

        if (key.charCodeAt(0) == 13) {
          enterHandler(command);
          command = "";
        } else {

        if((key.charCodeAt(0) >= 65 && key.charCodeAt(0) <= 90) ||
    (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) || key.charCodeAt(0) == 32) {
        if(!(key == command.substring(command.length - 1))) {
         command += key;
         term.write(key);
        }
      }
});

term.textarea.onkeypress = function (e) {
  if((e.keyCode >= 65 && e.keyCode <= 90) ||
  (e.keyCode >= 97 && e.keyCode <= 122) || key.charCodeAt(0) == 32) {
   term.write(String.fromCharCode(e.keyCode));
  }
}
