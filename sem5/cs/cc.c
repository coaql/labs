//CONVERT STR TO CYPHERED STR	
#include "stdio.h"
#include "string.h"

int main()
{
	char* pass;
	char* encryp_pass;
	int key = 3;

							//Take input str 
	printf("Enter a string : ");
	scanf("%s",pass);

	for(int i = 0, n = strlen(pass); i < n; i++)
	{
							//iterate over str and cypher each char
		if ( *(pass+i) >= 'A' &&  *(pass+i) <= 'Z')
		{
			char cypher = (*(pass + i ) - 'A' + key ) % 26 ;
								//also store each char in a new str
			*(encryp_pass + i) = cypher + 'A';	
		}
		else if ( *(pass+i) >= 'a' &&  *(pass+i) <= 'z')
		{
			char cypher = (*(pass + i ) - 'a' + key ) % 26 ;
								//also store each char in a new str
			*(encryp_pass + i) = cypher + 'a';	
		}
		else 
			*(encryp_pass + i) = *(pass + i);

	}

	printf("Encrypted pass : %s\n", encryp_pass);

}
