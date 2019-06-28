const addon = require('../../build/Release/addon');

class AddonService{
    /**
     *
     * @param value
     * @return {Promise<boolean|*>}
     */
    static async getFactorial(value){
        try {
            return addon.factorial(value*1);
        }catch (e) {
            return false;
        }
    }
}

module.exports = AddonService;
