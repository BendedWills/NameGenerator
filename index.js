import chalk from 'chalk';
import { readFileSync } from 'node:fs';

const allWords = readFileSync("commonWords.txt", 'utf8').split("\n");
const prefixes = readFileSync("prefixes.txt", 'utf8').split("\n");
const suffixes = readFileSync("suffixes.txt", 'utf8').split("\n");
const usableWords = [];

for (var i = 0; i < allWords.length; i++)
{
    if (allWords[i].length > 8)
        continue;

    usableWords.push(allWords[i]);
}

function randomWithin(length)
{
    return Math.floor(Math.random() * length);
}

for (var i = 0; i < 20; i++)
{
    var randomWord = "";

    if (Math.random() < 0.1)
        randomWord += chalk.green(prefixes[randomWithin(prefixes.length)]);

    randomWord += usableWords[randomWithin(usableWords.length)];

    if (Math.random() < 0.2)
        randomWord += chalk.blue(suffixes[randomWithin(suffixes.length)]);

    if (Math.random() < 0.5)
    {
        const newWord = chalk.gray(usableWords[randomWithin(usableWords.length)]);

        if (Math.random() < 0.5)
            randomWord += " " + newWord;
        else
            randomWord = newWord + " " + randomWord;
    }

    console.log(randomWord);
}