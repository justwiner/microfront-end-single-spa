@echo off
start cmd /k "cd menu&&npm run dev"
start cmd /k "cd project1&&npm run dev"
start cmd /k "cd project2&&npm run dev"
start cmd /k "cd portal&&npm run start"
start cmd /k "cd portal/common-deps-static&&hs -p 8000 --cors"
