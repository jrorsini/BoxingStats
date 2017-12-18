
let fillPts = () => {
    let max;
    let ptsArr = []
    const ptsList = document.getElementById('popularity');
    document.getElementById('boxerName').innerText = data.name;
    data.fight_list.reverse().map(e => {
        ptsArr.push(e.points);
    });
    max = Math.max(...ptsArr);
    
    let markup = `
        <ul id="popularity">
            ${data.fight_list.reverse().map(
                e => `<li><span class="lvl fight--${e.result}" style="width:${e.points}px"></span><li>`
            ).join('')
            }
        </ul>
    `

    document.body.innerHTML = markup;
}

fillPts()