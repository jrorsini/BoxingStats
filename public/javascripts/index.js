
let fillPts = () => {
    let max;
    let ptsArr = [];
    let wins = 0;
    let losses = 0;
    let draws = 0;
    const ptsList = document.getElementById('popularity');
    document.getElementById('boxerName').innerText = data.name;
    data.fight_list.reverse().map(e => {
        ptsArr.push(e.points);
    });
    max = Math.max(...ptsArr);
    let title = `<h1>${data.name} <small>(Peaked to ${max} pts)</small></h1>`
    let markup = `
        <ul id="popularity">
            ${data.fight_list.map(
                e => `<li>
                    <span class="lvl fight--${e.result}" style="height:${e.points / max * 100}px"></span>
                    <div class="figther_modal">
                        <p>${e.fight_date}</p>
                        <div>
                            <p><b>${data.name}</b></p>
                            <p class="opponent-s_records">
                                <span class="opW">${e.result === 'W' ? wins += 1 : wins }</span>
                                <span class="opL">${e.result === 'L' ? losses += 1 : losses }</span>
                                <span class="opD">${e.result === 'D' ? draws += 1 : draws }</span>
                            </p>
                        </div>
                        <p>VS.</p>
                        <div>
                            <p><b>${e.opponent_name}</b></p>
                            <p class="opponent-s_records">
                                <span class="opW">${e.opponent_stats[0]}</span>
                                <span class="opL">${e.opponent_stats[1]}</span>
                                <span class="opD">${e.opponent_stats[2]}</span>
                            </p>
                        </div>
                        <p><b class="op${e.result}">${e.result === 'W' ? 'Won' : 'Lost'}</b> by <b>${e.score}</b> in round <b>${e.round}</b></p>
                    </div>
                </li>`
            ).join('')
            }
        </ul>
    `
    document.body.innerHTML = title + markup;
}

let boxers = []

fillPts()