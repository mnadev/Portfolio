import {Terminal} from xterm;
import * as fit from 'xterm/lib/addons/fit/fit';

const term = new Terminal();

term.fit();
term.open(document.getElementById('terminal'));
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
