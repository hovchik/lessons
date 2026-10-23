@echo off
rem Windows: double-click this file to start the Lessons app.
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Download it from https://nodejs.org ^(LTS^), then double-click this file again.
  pause
  exit /b 1
)
node start.mjs %*
if errorlevel 1 pause
