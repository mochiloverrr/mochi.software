import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  if (config.ascii === 'mochi') {
    return `                                                  
 summary display:
-----------
 ABOUT
 ${config.name}
ﰩ ${config.ps1_hostname}
爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
-----------


`;
  } else {
    return `
      
`;
  }
};

export default summary;
