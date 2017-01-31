function decryptArray(boardArray) {

	var grouping0 = identifyGroup(0, 0, 0, boardArray);
	var grouping1 = identifyGroup(0, 3, 0, boardArray);
	var grouping2 = identifyGroup(2, 0, 0, boardArray);
	var grouping3 = identifyGroup(2, 3, 0, boardArray);
	var grouping4 = identifyGroup(4, 0, 0, boardArray);
	var grouping5 = identifyGroup(4, 3, 0, boardArray);
	var grouping6 = identifyGroup(6, 0, 0, boardArray);
	var grouping7 = identifyGroup(6, 3, 0, boardArray);
	var grouping8 = identifyGroup(0, 7, 1, boardArray);
	var grouping9 = identifyGroup(3, 7, 1, boardArray);
	var message = "";
	message = message + decryptGroup(grouping0);
	message = message + decryptGroup(grouping1);
	message = message + decryptGroup(grouping2);
	message = message + decryptGroup(grouping3);
	message = message + decryptGroup(grouping4);
	message = message + decryptGroup(grouping5);
	message = message + decryptGroup(grouping6);
	message = message + decryptGroup(grouping7);
	message = message + decryptGroup(grouping8);
	message = message + decryptGroup(grouping9);
	return message;
}

//@param initialX: X value of the first place looked at in the 6 positions
//@param initialY: Y value of the first place looked at in the 6 positions
//@parma direction: direction of second place looked at during decryption
//					0 means right, 1 means downs, 2 means left, 3 means up
//@param boardArray: the entire chess board to decrypt
function identifyGroup(initialY, initialX, direction, boardArray) {

	var grouping = [0, 0, 0, 0, 0, 0];

	if (direction == 0)
	{
		for (var index = 0; index < 3; index++)
		{
			if (boardArray[initialY][initialX + Number(index)] != "")
			{
				grouping[index] = 1;
			}

		}
		for (var index = 0; index < 3; index++)
		{
			if (boardArray[initialY + 1][initialX + Number(index)] != "")
			{
				grouping[index + 3] = 1;
			}

		}
	}
	else if (direction == 1)
	{
		for (var index = 0; index < 3; index++)
		{
			if (boardArray[initialY + index][initialX] != "")
			{
				grouping[index] = 1;
			}
		}
		for (var index = 0; index < 3; index++)
		{
			if (boardArray[initialY + index][initialX - 1] != "")
			{
				grouping[index + 3] = 1;
			}
		}		
	}
	else if (direction == 2)
	{
		for (var index = 0; index < 3; index++)
		{

		}
		for (var index = 0; index < 3; index++)
		{

		}		
	}
	else if (direction == 3)
	{
		for (var index = 0; index < 3; index++)
		{

		}
		for (var index = 0; index < 3; index++)
		{

		}		
	}
	return grouping;
}
function decryptGroup(grouping) {

	if (grouping[0] == 1)
	{
		if (grouping[1] == 1)
		{
			if (grouping[2] == 1)
			{
				return "A";
			}
			else if (grouping[3] == 1)
			{
				return "B";				
			}
			else if (grouping[4] == 1)
			{
				return "C";				
			}
			else if (grouping[5] == 1)
			{
				return "D";				
			}
			else
			{
				return "E";
			}
		}
		else if (grouping[2] == 1)
		{
			if (grouping[3] == 1)
			{
				return "F";				
			}
			else if (grouping[4] == 1)
			{
				return "G";				
			}
			else if (grouping[5] == 1)
			{
				return "H";				
			}
			else
			{
				return "I";				
			}
		}
		else if (grouping[3] == 1)
		{
			if (grouping[4] == 1)
			{
				return "J";				
			}
			else if (grouping[5] == 1)
			{
				return "K";				
			}
			else
			{
				return "L";				
			}
		}
		else if (grouping[4] == 1)
		{
			if (grouping[5] == 1)
			{
				return "M";				
			}
			else
			{
				return "N";
			}
		}
		else if (grouping[5] == 1)
		{
			return "O";
		}
		else
		{
			return "P";
		}
	}
	else if (grouping[1] == 1)
	{
		if (grouping[2] == 1)
		{
			if (grouping[3] == 1)
			{
				return "Q";				
			}
			else if (grouping[4] == 1)
			{
				return "R";				
			}
			else if (grouping[5] == 1)
			{
				return "S";				
			}
			else
			{
				return "T";					
			}
		}
		else if (grouping[3] == 1)
		{
			if (grouping[4] == 1)
			{
				return "U";					
			}
			else if (grouping[5] == 1)
			{
				return "V";				
			}
			else
			{
				return "W";				
			}
		}
		else if (grouping[4] == 1)
		{
			if (grouping[5] == 1)
			{
				return "X";					
			}
			else
			{
				return "Y";
			}
		}
		else if (grouping[5] == 1)
		{
			return "Z";
		}
		else
		{
			return "TH";			
		}
	}
	else if (grouping[2] == 1)
	{
		if (grouping[3] == 1)
		{
			if (grouping[4] == 1)
			{
				return "HE";					
			}
			else if (grouping[5] == 1)
			{
				return "AN";				
			}
			else
			{
				return "IN";				
			}
		}
		else if (grouping[4] == 1)
		{
			if (grouping[5] == 1)
			{
				return "ER";					
			}
			else
			{
				return "ND";
			}
		}
		else if (grouping[5] == 1)
		{
			return "RE";
		}
		else
		{
			return "ED";			
		}
		
	}
	else if (grouping[3] == 1)
	{
		if (grouping[4] == 1)
		{
			if (grouping[5] == 1)
			{
				return "ES";					
			}
			else
			{
				return "OU";
			}
		}
		else if (grouping[5] == 1)
		{
			return "TO";
		}
		else
		{
			return "HA";			
		}
	}
	else if (grouping[4] == 1)
	{
		if (grouping[5] == 1)
		{
			return "EN";
		}
		else
		{
			return "EA";			
		}		
	}
	else if (grouping[5] == 1)
	{
		return "ST";
	}
	else
	{
		return " ";
	}
}