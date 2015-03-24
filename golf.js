// Katie Harold
// CMP237 Ch. 9 Exercise Regexp Golf
// Code from book

// Fill in the regular expressions

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
		
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/[a-z](ious)\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.|,|;|:]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\w[a-z]{6}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "golf.js") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
