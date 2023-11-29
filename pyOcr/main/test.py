# Get Guess
import random


def getGuess():
    return list(input("What is your guess :"))


# Generate Code
def generateCode():
    digits = [str(num) for num in range(10)]

    random.shuffle(digits)
    return digits[:3]


# Generate Clue
def generateClue(code, guess):
    if guess == code:
        return "DONEEE"

    clues = []

    for ind, num in enumerate(guess):
        count = 0
        if num == code[ind]:
            clues.append("Position is Match and element is present")
        elif num in code:
            count = count + 1
            clues.append("{} Element is Present".format(count))

    if not clues:
        return ["Nope"]
    else:
        return clues


# Run game logic
print("Welcome to the game")
secretCode = generateCode()
#print("Secret code is : {}".format(secretCode))

clueReport = []
attempt = []

while clueReport != "DONEEE":
    guess = getGuess()
    attempt.append(guess)
    clueReport = generateClue(secretCode, guess)
    print("Here is the result of your guess : ")
    for att in attempt:
        print("Attempt #{} : {}".format(attempt.index(att), att))
    for clue in clueReport:
        print(clue)
