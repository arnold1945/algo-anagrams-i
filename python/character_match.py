# Don't forget to run your tests!


def is_character_match(string1, string2):
    
    
    for char in string1:
        if char.lower() in string2.lower():
            return True
        else:
            False

        
