const AddonService = require('../services/AddonService');

class AddonController {
    /**
     *
     * @param req
     * @param res
     * @return {Promise<*|Promise<any>>}
     */
    static async getFactorial(req, res){
        const factorial = await AddonService.getFactorial(req.body.number);

        if(isFinite(factorial)){
            return res.json({factorial});
        }else {
            return res.json({factorial: "Infinity"});
        }

    }
}

module.exports = AddonController;
