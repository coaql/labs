def cipher(password, key) :
	cipher_text = str()
								#loop every char
	for char in password :
								#(to char, add key, subtract 'A') mod with 26
		if ord(char) >= ord('A') and ord(char) <= ord('Z') :
			cipher_char = (ord(char) - ord('A') + key ) % 26 
			cipher_text += chr(cipher_char + ord('A'))
		elif ord(char) >= ord('a') and ord(char) <= ord('z') :
			cipher_char = (ord(char) - ord('a') + key ) % 26 
			cipher_text += chr(cipher_char + ord('a'))
		else :
			cipher_text += char			#special char not ciphered inc. space
	return cipher_text 

def decipher(cipher_text, key) :
								#reverse cipher i.e. key = -key
	decipher_text = str()
	for char in cipher_text :
		if ord(char) >= ord('A') and ord(char) <= ord('Z') :
			decipher_char = (ord(char) - ord('A') - key ) % 26 
			decipher_text += chr(decipher_char + ord('A'))
		elif ord(char) >= ord('a') and ord(char) <= ord('z') :
			decipher_char = (ord(char) - ord('a') - key ) % 26 
			decipher_text += chr(decipher_char + ord('a'))
		else :
			decipher_text += char
	return decipher_text 


def main() :
	password = input('Enter your password : ')
	key = 3							#ceaser cipher key size
	cipher_text = cipher(password, key) 
	print('Encrypted password : ' + cipher_text )
	print('Decrypted password : ' + decipher(cipher_text, key))

main()
