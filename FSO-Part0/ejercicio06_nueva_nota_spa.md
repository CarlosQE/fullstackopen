# Ejercicio 0.6: Crear nueva nota en versión SPA

sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { message: "note created" }
    deactivate server

    Note right of browser: JS adds the new note to the list in memory

    Note right of browser: The updated list of notes is re-rendered in the page dynamically
```
