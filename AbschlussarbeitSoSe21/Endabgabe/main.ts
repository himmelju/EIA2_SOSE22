/*
Aufgabe: <Abschlussarbeit S21>
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <18.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Tristan Trefz, Martin Fuhr, Dilara Doganer, Sophie Heuvels, weitere Quellen: Inverted Classroon, Internet>
*/
namespace Endabgabe {
    
    window.addEventListener("load", handleload);

    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let ctx: CanvasRenderingContext2D;

    let ui: UI;

    // whether the animation is executed or not
    let animationIsRunning: boolean = false;

    // current time left
    let time: number = 0;
    let lastTime: Date;

    // list of all moveable objects in scene
    let listOfMoveables: Movable[] = [];

    let field: SoccerField;

    let ball: Ball;

    let mousePos: Vector;

    let currentBallLeaders: Player[] = [];

    // instance of team-ui
    let teamUi: TeamUI;


    // default configuration how to draw player IPlayerDrawOptions is Interface
    let playerDrawOptions: IPlayerDrawOptions = {
        showActionRadius: false,
        showPlayerOrigin: false
    };

    //Postion of Mouse on canvas
    function getMousePosInCanvas(ev: MouseEvent): Vector {
        const rect: DOMRect = canvas.getBoundingClientRect();
        return new Vector(
            (ev.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
            (ev.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
        );
    }

    function handleload(): void {
       
        field = new SoccerField();

        //Canvas gets height and size of soccerfield and 2x padding
        canvas.width = field.getWidth() + (2 * field.getPadding());
        canvas.height = field.getHeight() + (2 * field.getPadding());

        //canvas cant be undefind or 0. Canvas needs values of Soccerfield, then return gives back value to Soccerfield in canvas 
        if (!canvas) { return; }

        // instantiate team-ui 
        teamUi = new TeamUI();

        // keyup looks for space
        document.addEventListener("keyup", start );

        function start (e: KeyboardEvent): void {
            // start animation on space key
            if (e.code == "Space") {
                startAnimation();
            }
        }

        let visChange: HTMLInputElement = <HTMLInputElement> document.getElementById("toggle-player-radius");

        visChange.addEventListener("change", handleVisChange);
        
        function handleVisChange(event: Event): void {
            const el: HTMLInputElement = event.target as HTMLInputElement;
            playerDrawOptions.showActionRadius = el.checked;
        }

        let originChange: HTMLInputElement = <HTMLInputElement> document.getElementById("toggle-player-origin");

        originChange.addEventListener("change", handleOriginChange);

        function handleOriginChange (event: Event): void {
            const el: HTMLInputElement = event.target as HTMLInputElement;
            playerDrawOptions.showPlayerOrigin = el.checked;
        }
        

        // catch mousemove events to get current mouse position
        canvas.addEventListener("mousemove", mouseMove); 
            
        function mouseMove (ev: MouseEvent): void {
            mousePos = getMousePosInCanvas(ev);

            (listOfMoveables
                .filter((p) => p instanceof Player && p.isActive()) as Player[])
                .forEach((p: Player) => {
                    p.dehighlight();
                    if (distance(mousePos, p.getPosition()) - p.getRadius() <= 0) {
                        p.highlight();
                    }
                });

        }

        canvas.addEventListener("click", ballLeader);

        function ballLeader(): void {
            // only handle click if one player has the ball
            if (currentBallLeaders.length == 0) { return; }

            // calc new random pos inside precision radius of the player
            const randomX: number = randomInteger(-calcPrecisionRadius(), calcPrecisionRadius());
            const randomY: number = randomInteger(-calcPrecisionRadius(), calcPrecisionRadius());

            // update ball speed relative to players shotpower
            ball.setSpeed(currentBallLeaders[0].getShotPower());

            // updates target where the ball should follow
            ball.setTarget(new Vector(mousePos.X + randomX, mousePos.Y + randomY));

            startAnimation();
        }

        ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

        // creates instance of general ui
        ui = new UI();

        // set default score
        ui.setHomeScore(0);
        ui.setAwayScore(0);

        startClock();

        createGame();

        // requests frame to update animation
        window.requestAnimationFrame(updateAnimation);

        let gameStart: HTMLElement = <HTMLElement> document.getElementById("game-start");

        // handle click on start button to restart animation
        gameStart.addEventListener("click", handleGameStart);

        function handleGameStart(): void {
            startAnimation();
        }

        // redraw team ui
        teamUi.draw(listOfMoveables.filter((l) => l instanceof Player) as Player[]);
    }

    function startClock(): void {
        lastTime = new Date();
        // updates clock every 250 milliseconds
        setInterval(function(): void {
            if (animationIsRunning) {
                time += new Date().getTime() - (lastTime?.getTime());
            }
            lastTime = new Date();
        },          250);
    }


    function reset(randomBallPosition: boolean = false): void {
        listOfMoveables.forEach(resetEach);
        function resetEach(p: Movable): void {
            if (p instanceof Player) {
                if (randomBallPosition == false) {
                    // set player position to its origin
                    p.setPosition(new Vector(p.getOrigin().X, p.getOrigin().Y));
                }
            } else if (p instanceof Ball) {
                // sets ball position
                p.setPosition(new Vector(
                    randomBallPosition ? randomInteger(field.getPadding(), field.getPadding() + field.getWidth()) : field.getPadding() + field.getWidth() / 2,
                    randomBallPosition ? randomInteger(field.getPadding(), field.getPadding() + field.getHeight()) : field.getPadding() + field.getHeight() / 2
                ));
                p.setTarget(new Vector(p.getPosition().X, p.getPosition().Y));
            }
        }

    }


    function createGame(): void {
        listOfMoveables = [];
        // instantiate a ball
        ball = new Ball(new Vector(field.getPadding() + (field.getWidth() / 2), field.getPadding() + (field.getHeight() / 2)));

        createHomeTeam();

        createAwayTeam();

        createAssistance();

        listOfMoveables.push(ball);
        
    }

    function stopAnimation(): void {
        animationIsRunning = false;
    }


    function startAnimation(): void {
        animationIsRunning = true;
    }

    function createAssistance(): void {
        // creates arbitator with random position
        const arbit: Arbitrator = new Arbitrator(new Vector(
            randomInteger(field.getPadding(), field.getPadding() + field.getWidth()),
            randomInteger(field.getPadding(), field.getPadding() + field.getHeight())
        ));
        arbit.setColor("black");

        arbit.setSpeed(60);


        // creates upper linesman
        const linesmanTop: Linesman = new Linesman(new Vector(
            randomInteger(field.getPadding(), field.getPadding() + field.getWidth() / 2),
            field.getPadding()
        ));
        linesmanTop.setColor("pink");
        linesmanTop.setSpeed(80);

        // set target relative to the most left player
        linesmanTop.setTargetFn(targetFnTop);

        function targetFnTop(): Vector {
            const x: number[] = listOfMoveables.filter((p) => p instanceof Player && p.isActive()).map((p) => p.getPosition().X);
            return new Vector(
                Math.min(...x),
                linesmanTop.getPosition().Y
            );
        }

        // creates bootom linesman
        const linesmanBottom: Linesman = new Linesman(new Vector(
            randomInteger(field.getPadding() + field.getWidth() / 2, field.getPadding() + field.getWidth()),
            field.getPadding() + field.getHeight()
        ));
        linesmanBottom.setColor("pink");
        linesmanBottom.setSpeed(80);

        // set target relative to the most right player
        linesmanBottom.setTargetFn(targetFnBot);

        function targetFnBot(): Vector {
            const x: number[] = listOfMoveables.filter((p) => p instanceof Player && p.isActive()).map((p) => p.getPosition().X);
            return new Vector(
                Math.max(...x),
                linesmanBottom.getPosition().Y
            );
        }

        // add assistance to list of movable objects
        listOfMoveables.push(arbit, linesmanBottom, linesmanTop);

    }

    function createHomeTeam(): void {
        // set team number
        const teamnumber: number = 1;

        // default player radius
        const defaultPlayerRadius: number = 2 * scale;

        // set default team color
        const teamColor: string = "green";

        // get segements for setting player positions by algorithm
        const segmentY: number = (field.getHeight() / 4);
        const segmentX: number = (field.getWidth() / 3);

        const preColor: HTMLElement = <HTMLLIElement>document.getElementById("score-pre");
        if (preColor) { preColor.style.background = teamColor; }

        // creates goalkeeper
        const tw: Player = new Player(`Player TW`, new Vector(field.getPadding(), field.getPadding() + (field.getHeight() / 2)),
                                      randomInteger(30, 90), randomInteger(30, 90), randomInteger(30, 90), teamColor, teamnumber, 1);

        // creates defence and midfield
        for (let i: number = 1; i <= 2; i++) {
            for (let j: number = 1; j <= 4; j++) {
                const player: Player = new Player(
                    `Player ${i * j + 1}`,
                    new Vector(
                        field.getPadding() + ((segmentX * i) - (segmentX / 2)) - defaultPlayerRadius,
                        field.getPadding() + ((segmentY * j) - (segmentY / 2))
                    ),
                    randomInteger(30, 90),
                    randomInteger(30, 90),
                    randomInteger(30, 90),
                    teamColor,
                    teamnumber,
                    i * j + 1
                );
                listOfMoveables.push(player);
            }
        }

        // create offensive players
        const p10: Player = new Player(
            `Player 10`,
            new Vector(
                field.getPadding() + ((segmentX * 3) - (segmentX / 2)),
                field.getPadding() + ((segmentY * 2) / 2)
            ),
            randomInteger(30, 90), randomInteger(30, 90),
            randomInteger(30, 90),
            teamColor,
            teamnumber,
            10
            );
            
        const p11: Player = new Player(
            `Player 11`,
            new Vector(
                field.getPadding() + ((segmentX * 3) - (segmentX / 2)),
                field.getPadding() + ((segmentY * 4) - (segmentY))
            ),
            randomInteger(30, 90),
            randomInteger(30, 90),
            randomInteger(30, 90),
            teamColor,
            teamnumber,
            11
            );

        // creates exaclty six substitutes
        for (let i: number = 0; i < 6; i++) {
            const p: Player = new Player(`Substitute ${i + 1}`, new Vector(0, 0), randomInteger(30, 90), randomInteger(30, 90), randomInteger(30, 90), teamColor, teamnumber, 12 + i);
            p.setActive(false);
            listOfMoveables.push(p);
        }

        listOfMoveables.push(tw, p10, p11);
    }

    function createAwayTeam(): void {
        // set different team number than home
        const teamnumber: number = 2;

        // default player radius
        const defaultPlayerRadius: number = 2 * scale;

        // get segements for setting player positions by algorithm
        const segmentY: number = (field.getHeight() / 4);
        const segmentX: number = (field.getWidth() / 3);
        const teamColor: string = "red";

        const postColor: HTMLElement | null = document.getElementById("score-post");
        if (postColor) { postColor.style.background = teamColor; }

        // creates goalkeeper
        const tw: Player = new Player(
            `Player TW`,
            new Vector(
                field.getPadding() + field.getWidth(),
                field.getPadding() + (field.getHeight() / 2)
            ),
            randomInteger(30, 90),
            randomInteger(30, 90),
            randomInteger(30, 90),
            teamColor,
            teamnumber,
            99
        );

        // creates defensive and midfield players
        for (let i: number = 1; i <= 2; i++) {
            for (let j: number = 1; j <= 4; j++) {
                const player: Player = new Player(
                    `Player ${i * j + 1}`,
                    new Vector(
                        (field.getPadding() + field.getWidth()) - (((segmentX * i) - (segmentX / 2))) + defaultPlayerRadius,
                        (field.getPadding() + field.getHeight()) - (((segmentY * j) - (segmentY / 2)))
                    ),
                    randomInteger(30, 90),
                    randomInteger(30, 90),
                    randomInteger(30, 90),
                    teamColor,
                    teamnumber,
                    i * j + 1
                );
                listOfMoveables.push(player);
            }
        }

        // creates offensive players
        const p13: Player = new Player(
            `Player 13`,
            new Vector(
                (field.getPadding() + field.getWidth()) - (((segmentX * 3) - (segmentX / 2))),
                field.getPadding() + ((segmentY * 2) / 2)
            ),
            randomInteger(30, 90),
            randomInteger(30, 90),
            randomInteger(30, 90),
            teamColor,
            teamnumber,
            13
            );

        const p12: Player = new Player(
            `Player 12`,
            new Vector(
                (field.getPadding() + field.getWidth()) - (((segmentX * 3) - (segmentX / 2))),
                field.getPadding() + ((segmentY * 4) - (segmentY))
            ),
            randomInteger(30, 90),
            randomInteger(30, 90),
            randomInteger(30, 90),
            teamColor,
            teamnumber,
            12
            );

        // creates exactly six substitutes
        for (let i: number = 0; i < 6; i++) {
            const p: Player = new Player(`Substitute ${i + 1}`, new Vector(0, 0), randomInteger(30, 90), randomInteger(30, 90), randomInteger(30, 90), teamColor, teamnumber, 12 + i);
            p.setActive(false);
            listOfMoveables.push(p);
        }
        listOfMoveables.push(tw, p13, p12);
    }

    function updateAnimation(): void {
        // redraws field
        field.draw();

        // if no one has the ball clear the players ui
        if (currentBallLeaders.length == 0) { PlayerUI.draw(null); }

        // iterates over all moveable objects and animates them
        for (let movable of listOfMoveables) {
            // if linesman
            if (movable instanceof Linesman) {
                // move only if animation is running
                if (animationIsRunning) {
                    movable.move(movable.getTargetFn());
                }
                movable.draw();
                // if arbitrator  
            } else if (movable instanceof Arbitrator) {
                // move only if animation is running
                if (animationIsRunning) {
                    if (randomInteger(0, 100) > 95) {
                        movable.setTarget(new Vector(
                            randomInteger(field.getPadding(), field.getPadding() + field.getWidth()),
                            randomInteger(field.getPadding(), field.getPadding() + field.getHeight())
                        ));
                    }
                    movable.move(movable.getTarget());
                }
                movable.draw();

                // if ball
            } else if (movable instanceof Ball) {
                // if ball has a target and animation is running
                if (ball.getTarget() && animationIsRunning) {
                    // get distance between ball and balls target
                    const d: number = distance(movable.getPosition(), ball.getTarget());

                    // if ball is not at target, move it
                    if (d > 0) {
                        movable.move(ball.getTarget());

                        // if ball is in right goal
                        if (field.isAwayGoal(movable)) {
                            // upadte score for home team
                            ui.setHomeScore(ui.getHomeScore() + 1);
                            stopAnimation();
                            // reset positions to default
                            reset();
                            // if ball is in left goal
                        } else if (field.isHomeGoal(movable)) {
                            // update score for away team
                            ui.setAwayScore(ui.getAwayScore() + 1);
                            stopAnimation();
                            // reset positions to default
                            reset();
                            // if ball is out of bounds
                        } else if (field.isOutOfBounds(movable)) {
                            stopAnimation();
                            // randomize ball to simulate throw in
                            reset(true);
                        }
                    }
                }
                // draw ball
                movable.draw();
                // if player
            } else if (movable instanceof Player) {
                // calc distance between player and ball (subtract radius of both for real collision detection)
                const d: number = distance(movable.getPosition(), ball.getPosition()) - movable.getRadius() - ball.getRadius();
                const p: Player = movable;
                // check if current player is on of the surrounding players 
                const isBallLeader: number = currentBallLeaders.findIndex((l) => l.getId() == p.getId());

                // if player is one of the surrounding players remove it from the list so the player can again get the ball
                if (isBallLeader >= 0 && d > 0) {
                        currentBallLeaders.splice(isBallLeader);
                        // if distance to ball is lesser than 0 and player is not one of the surrounding players, 
                        // now the player will become part of the surrounding players
                    }

                if (d <= 0 && isBallLeader == -1) {
                            // check if the current player isn't the ball leading player
                            if (!(currentBallLeaders.length > 0 && movable.getId() === currentBallLeaders[0].getId())) {
                                // set player as surrounding player
                                currentBallLeaders.push(movable);
                                // redraw player ui
                                PlayerUI.draw(movable);
                            }

                            // stops animation
                            stopAnimation();
                            // if distance is smaller than action radius, move player to ball
                } else if (d <= movable.getActionRadius() && animationIsRunning) {
                            // move player to current ball position
                            movable.move(ball.getPosition());
                } else if (animationIsRunning) {
                            // move player to its original position
                            movable.move(movable.getOrigin());
                        }

                        // draw only if player is on field (isActive()==true) otherwise ignore (isActive()==fale)
                if (movable.isActive()) {
                    movable.draw(playerDrawOptions);
                    }
            }

            // draw circle to show precision radius of ball leading player
            if (mousePos && currentBallLeaders?.length > 0) { mousePos.draw("red", calcPrecisionRadius()); }

            // draws little blue dot to mark balls target
            if (ball.getTarget()) { ball.getTarget().draw("blue"); }
        }

        // redraw ui for clock
        ui.draw(time);

        // requests next frame
        window.requestAnimationFrame(updateAnimation);
    }

    
    function calcPrecisionRadius(): number {
        // calculates precision by deviding distance of ball to mouse
        const additionalPrecision: number = (distance(mousePos, ball.getPosition()) / 100);

        // combine precision factors
        return ((10.5 - (currentBallLeaders[0].getPrecision() / 10)) + additionalPrecision) * scale;
    }
}