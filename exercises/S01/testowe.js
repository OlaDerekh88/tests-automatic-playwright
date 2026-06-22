function createLogger(prefix) {
  // Zwracamy nową funkcję
  return function (message) {
    console.log(prefix + ": " + message);
  };
}


// Tworzymy dwie różne funkcje-loggery
const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");


// Użycie
infoLogger("To jest wiadomość informacyjna");
infoLogger("To jest nowa wiadomość");
errorLogger("To jest komunikat o błędzie");