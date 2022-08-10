
// TODO: Submit button on default "Player Name" create undefined player, fix
// TODO: New Player >> Add Player is allowed when no info filled in, fix

export default function login(players) {
    return `
        <div class = "row loginLogoContainer"> 
            <div class = "col">
                <img class="loginLogo" src="./img/login_logo.png" alt="WeCanRacquet Logo" srcset="">
            </div>
        </div>

        <select class="form-select playerNameSelected form-select-lg mb-3" required>
            <option selected disabled>Player name</option>
                ${players.map((player) => {
                return `
                        <option value=${player.id}>${player.name}</option>
                    `;
                })}
        </select>

        <div class = "row">
            <div class = "d-grid gap-2">
                <button type="button" class="mb-5 btn-lg submitBtn btn btn-outline-primary">
                    Submit
                </button>
            </div>
        </div>
 
        <div class = "row">
            <div class = "d-grid gap-2 justify-content-end ">
                <button type="button" class="mb-2 btn-lg btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    New Player
                </button>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Player</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="player-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="player-name">
                    </div>
                    <div class="mb-3">
                        <label for="player-email" class="col-form-label">Email:</label>
                        <input type="text" class="form-control" id="player-email">
                    </div>
                    <div class="mb-3">
                    <label for="player-phoneNumber" class="col-form-label">Phone #: </label>
                    <input type="text" class="form-control" id="player-phoneNumber">
                </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="newPlayerBtn btn btn-primary" data-bs-dismiss="modal">Add Player</button>
                </div>
                </div>
            </div>
        </div>
        
    `;
}