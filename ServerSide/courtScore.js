class court{
    constructor(courtid,player1,player2){
        this.id = courtid;
        this.player1 = player1;
        this.player2 = player2;
        this.score1 = 0;
        this.score2 = 0
        this.occupied = true;
        this.turn = 1;
    }

    updatestatus(){
        var prob = Math.random();
        if(prob < 0.5){
            this.score1+=7;
        }
        else{
            this.score2+=7;
        }
        if(score1===21 | score2===21){
            this.occupied = false;
        }
    }

    getjson(){
        this.updatestatus();
        if(this.occupied===false){
            return {"occupied":false};
        }
        return {
            player1:this.player1,
            player2:this.player2,
            score1:this.score1,
            score2:this.score2,
            occupied:this.occupied
        };
    }
}
module.exports = court;