/*Exercise 42
Create a new index42.js file
Define the message and assign the following value:
Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.
Show the following output:

message text all in uppercase
message text all in lowercase
Transform the following text to uppercase:

Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. 
Transform the following text to lowercase:
Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.
Add \n special character to create new lines after each paragraph for both texts
Combine both texts into one variable (upper and lower case)
Show the final result using concat
Show the result character length with a descriptive message: The message has %chars% characters long
*/


var message="Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
var message1="Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. ";
var message2="Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
message1=message1+"\n";
message2=message2+"\n";
var messageCombin=message1.toUpperCase()+message2.toLowerCase();
console.log(message1.toUpperCase().concat(message2.toLowerCase()))
// READY PLAYER ONE IS A 2011 SCIENCE FICTION NOVEL, AND THE DEBUT NOVEL OF AMERICAN AUTHOR ERNEST CLINE. THE STORY, SET IN A DYSTOPIAN 2044, FOLLOWS PROTAGONIST WADE WATTS ON HIS SEARCH FOR AN EASTER EGG IN A WORLDWIDE VIRTUAL REALITY GAME, THE DISCOVERY OF WHICH WILL LEAD HIM TO INHERIT THE GAME CREATOR'S FORTUNE.
// cline sold the rights to publish the novel in june 2010, in a bidding war to the crown publishing group (a division of random house)]. the book was published on august 16, 2011. an audiobook was released the same day; it was narrated by wil wheaton, who was mentioned briefly in one of the chapters.ch. 20 in 2012, the book received an alex award from the young adult library services association division of the american library association and won the 2012 prometheus award.

console.log("The message has "+messageCombin.length+" characters long");
// The message has 793 characters long

