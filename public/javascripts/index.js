

let linkListMarkup = `
    <ul>
        ${boxersList.map(e => `
            <li><a href='/${e.id}'>${e.name}</a></li>
        `).join('')}
    </ul>
`;

document.body.innerHTML = linkListMarkup;