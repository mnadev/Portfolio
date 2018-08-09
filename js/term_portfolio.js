// create instance of terminal
var term = new Terminal();

// make it fullscreen
//Terminal.applyAddon(fullscreen);
// function enterHandler(command){
//
// };

let allowEntry = function(){
  console.log("allowing Entry now");
  term.write("me@menadeem:~$ ");
  let command = "";
  term.on('key', (key, ev) => {
          console.log(key.charCodeAt(0));

          if (key.charCodeAt(0) == 13) {
            key = 'm';
            enterHandler(command);
          } else {
            command += key;
            term.write(key);
          }
  });
}

function enterHandler(command) {
  console.log(command + " entered");
  switch(command) {
    case "get education":
      term.writeln("\n\t Education");
      allowEntry();
      break;
    case "get work experience":
      term.writeln("\n\t work experience");
      allowEntry();
      break;
    default:
      term.writeln("\nThese commands allow you to interact with my resume.");
      term.writeln("\nType \'get education\' to look at my education");
      term.writeln("\nType \'get work experience\' to look at my work experience");
      term.writeln("\nType \'get projects\' to look at my projects");
      term.writeln("\nType \'get skills\' to look at my skills");
      allowEntry();
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
        }

        command += key;
        term.write(key);
});
term.textarea.onkeypress = function (e) {
        term.write(String.fromCharCode(e.keyCode));
}
