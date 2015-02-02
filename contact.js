module.exports = {

  /**
   * Returns all the emails in a phrase.
   * @param  {String} phrase
   * @return {[String]} an array of emails, or an empty array if none are found.
   */
  findEmails: function(phrase) {
    var temp = phrase.match(/\b[a-zA-Z0-9_.]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}\b/g);
    console.log("temp: " + temp);
    if(!temp) {
      return [];
    } else {
      return temp;
    }
  },

  /**
   * Finds all the phone numbers in a phrase
   * @param  {String} phrase
   * @return {[String]]} an array of phone numbers.
   */
  findPhoneNumbers: function(phrase) {
    // according to http://www.nanpa.com/
    // "NANP (North American Numbering Plan) numbers are ten digits in length, and they are in the format:
    // NXX-NXX-XXXX, where N is any digit 2-9 and X is any digit 0-9.
    var temp = phrase.match(/[(]?\b[2-9][0-9]{2}[)-]?[ ]?[2-9][0-9]{2}[-]?[0-9]{4}\b/g)  // ??? note first 4 chars needs to be before "\b", why???
    console.log("temp: " + temp);
    return temp;
  }

};
