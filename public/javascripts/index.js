const ptsList = document.getElementById('popularity');

let fillPts = () => {
    data.fight_list.map(e => {
        let node = document.createElement('li');
        let textNode = document.createTextNode(e.points);
        node.appendChild(textnode); 
        ptsList.appendChild(node); 
    });
}