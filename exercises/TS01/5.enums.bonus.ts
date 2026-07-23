// Union types to “połączenie typów” – pozwala przypisać więcej niż jeden typ do zmiennej. Union types definiuje się używając symbolu | (pipe). Na przykład zmienna, która może mieć typ number albo string:

// let someValue: number | string

// Przykład zastosowania w projekcie
// Wyobraźmy sobie aplikację do zarządzania użytkownikami, gdzie każdy użytkownik ma przypisany typ roli (np. Admin, User, Guest):

// Enum:

enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
// Możemy użyć tego enuma w funkcji sprawdzającej rolę użytkownika:

function checkUserRole(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Welcome, Admin!");
  } else if (role === UserRole.User) {
    console.log("Hello, User!");
  } else {
    console.log("Greetings, Guest!");
  }
}
checkUserRole(UserRole.Admin); // Output: Welcome, Admin!

// Dlaczego takie podejście może być bardziej preferowane niż if (role === "ADMIN")?

// Używanie enumów:

// Zapewnia spójność: Enumy przechowują wartośc a odnosimy się do nich po nazwie zmiennej (a nie wartości), co redukuje ryzyko literówek i niespójności w różnych częściach kodu.
// Ułatwia refaktoryzację: Jeśli nazwa wartości zmieni się (np. z “ADMIN” na “SUPER_ADMIN”), zmiana w enumie automatycznie propaguje się w całym kodzie.
// Poprawia czytelność: Korzystanie z nazwanych wartości z enumów czyni kod bardziej zrozumiałym dla innych programistów.
// Redukuje błędy: Enumy są typowane, więc kompilator TypeScript wykryje, jeśli próbujesz użyć nieistniejącej wartości.
// Przykład zastosowania w testach automatycznych
// Enums są niezwykle przydatne w testach API, szczególnie do definiowania statusów HTTP w odpowiedziach serwera:

// Enum:

enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500
}
// Przykład użycia w testach API:

// import { test, expect } from "@playwright/test";
// test("should return 200 OK for valid request", async ({ request }) => {
//   const response = await request.get("/api/resource");
//   // Porównujemy status odpowiedzi z wartością z enuma
//   expect(response.status()).toBe(HttpStatus.OK);
//   const responseBody = await response.json();
//   expect(responseBody).toHaveProperty("data");
// });
// Ten przykład pokazuje, jak enumy pomagają unikać literówek lub błędów podczas porównywania statusów HTTP 😉

// Przykład zastosowania: konfiguracja aplikacji
// Enums mogą być używane do zarządzania różnymi trybami pracy aplikacji, np. środowiskami development, staging i production:

// Enum:

enum Environment {
    Development = "DEVELOPMENT",
    Staging = "STAGING",
    Production = "PRODUCTION"
}
// Przykład użycia w konfiguracji:

function getApiUrl(env: Environment): string {
  switch (env) {
    case Environment.Development:
      return "https://dev.api.example.com";
    case Environment.Staging:
      return "https://staging.api.example.com";
    case Environment.Production:
      return "https://api.example.com";
    default:
      throw new Error("Unknown environment");
  }
}
console.log(getApiUrl(Environment.Production)); // Output: https://api.example.com

// Przykład zastosowania: mapowanie błędów
// Enums mogą pomóc w obsłudze błędów poprzez ich mapowanie na bardziej przyjazne dla użytkownika wiadomości:

// Enum:

enum ErrorCode {
    NotFound = 404,
    Unauthorized = 401,
    InternalServerError = 500
}
// Przykład użycia w obsłudze błędów:

function getErrorMessage(code: ErrorCode): string {
  switch (code) {
    case ErrorCode.NotFound:
      return "Resource not found.";
    case ErrorCode.Unauthorized:
      return "You are not authorized.";
    case ErrorCode.InternalServerError:
      return "An unexpected error occurred.";
    default:
      return "Unknown error.";
  }
}
console.log(getErrorMessage(ErrorCode.Unauthorized)); // Output: You are not authorized.
// Przykład zastosowania: zarządzanie rodzajami powiadomień
// Enums mogą być używane do obsługi różnych rodzajów powiadomień w aplikacji, np. info, warning, error:

// Enum:

enum NotificationType {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
// Przykład użycia:

function displayNotification(type: NotificationType, message: string): void {
  switch (type) {
    case NotificationType.Info:
      console.log(`INFO: ${message}`);
      break;
    case NotificationType.Warning:
      console.warn(`WARNING: ${message}`);
      break;
    case NotificationType.Error:
      console.error(`ERROR: ${message}`);
      break;
  }
}
displayNotification(NotificationType.Warning, "Low disk space"); // Output: WARNING: Low disk space
// Przykład zastosowania: typy plików
// Enums mogą być używane do definiowania akceptowanych typów plików w aplikacji:

// Enum:

enum FileType {
    Image = "IMAGE",
    Video = "VIDEO",
    Document = "DOCUMENT"
}
// Przykład użycia:

function isFileTypeSupported(fileType: FileType): boolean {
  const supportedTypes = [FileType.Image, FileType.Document];
  return supportedTypes.includes(fileType);
}
console.log(isFileTypeSupported(FileType.Video)); // Output: false
console.log(isFileTypeSupported(FileType.Image)); // Output: true
// Dodatkowe materiały
// Aby dowiedzieć się więcej o enumach w TypeScript, sprawdź oficjalną dokumentację: TypeScript Enums.