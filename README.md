## Regler :)
Vi är i skolan måndag, onsdag, fredag om inget annat sägs.
Vi diskuterar approach till koden man ska skriva och ber om feedback på det vi håller på med.

### Git:
- jobba i en egen branch döpt till ditt namn
- gör en commit efter varje uppgift / task i backloggen

#### Git workflow
1. `git checkout main`
2. `git pull`
3. `git checkout "your-branch-name"`
4. `git pull`
5. `git merge main`
6. make your changes
7. run prettier in the files you worked in
  - `npx prettier --write "file-name"`
8. `git add .`
9. `git commit -m "describe your changes"`
10. go to github.com and make a pull request
11. repeat with a new task

### Code style:
- inga semicolon
- enkla citattecken
- alla variabler och funktioner i camelCase
  - obs kom ihåg att någon annan ska kunna komma läsa och förstå din kod. döp variabler och funktioner till vettiga namn och tveka inte på att kommentera om det behövs

### Filnamn:
- funktionsfiler med camelCase
- komponenter med PascalCase

### Css:
- alfabetisk ordning
  - https://medium.com/@adammlr/sort-css-properties-in-vscode-e59033c2c675
- global css för resets, variabler, typografi, css komponenter mm
- individuella sidor stylas med module.css
- vi jobbar så mycket som möjligt med Rem eftersom designen utgår ifrån det

Lämna länkar till ex api som används i koden
