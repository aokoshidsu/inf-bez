//Английский алфавит
const ALPHABET = "absdefghijklmnopqrstuvwxyz";
const numAlph = {}
for(let i = 0; i < ALPHABET.length; i++) {
    numAlph[ALPHABET[i]] = i;
}

//Русский алфавит
const ALPHABETRU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"; //
const numAlphRu = {}
for(let i = 0; i < ALPHABETRU.length; i++) {
    numAlphRu[ALPHABETRU[i]] = i;
}

var origText = ""; //Получаемый от пользователя текст
var key = ""; //Получаемый от пользователя ключ

//Функция для обновления введённых пользователем данных
function updateData() {
    origText = document.getElementById("original-text").value;
    key = document.getElementById("key").value.toLowerCase();
}

//Функция вызывается при нажатии кнопки "Зашифровать", проверяет установленный язык
function encode() {
    updateData();
    if (document.getElementById("eng").checked)
        vigenereEncodeEN(); //английская шифровка
    else if (document.getElementById("rus").checked)
        vigenereEncodeRU(); //русская шифровка
}

//Функция вызывается при нажатии кнопки "Расшифровать", проверяет установленный язык
function decode() {
    updateData();
    if (document.getElementById("eng").checked)
        vigenereDecodeEN(); //английская дешифровка
    else if (document.getElementById("rus").checked)
        vigenereDecodeRU(); //русская дешифровка
}

//Функция зашифровывает английский текст
//Комментарии в этой функции аналогичны для всех остальных функций шифровки/дешифровки
function vigenereEncodeEN() {
    let j = 0;
    let crypt = "";
    for(let i = 0; i < origText.length; i++) {
        //Шифровка букв, входящих в алфавит
        if (ALPHABET.includes(origText[i].toLowerCase())) {
            //Шифровка заглавных букв
            if (origText[i] === origText[i].toUpperCase()) {
                let lower = origText[i].toLowerCase();
                crypt += (ALPHABET[(numAlph[lower] + numAlph[key[j % key.length]]) % ALPHABET.length]).toUpperCase();
            }
            //Шифровка строчных букв
            else 
                crypt += ALPHABET[(numAlph[origText[i]] + numAlph[key[j % key.length]]) % ALPHABET.length];
            j += 1;
        }
        //Различные символы, пробелы, цифры пропускаются шифровкой и остаются в неизменном виде
        else
            crypt += origText[i];
    }
    document.getElementById("cryptedtext").innerHTML = crypt;
}

//Функция расшифровывает английский текст 
function vigenereDecodeEN() {
    let j = 0;
    let crypt = "";
    for(let i = 0; i < origText.length; i++) {
        if (ALPHABET.includes(origText[i].toLowerCase())) {
            if (origText[i] === origText[i].toUpperCase()) {
                let lower = origText[i].toLowerCase();
                crypt += (ALPHABET[(numAlph[lower] - numAlph[key[j % key.length]] + ALPHABET.length) % ALPHABET.length]).toUpperCase();
            }
            else 
                crypt += ALPHABET[(numAlph[origText[i]] - numAlph[key[j % key.length]] + ALPHABET.length) % ALPHABET.length];
            j += 1;
        }
        else
            crypt += origText[i];
    }
    document.getElementById("cryptedtext").innerHTML = crypt;
}

//Функция зашифровывает русский текст
function vigenereEncodeRU() {
    let j = 0;
    let crypt = "";
    for(let i = 0; i < origText.length; i++) {
        if (ALPHABETRU.includes(origText[i].toLowerCase())) {
            if (origText[i] === origText[i].toUpperCase()) {
                let lower = origText[i].toLowerCase();
                crypt += (ALPHABETRU[(numAlphRu[lower] + numAlphRu[key[j % key.length]]) % ALPHABETRU.length]).toUpperCase();
            }
            else 
                crypt += ALPHABETRU[(numAlphRu[origText[i]] + numAlphRu[key[j % key.length]]) % ALPHABETRU.length];
            j += 1;
        }
        else
            crypt += origText[i];
    }
    document.getElementById("cryptedtext").innerHTML = crypt;
}

//Функция зашифровывает русский текст 
function vigenereDecodeRU() {
    let j = 0;
    let crypt = "";
    for(let i = 0; i < origText.length; i++) {
        if (ALPHABETRU.includes(origText[i].toLowerCase())) {
            if (origText[i] === origText[i].toUpperCase()) {
                let lower = origText[i].toLowerCase();
                crypt += (ALPHABETRU[(numAlphRu[lower] - numAlphRu[key[j % key.length]] + ALPHABETRU.length) % ALPHABETRU.length]).toUpperCase();
            }
            else 
                crypt += ALPHABETRU[(numAlphRu[origText[i]] - numAlphRu[key[j % key.length]] + ALPHABETRU.length) % ALPHABETRU.length];
            j += 1;
        }
        else
            crypt += origText[i];
    }
    document.getElementById("cryptedtext").innerHTML = crypt;
}