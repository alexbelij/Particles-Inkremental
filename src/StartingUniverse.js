
export class Universe {
    constructor (strings, speed, handcap, atoms) {
        this.strings = strings;
        this.speed = speed;
        this.handcap = handcap;
        this.atoms = atoms;

    }

    stringsReward(player) {
        console.log("+ " + this.Strings + " " + "Strings");
        player.Strings += this.Strings;
    }

    getReward(player, pasteFunction) {
        let this.ticker = setInterval( () => this[pasteFunction(player)], 1000);
    }
}




