  function splitMessage(message)
  {
    var pieces = [];
    var count = 0;
    for (var index = 0; index < message.length; index++)
    {
      if (message.charAt(index) == 'T' && (message.charAt(index + 1) === 'H' || message.charAt(index + 1) === 'O'))
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;
      }
      else if (message.charAt(index) === 'H' && (message.charAt(index + 1) === 'E' || message.charAt(index + 1) === 'A'))
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'A' && message.charAt(index + 1) === 'N')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'I' && message.charAt(index + 1) === 'N')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'E' && (message.charAt(index + 1) === 'R' || message.charAt(index + 1) === 'D' || message.charAt(index + 1) === 'S' || message.charAt(index + 1) === 'N' || message.charAt(index + 1) === 'A'))
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'N' && message.charAt(index + 1) === 'D')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'R' && message.charAt(index + 1) === 'E')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'O' && message.charAt(index + 1) === 'U')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'T' && message.charAt(index + 1) === 'O')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else if (message.charAt(index) === 'S' && message.charAt(index + 1) === 'T')
      {
        pieces[count] = message.substring(index, index + 2);
        index++;
        count++;              
      }
      else
      {
        pieces[count] = message.charAt(index);
        count++
      }

    }
    return pieces;
  }
  function determineGrouping(messagePiece)
  {
    if (messagePiece === "A")
    {
      return [1, 1, 1, 0, 0 ,0];
    }
    else if (messagePiece === "B")
    {
      return [1, 1, 0, 1, 0 ,0];    
    }
    else if (messagePiece === "C")
    {
      return [1, 1, 0, 0, 1 ,0];    
    }
    else if (messagePiece === "D")
    {
      return [1, 1, 0, 0, 0 ,1];    
    }
    else if (messagePiece === "E")
    {
      return [1, 1, 0, 0, 0 ,0];    
    }
    else if (messagePiece === "F")
    {
      return [1, 0, 1, 1, 0 ,0];    
    }
    else if (messagePiece === "G")
    {
      return [1, 0, 1, 0, 1 ,0];    
    }
    else if (messagePiece === "H")
    {
      return [1, 0, 1, 0, 0 ,1];    
    }
    else if (messagePiece === "I")
    {
      return [1, 0, 1, 0, 0 ,0];    
    }
    else if (messagePiece === "J")
    {
      return [1, 0, 0, 1, 1 ,0];    
    }
    else if (messagePiece === "K")
    {
      return [1, 0, 0, 1, 0 ,1];    
    }
    else if (messagePiece === "L")
    {
      return [1, 0, 0, 1, 0 ,0];    
    }
    else if (messagePiece === "M")
    {
      return [1, 0, 0, 0, 1 ,1];    
    }
    else if (messagePiece === "N")
    {
      return [1, 0, 0, 0, 1 ,0];    
    }
    else if (messagePiece === "O")
    {
      return [1, 0, 0, 0, 0 ,1];    
    }
    else if (messagePiece === "P")
    {
      return [1, 0, 0, 0, 0 ,0];    
    }
    else if (messagePiece === "Q")
    {
      return [0, 1, 1, 1, 0 ,0];    
    }
    else if (messagePiece === "R")
    {
      return [0, 1, 1, 0, 1, 0];    
    }
    else if (messagePiece === "S")
    {
      return [0, 1, 1, 0, 0, 1];    
    }
    else if (messagePiece === "T")
    {
      return [0, 1, 1, 0, 0, 0];    
    }
    else if (messagePiece === "U")
    {
      return [0, 1, 0, 1, 1, 0];    
    }
    else if (messagePiece === "V")
    {
      return [0, 1, 0, 1, 0, 1];    
    }
    else if (messagePiece === "W")
    {
      return [0, 1, 0, 1, 0, 0];    
    }
    else if (messagePiece === "X")
    {
      return [0, 1, 0, 0, 1, 1];    
    }
    else if (messagePiece === "Y")
    {
      return [0, 1, 0, 0, 1, 0];    
    }
    else if (messagePiece === "Z")
    {
      return [0, 1, 0, 0, 0, 1];    
    }
    else if (messagePiece === "TH")
    {
      return [0, 1, 0, 0, 0, 0];    
    }
    else if (messagePiece === "HE")
    {
      return [0, 0, 1, 1, 1, 0];    
    }
    else if (messagePiece === "AN")
    {
      return [0, 0, 1, 1, 0, 1];    
    }
    else if (messagePiece === "IN")
    {
      return [0, 0, 1, 1, 0, 0];    
    }
    else if (messagePiece === "ER")
    {
      return [0, 0, 1, 0, 1, 1];    
    }
    else if (messagePiece === "ND")
    {
      return [0, 0, 1, 0, 1, 0];    
    }
    else if (messagePiece === "RE")
    {
      return [0, 0, 1, 0, 0, 1];    
    }
    else if (messagePiece === "ED")
    {
      return [0, 0, 1, 0, 0, 0];    
    }
    else if (messagePiece === "ES")
    {
      return [0, 0, 0, 1, 1, 1];    
    }
    else if (messagePiece === "OU")
    {
      return [0, 0, 0, 1, 1, 0];    
    }
    else if (messagePiece === "TO")
    {
      return [0, 0, 0, 1, 0, 1];    
    }
    else if (messagePiece === "HA")
    {
      return [0, 0, 0, 1, 0, 0];    
    }
    else if (messagePiece === "EN")
    {
      return [0, 0, 0, 0, 1, 1];    
    }
    else if (messagePiece === "EA")
    {
      return [0, 0, 0, 0, 1, 0];    
    }
    else if (messagePiece === "ST")
    {
      return [0, 0, 0, 0, 0, 1];    
    }
    else (messagePiece === " ")
    {
      return [0, 0, 0, 0, 0, 0];    
    }
  }

  function getBoardFromGroupings(groupings)
  {
    var boardArray = new Array(8);
    for (var k = 0; k < 8; k++)
    {
      boardArray[k] = new Array(8);
    }
    //loop through groups 0, 2, 4, 6

    for (var groupIndex = 0; groupIndex < 8; groupIndex = groupIndex + 2)
    {
      for (var j = 0; j < 3; j++)
      {
              //change board array at [i + groupIndex][j]
              //to be equal to pieces[groupIndex][j]

        boardArray[groupIndex][j] = pieces[groupIndex][j];
      }
      for (var j = 0; j < 3; j++)
      {
              //change board array at [i + groupIndex][j]
              //to be equal to pieces[groupIndex][j]

        boardArray[1 + groupIndex][j] = pieces[groupIndex][j +3];
      }

    }

        //loop through groups 1, 3, 5, 7

        for (var groupIndex = 1; groupIndex < 8; groupIndex = groupIndex + 2)
        {
          for (var j = 3; j < 6; j++)
          {
              //change board array at [i + groupIndex][j]
              //to be equal to pieces[groupIndex][j]

              boardArray[groupIndex - 1][j] = pieces[groupIndex][j - 3];
            }
            for (var j = 3; j < 6; j++)
            {
              //change board array at [i + groupIndex][j]
              //to be equal to pieces[groupIndex][j]

              boardArray[groupIndex][j] = pieces[groupIndex][j];
            }

          }

        //loop through groups 8, 9
        boardArray[0][7] = pieces[8][0];
        boardArray[1][7] = pieces[8][1];
        boardArray[2][7] = pieces[8][2];
        boardArray[0][6] = pieces[8][3];
        boardArray[1][6] = pieces[8][4];
        boardArray[2][6] = pieces[8][5];

        boardArray[3][7] = pieces[9][0];
        boardArray[4][7] = pieces[9][1];
        boardArray[5][7] = pieces[9][2];
        boardArray[3][6] = pieces[9][3];
        boardArray[4][6] = pieces[9][4];
        boardArray[5][6] = pieces[9][5];


        boardArray[6][7] = 0;
        boardArray[6][6] = 0;
        boardArray[7][6] = 0;
        boardArray[7][7] = 0;

        return boardArray;
  }
function getFENFromBoard(boardArray)
{
  var listOfPiecesInOrder = ["R", "K", "Q", "P", "N", "P", "k", "r", "r", "R", "N", "P", "P", "P", "P", "P", "P", "p", "p", "p", "p", "p", "p", "B", "B", "b", "b", "q"];

  var FENcode = "";
  var piecesPlaced = 0;
  //loops through each line
  for (var boardHeight = 0; boardHeight < 8; boardHeight++)
  {
    var countSinceLastPiece = 0;
    for (var boardWidth = 0; boardWidth < 8; boardWidth++)
    {
      if (boardArray[boardHeight][boardWidth] == 0)
      {
        countSinceLastPiece++;
      }
      else
      {
        if (countSinceLastPiece > 0)
        {
          FENcode = FENcode + countSinceLastPiece;
          countSinceLastPiece = 0;
        }
        FENcode = FENcode + listOfPiecesInOrder[piecesPlaced];
        piecesPlaced++;

      }
    }
    if (countSinceLastPiece > 0)
    {
      FENcode = FENcode + countSinceLastPiece;
      countSinceLastPiece = 0;
    }    
    FENcode = FENcode + "/";
  }

  FENcode = FENcode.substring(0, FENcode.length - 1);
  return FENcode;
}