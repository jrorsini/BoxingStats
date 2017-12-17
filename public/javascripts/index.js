
let fillPts = () => {
    const ptsList = document.getElementById('popularity');
    document.getElementById('boxerName').innerText = data.name;
    data.fight_list.reverse().map(e => {
        const outerNnode = document.createElement('li');
        const innerNnode = document.createElement('span');
        innerNnode.classList.add('lvl');
        innerNnode.classList.add('fight--' + e.result);
        innerNnode.setAttribute("style", "width:" + e.points + 'px');
        outerNnode.appendChild(innerNnode);
        ptsList.appendChild(outerNnode); 
    });
}

fillPts()