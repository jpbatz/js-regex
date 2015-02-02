module.exports = {

  /**
   * Returns the href value from an element
   * @param  {String} element    the string of an HTML element
   * @return {[String]}          the href value
   */
  findHRef: function(element) {
    return(element.match(/[hH][tT]{2}[pP][sS]?:\/\/(www\.)?([a-zA-Z_]+\.)+[a-zA-Z]{2,4}/g));
  },

  /**
   * Finds all the phone numbers in a phrase
   * @param  {String} element    the string of an HTML element
   * @return {[String]]}         the string of the HTML element with the new link
   */
  replaceLink: function(element, link) {
    var regexa = new RegExp(/[hH][tT]{2}[pP][sS]?:\/\/(www\.)?([a-zA-Z_]+\.)+[a-zA-Z]{2,4}/);
    return(element.replace(regexa, link));
  }

};