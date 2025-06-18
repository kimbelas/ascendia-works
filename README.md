# Ascendia Works Technical Assessment by Matt Belas

## Setup

1. Clone the repo
2. Run `npm install`
3. Run `ng serve`
4. Open `http://localhost:4200`

## How It Works

- **ConfigService** loads `/public/config.json` and makes it reactive using Angular signals.
- **FormPageComponent**:
  - Uses Angular 18's `@for` and `@if` for clean template logic.
  - Dynamically renders form elements based on the `Fields` array in the JSON:
    - `H1` elements for section headers
    - `Text` inputs bound to form state via `FormState` using signals
    - `Button` elements with custom alert messages
- **FormState**:
  - Stores form values using `WritableSignal<Record<string, string>>`
  - Parses `${field-id}` in `AlertMessage` using a regex
- Extending the form is easy — just update `public/config.json` with new fields (sample data below).

## Highlights

- Uses Angular 18 standalone components and signals
- Dynamic field rendering based on external config
- Alert message parsing using field IDs
- Clean, minimal, focused on the task — no unnecessary features

## JSON Spec

```json
{
  "Title": "Tech Assessment",
  "Subtitle": "Kim Matthew Belas",
  "Fields": [
    { "Type": "H1", "Text": "Person name" },
    { "ID": "person-name", "Type": "Text", "Placeholder": "John Smith" },
    { "ID": "hello-button", "Type": "Button", "Title": "Say hi", "AlertMessage": "Hello ${person-name}" }
  ]
}
```

## JSON Sample new fields for testing

```json
{
  "Title": "Tech Assessment",
  "Subtitle": "Kim Matthew Belas",
  "Fields": [
    { "Type": "H1", "Text": "Person name" },
    { "ID": "personName", "Type": "Text", "Placeholder": "John Smith" },
    { "ID": "firstName", "Type": "Text", "Placeholder": "First Name" },
    { "ID": "email", "Type": "Text", "Placeholder": "Email" },
    {
      "ID": "helloButton",
      "Type": "Button",
      "Title": "Say hi",
      "AlertMessage": "Hello ${personName}"
    },
    {
      "ID": "hello-btn",
      "Type": "Button",
      "Title": "Show First Name",
      "AlertMessage": "Hello ${firstName}"
    },
    {
      "ID": "email-btn",
      "Type": "Button",
      "Title": "Show Email",
      "AlertMessage": "Your email is ${email}"
    }
  ]
}
```