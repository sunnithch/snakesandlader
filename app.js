   
        //store the co-ordinates of all the squares.
        var squares = new Array();

        var canvas = document.getElementById("board");
        var context = canvas.getContext("2d");
        var contextText = canvas.getContext("2d");
        var squareSize = canvas.height / 10;
        
        
        var _currentPos = 0;
        
        RenderSquareBoard();
        RenderSnakeAndLadders();      
        

        //creates gameboard
        function RenderSquareBoard() 
        {        
            var colorA = "white";
            var colorB = "aqua";
            
            var initRow = 1; var totalRows = 10; var initcolumn = 1; var totalColumns = 10;

            var x = 0; var y = canvas.height - squareSize;

            var columnNr = 1; var leftToRight = true;

            //this adds numbers and color to the board
            for (var row = initRow; row <= totalRows; row++) 
            {
                if (leftToRight) 
                {
                    x = 0;
                }
                else 
                {
                    x = canvas.width - squareSize;
                }

                for (var column = initcolumn; column <= totalColumns; column++) 
                {
                    if (columnNr % 2 == 0) 
                    {
                        context.fillStyle = colorA;
                    }
                    else 
                    {
                        context.fillStyle = colorB;
                    }
                    context.fillRect(x, y, squareSize, squareSize);

                    squares[columnNr] = x.toString() + ',' + y.toString();

                    contextText.font = "15px tahoma";
                    contextText.fillStyle = "blue";
                    contextText.fillText(columnNr, x, y + squareSize);

                    var x1, y1
                    if (leftToRight) 
                    {
                        x += squareSize;

                        x1 = x + (squareSize / 2);
                    }
                    else 
                    {
                        x -= squareSize;
                        x1 = x - (squareSize / 2);
                    }

                    y1 = y - (squareSize / 2);

                    columnNr++;
                }

                y -= squareSize;
                leftToRight = !leftToRight;
            }
        }


        // this adds snake and ladder images to the board        function RenderSnakeAndLadders()
        {
            var img = new Image();
            img.onload = function () 
            {
            context.drawImage(img, 66, 0,60,60);
            // context.beginPath();
            // context.moveTo(0, 0);
            // context.lineTo(300, 150);
            // context.stroke();
            };
            img.src = "Images/snake.png";

            var img1 = new Image();
            img1.onload = function () 
            {
            context.drawImage(img1, 66, 390,60,60);
            };
            img1.src = "Images/snake.png";

            var img2 = new Image();
            img2.onload = function () {
                context.drawImage(img2, 66, 520,60,60);
            };
            img2.src = "Images/snake.png";

            var img3 = new Image();
            img3.onload = function () 
            {
                context.drawImage(img3, 380, 260,60 , 60);
            };
            img3.src = "Images/ladder.png";  
            var img4 = new Image();          
            img4.onload = function () 
            {
                context.drawImage(img3, 380, 75,60 , 60);
            };
            img4.src = "Images/ladder.png";  
            var img5 = new Image();          
            img5.onload = function () 
            {
                context.drawImage(img3, 130, 585,60 , 60);
            };
            img5.src = "Images/ladder.png";            
        }

        function initGame() 
        {
            window.location.reload();           
        }


        // creates the random num i.e, to assume as dice
        function GenerateRandomNumber(max) 
        {
            // max dictates that the random number will fall between 0-max
            var rnd = Math.floor(Math.random() * (max + 1))

            if (rnd == 0)
            {
                rnd = 1;
            }
        return rnd;
        }


        //this function generates a number and moves the pawn new place
        function nextMove() 
        {
            var newMove = GenerateRandomNumber(6);
            alert("You got : " + newMove);
            _currentPos = _currentPos + newMove;

            switch (_currentPos) 
            {
            //ladder
            case 3:
            _currentPos = 21;
            break;
            //ladder
            case 54:
            _currentPos = 88;
            break;
            //Ladder
            case 87:
            _currentPos = 98;
            break;
            //snake
            case 99:
            _currentPos = 35;
            break;
            //snake
            case 19:
            _currentPos = 2;
            break; 
            //snake
            case 39:
            _currentPos = 13;
            break;            
            }

            var coorintaes = squares[_currentPos];
            coorintaes = coorintaes.split(',');

            // context.fillRect(coorintaes[0], coorintaes[1], squareSize, squareSize);
            
            var imgp= new Image();
            imgp.src='Images/pawn.png';
            
            context.drawImage(imgp,coorintaes[0], coorintaes[1], squareSize, squareSize)
            if (_currentPos == 100)
            {
                alert("Congratulations, you have won the game :)");
                initGame();
            }
        }