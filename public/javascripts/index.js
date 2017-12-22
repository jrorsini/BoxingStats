let boxersList = [
    {id: 150,name:'Larry Holmes'},
    {id: 168,name:'Ken Norton'},
    {id: 180,name:'Muhammad Ali'},
    {id: 262,name:'Leon Spinks'},
    {id: 320,name:'Earnie Shavers'},
    {id: 405,name:'Mike Weaver'},
    {id: 474,name:'Mike Tyson'},
    {id: 499,name:'Evander Holyfield'},
    {id: 584,name:'James Douglas'},
    {id: 803,name:'James Tillis'},
    {id: 1286,name:'Michael Spinks'},
    {id: 1465,name:'Tommy Morrison'},
    {id: 1640,name:'Riddick Bowe'},
    {id: 1853,name:'Lennox Lewis'},
    {id: 2463,name:'Gerry Cooney'},
    {id: 9031,name:'Sonny Liston'},
];

let linkListMarkup = `
    <ul>
        ${boxersList.map(e => `
            <li><a href='/${e.id}'>${e.name}</a></li>
        `).join('')}
    </ul>
`;

document.body.innerHTML = linkListMarkup;