const { v4: uuidV4 } = require('uuid');



class Band {
    constructor(name = 'no-name') {
        //con esta clase se obtendra el identificador unico
        this.id = uuidV4(); // Identificador unico
        this.name = name;
        this.vote = 0;;

    }
}



module.exports = Band;




