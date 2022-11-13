alert('if you are using this in mobile then use desktop mode for better experience');
const info = async (event) => {
    const api = await fetch(`
https://api.cricapi.com/v1/currentMatches?apikey=40d0cb22-ed60-49c9-b417-4fdbadbf693e&offset=0`);
    const dat = await api.json();
    try {
        if (!dat.data[0]) {
            document.getElementById('status').innerText = dat.status;
            document.getElementById('name').innerText = dat.reason;
            document.getElementById('inning').innerText = 'api hits there max refresh for today';
        } else if (!dat.data[0].score[1]) {
            document.getElementById('type').innerText = dat.data[0].matchType;
            document.getElementById('name').innerText = dat.data[0].name;
            document.getElementById('inning').innerText = dat.data[0].score[0].inning;
            document.getElementById('run').innerText = dat.data[0].score[0].r;
            document.getElementById('wicket').innerText = dat.data[0].score[0].w;
            document.getElementById('over').innerText = dat.data[0].score[0].o;
            document.getElementById('date').innerText = dat.data[0].date;
            document.getElementById('opp1').innerText = dat.data[0].teamInfo[0].name;
            document.getElementById('opp2').innerText = dat.data[0].teamInfo[1].name;
            document.getElementById('status').innerText = dat.data[0].status;

        } else {
            document.getElementById('type').innerText = dat.data[0].matchType;
            document.getElementById('name').innerText = dat.data[0].name;
            document.getElementById('inning').innerText = dat.data[0].score[1].inning;
            document.getElementById('run').innerText = dat.data[0].score[1].r;
            document.getElementById('wicket').innerText = dat.data[0].score[1].w;
            document.getElementById('over').innerText = dat.data[0].score[1].o;
            document.getElementById('date').innerText = dat.data[0].date;
            document.getElementById('opp1').innerText = dat.data[0].teamInfo[0].name;
            document.getElementById('opp2').innerText = dat.data[0].teamInfo[1].name;
            document.getElementById('status').innerText = dat.data[0].status;
        }
    } catch {

        document.getElementById('inning').innerText = 'api hits there max refresh for today';



    }


}

info();
