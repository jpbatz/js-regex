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
    // actual phone numbers do not have zeroes in certain positions
    var temp = phrase.match(/\b[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}\b/g);
    console.log("temp: " + temp);
    return temp;
  }

};
