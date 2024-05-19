// get a reference to the text display class
import { useState } from "react";
const findBrowser = () => {
  const [chrome, setChrome] = useState(false);
  // define regex to detect chrome by checking userAgent string
  // regex is a regular expression used to perform searches
  // here we are using regex to search for the 'userAgent' (the name of
  const testBrowser = function (regexp: any) {
    return regexp.test(window.navigator.userAgent);
  };
  // test regex /chrome/i
  // returns true if the userAgent string contains 'chrome
  // the 'i' makes the regex test case-insensitive
  if (testBrowser(/chrome/i)) {
    setChrome(true);
  }
  return chrome;
};
export default findBrowser;
