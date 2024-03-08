import Sets from "./Sets";
import { LAST_SET } from "./utils";
class Match {
  setOne: Sets = new Sets();
  setTwo: Sets = new Sets();
  setThree: Sets = new Sets();
  currentSet: number = 0;
  ballPossession: boolean = true;
  finish: boolean = false;

  private handleBallPossession: (e: boolean) => void;
  private handleMatchFinished!: (e: boolean) => void;

  constructor(
    handleBallPossessionFromMatch: (e: boolean) => void,
    handleMatchFinished: (e: boolean) => void
  ) {
    this.handleBallPossession = handleBallPossessionFromMatch;
    this.handleMatchFinished = handleMatchFinished;
  }

  // FINISH
  setFinish(e: boolean): boolean {
    this.finish = e;
    this.handleMatchFinished(e);
    return this.finish;
  }

  isFinishMatch(): boolean {
    return this.currentSet >= LAST_SET ? this.setFinish(true) : false;
  }

  // BALL POSSESSION
  changeBallPossession(): boolean {
    this.ballPossession = !this.ballPossession.valueOf();
    this.handleBallPossession(this.ballPossession);
    return this.ballPossession;
  }
  setBallPossession(ballPossession: boolean): void {
    this.ballPossession = ballPossession;
  }

  // MANAGE SETS
  incrementCurrentSet(): number {
    console.log(`increment current set ${this.currentSet++}`);
    this.isFinishMatch();
    return this.currentSet;
  }

  incrementSet = (teamIndex: number) => {
    let endSet: boolean = false;
    this.changeBallPossession();

    switch (this.currentSet) {
      case 0:
        this.setOne.incrementPoints(teamIndex);
        endSet = this.setOne.checkSet();
        break;
      case 1:
        this.setTwo.incrementPoints(teamIndex);
        endSet = this.setTwo.checkSet();
        break;
      case 2:
        this.setThree.incrementPoints(teamIndex);
        endSet = this.setThree.checkSet();
        break;
      default:
        break;
    }
    console.log(this.toString());

    return endSet ? this.incrementCurrentSet() : this.currentSet;
  };

  getPointsFromCurrentSet = (teamIndex: number) => {
    let valueToReturn = 0;
    switch (this.currentSet) {
      case 0:
        valueToReturn = this.setOne.getPoints(teamIndex);
        break;
      case 1:
        valueToReturn = this.setTwo.getPoints(teamIndex);
        break;
      case 2:
        valueToReturn = this.setThree.getPoints(teamIndex);
        break;
      default:
        break;
    }
    return valueToReturn;
  };

  // RESET ALL
  clear(): void {
    this.setOne.clear();
    this.setTwo.clear();
    this.setThree.clear();
    this.currentSet = 0;
    this.ballPossession = true;
    this.finish = false;
  }

  toString(): string {
    return `
        current set ${this.currentSet}
        set 1: ${this.setOne.toString()}
        set 2: ${this.setTwo.toString()}
        set 3: ${this.setThree.toString()}
        ball A: ${this.ballPossession} B: ${!this.ballPossession}
    `;
  }
}

export default Match;
