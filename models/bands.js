



class Bands {

    constructor() {
        this.bands = [];

    }

    addBand(band = new Band) {
        this.bands.push(band);

    }

    getBands() {
        return this.bands;
    }

    deletleBand(id = '') {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    voteBand(id = '') {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.vote++;
                return band;

            }
            else {
                return band;
            }
        });
    }


}

module.exports = Bands;