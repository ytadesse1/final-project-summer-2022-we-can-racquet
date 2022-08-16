export default function guestView(guestPlayerId, players, allChallenges,allRecords) {
    
    var allRecordsOfGuest = [];
    var allChallengesOfGuest = [];
    let tempChallenger, tempChallenged,tempWinner,tempLoser;

    allChallenges.forEach(element => {
        if (element.challengedId==guestPlayerId) {
            allChallengesOfGuest.push(element);
        }
    });

    allRecords.forEach(element2 => {
        if(element2.winner==guestPlayerId || element2.loser==guestPlayerId) {
            allRecordsOfGuest.push(element2);
        }

    });

    return `


        ${players.map((player) => {
            if (player.id == guestPlayerId) {
                return `
                    <img class = "logoRounded" src = ${player.avatarUrl}>
                    <br>
                    ${player.league}
                    <br>
                    ${player.name}
                    <br>
                    ${player.email}
                    <br>
                    <h1>Challengers</h1>
                    ${allChallengesOfGuest.map((challenge) => {
                        tempChallenger = challenge.challengerId;
                        tempChallenged = challenge.challengedId;
                        let tempChallengerName = "";
                        let tempChallengerId;

                        players.forEach((tempPlayer) => {
                            if(tempChallenger == tempPlayer.id){
                                tempChallengerName = tempPlayer.name;
                                tempChallengerId = tempPlayer.id;
                            }
                            
                        })
                        return `
                            <div class = "allChallengesInGuest">
                                <p class ="challengesNameGuest">${tempChallengerName}</p> 
                                <input type="hidden" class="hiddenChallengerGuestId" value="${tempChallengerId}">

                            </div>
                        `
                        
                    }).join("")}

                    <br>
                    <h1>Records</h1>
                    <div class = "row mb-2">
                        <div class = "col-2">
                            <b>Winner</b>
                        </div>
                        <div class = "col-1">
                        </div>
                        <div class = "col-2">
                            <b>Loser</b>
                        </div>
                        <div class = "col-1"></div>

                        <div class = "col">
                            <b>Set 1</b>
                        </div>
                        <div class = "col">
                            <b>Set 2</b>
                        </div>
                        <div class = "col">
                            <b>Set 3</b>
                        </div>
                    </div>
                    ${allRecordsOfGuest.map((record) => {
                        tempWinner = record.winner;
                        tempLoser = record.loser;
                        let tempWinnerName = "";
                        let tempLoserName = "";
                        let tempWinnerId,tempLoserId;
                        
                        players.forEach((tempPlayer) => {
                            if(tempWinner == tempPlayer.id){
                                tempWinnerName = tempPlayer.name;
                                tempWinnerId = tempPlayer.id;
                            } else if (tempLoser == tempPlayer.id){
                                tempLoserName = tempPlayer.name;
                                tempLoserId = tempPlayer.id;
                            }
                        })
                        
                        return`
                            <div class = "allRecordsInGuest">
                                <div class="row">
                                    <div class="col-2">
                                    <p class = "recordWinnerName">${tempWinnerName}</p>
                                    <input type="hidden" class="hiddenWinnerId" value="${tempWinnerId}">
                                    </div>
                                    <div class="col-1">
                                    </div>
                                    <div class="col-2">
                                    <p class = "recordLoserName">${tempLoserName}</p>
                                    <input type="hidden" class="hiddenLoserId" value="${tempLoserId}">
                                    </div>
                                    <div class="col-1">
                                    </div>
                                    <div class = "col">
                                    ${record.match.slice(0,2).join("-")}
                                    </div>
                                    <div class = "col">
                                        ${record.match.slice(2,4).join("-")}
                                    </div>
                                    <div class = "col">
                                        ${record.match.slice(4,6).join("-")}              
                                    </div>
                                </div>
                            </div>
                        `
                    }).join("")}
                `
            }
        }).join("")}
    `

}