exports.isCharacterMatch = function(string1,string2) {

    for (let char of string1){
        if (string2.toLowerCase().includes(char.toLowerCase())){
            return true
        }
    }
    return false
};


