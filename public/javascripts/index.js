
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
            ${data.fight_list.map(
                e => `<li>
                    <span class="lvl fight--${e.result}" style="height:${e.points / max * 100}px"></span>
                    <div class="figther_modal">
                        <p>${e.fight_date}</p>
                        <p>${e.opponent_name}</p>
                        <p>
                            <span>${e.opponent_stats[0]}</span>
                            <span>${e.opponent_stats[1]}</span>
                            <span>${e.opponent_stats[2]}</span>
                        </p>
                        <p>${e.result} by ${e.score} in round ${e.round}</p>
                    </div>
                </li>`
            ).join('')
            }
        </ul>
    `
    document.body.innerHTML = markup;
}

fillPts()