// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// Returns usersname and domain from an email adddress.
function emailParts(email){
    let processedContent = email.toLowerCase();
    return processedContent.split("@");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
      }
    
    this.processor = function(string) {
        return this.content.toLowerCase();
    }
    // Makes the phrase LOUDER.
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

     // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.translation.toLowerCase();
    }
  }

TranslatedPhrase.prototype = new Phrase();