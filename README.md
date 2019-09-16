# guessanator
A number guessing game that illustrates the power of binary search.


Guess-a-nator is a simple number guessing game that illustrates the power of binary search. 

The player picks a number between 1 and 1,000 and the guess-a-nator attempts to guess their number. Because the player is required to indicated whether guess-a-nator's guess is too high, too low, or the correct number, guess-a-nator is able to guess the player's number in no more than 10 guesses. 

The search method used is called _binary search_. Binary search works by selecting the midpoint in a range of numbers that have been sorted into ascending order and then adjusting that midpoint based on whether the number being searched for is higher or lower than that midpoint. If the sought for number is higher, a new midpoint between the old midpoint and the highest value is chosen. If the sought for number is lower, a new midpoint between the lowest number and the old midpoint is chosen. These adjustments continue until the sought for number is found or not. In our case, the number is always found. 

Binary search is said to have a _time complexity_ of log<sub>2</sub>n. In other words, in a worst case scenario, it will take binary search no more than log<sub>2</sub>n to find the sougth for number.
