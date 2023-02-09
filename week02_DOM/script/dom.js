 // Change the name of the link and change the link too
const link = document.querySelector('a');

link.textContent = 'Mozilla Developer Network';

link.href = 'https://developer.mozilla.org';

// this part, it has add new paragraph into section
const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

sect.appendChild(para);

// here we have saw how add this new paragraph to side to the link reference
const text = document.createTextNode(' — the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// these element changed the style of the variable "para"

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
