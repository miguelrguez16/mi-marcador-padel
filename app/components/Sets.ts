class Sets {
  // points sets
  pointsUserOne: number = 0;
  pointsUserTwo: number = 0;

  incrementPointsUserOne(): number {
    console.log(this.toString());
    return this.pointsUserOne++;
  }
  incrementPointsUserTwo(): number {
    console.log(this.toString());
    return this.pointsUserTwo++;
  }

  decrementPointsUserOne(): number {
    return this.pointsUserOne === 0 ? this.pointsUserOne : this.pointsUserOne--;
  }
  decrementPointsUserTwo(): number {
    return this.pointsUserTwo === 0 ? this.pointsUserTwo : this.pointsUserTwo--;
  }

  incrementPoints(teamIndex: number): number {
    return teamIndex === 0
      ? this.incrementPointsUserOne()
      : this.incrementPointsUserTwo();
  }

  clear(): void {
    this.pointsUserOne = 0;
    this.pointsUserTwo = 0;
  }

  getPoints(teamIndex: number): number {
    return teamIndex === 0 ? this.pointsUserOne : this.pointsUserTwo;
  }

  checkSet(): boolean {
    let difference = Math.abs(this.pointsUserOne - this.pointsUserTwo);
    return (
      (this.pointsUserOne >= 6 || this.pointsUserTwo >= 6) && difference >= 2
    );
  }

  toString(): string {
    return `A: ${this.pointsUserOne} - B: ${this.pointsUserTwo}`;
  }
}

export default Sets;
