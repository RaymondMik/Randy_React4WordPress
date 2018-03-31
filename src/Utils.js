class Utils {
    /**
     * Formats date to a readable human form
     */
    static formatDate(date) {
        let parseDate = date ? date.indexOf('T') : 0;
        let formatedDate = date ? date.substring(0, parseDate) : '';

        return formatedDate;
    }

    /**
     * Formats date to a readable human form
     * 
     * @param data.
     * @returns {Promise}.
     */
    static isDataFetched(data) {
        return new Promise(function(resolve) {
            if (data) {
                resolve(data);
            } 
        });
    };
}

export default Utils;