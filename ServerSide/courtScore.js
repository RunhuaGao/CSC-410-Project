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
        if(this.turn==1){
            this.score1+=1;
            this.turn=2;
        } else{
            this.score2+=1;
            this.turn=1;
        }
        if(this.score1===30 | this.score2===30){
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