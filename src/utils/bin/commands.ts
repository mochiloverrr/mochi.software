// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

import HeadshotImg from "../../assets/headshot.gif";
import { isArgumentsObject } from 'util/types';


// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `welcome! here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
type 'summary' to display user summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `hi, i'm ${config.name}. 
welcome to my terminal
more about me:
i'm a undergraduate student studying software engineering.`;
};

//fun commands

export const sudo = async (args: string[]): Promise<string> => {
  window.open("https://www.youtube.com/watch?v=q8VYHA34mMY");
  return `you really think you could run this huh? `;
}

export const ls = async (args: string[]): Promise<string> => {
  return `desktop downloads  music  pictures  public  templates  videos`;
}

export const m0chi = async (args: string[]): Promise<string> => {
  alert ("this command will crash your browser. i do not take any responsibility for any damage caused by this command. use this at your own risk.");
  if (prompt("password: ") === "") {
    while (true) {
      alert("unzipping...");
      window.open("https://www.youtube.com/watch?v=DnPJ7jp9lHQ");
      window.open("https://www.youtube.com/watch?v=DnPJ7jp9lHQ");
      window.open("https://www.youtube.com/watch?v=DnPJ7jp9lHQ");
      window.open("https://www.youtube.com/watch?v=DnPJ7jp9lHQ");
      window.open("https://www.youtube.com/watch?v=DnPJ7jp9lHQ");
      window.open("https://www.youtube.com/watch?v=DnPJ7jp9lHQ");
    }
  }
  return 'dont say i didnt warn you...';
}


//information
export const info = async (args: string[]): Promise<string> => {
  return `                                                  
this website is built using react.js, typescript, and tailwindcss.
i really dont suggest actually running the command m0chi as it will crash your browser.
if you really want to run it without consequences, you enter a random password and the thing will stop otherwise it will keep opening youtube tabs foerver.

this website is built upon the live terminal repo by @cveinnt and I heavily modified it to my needs. 
check it out here: https://github.com/Cveinnt/LiveTerm 

i will add more commands and features in the future whilst i learn react.js, typescript, and tailwindcss.

have fun :D
`;
}

// Banner
export const banner = (args?: string[]): string => {
  return `

  <div style="display:inline-flex; align-items: center;">
  <img style="margin-right: 2em;" src=${HeadshotImg.src} width="180px" />

  ███╗   ███╗ ██████╗  ██████╗██╗  ██╗██╗
  ████╗ ████║██╔═══██╗██╔════╝██║  ██║██║
  ██╔████╔██║██║   ██║██║     ███████║██║
  ██║╚██╔╝██║██║   ██║██║     ██╔══██║██║
  ██║ ╚═╝ ██║╚██████╔╝╚██████╗██║  ██║██║
  ╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝
                                                                                                                                                                                                                                                                                                                                                                                                                   
 </div>    

Type 'help' to see the list of available commands.
Type 'summary' to display user summary.
type 'info' to display more information about this website. 

`;
};
