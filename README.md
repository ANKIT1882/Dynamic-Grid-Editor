# Dynamic Grid Editor

A web application that allows users to interact with a 10x10 grid, toggle cells between "empty" (0) and "filled" (1), and observe dynamic updates with rules enforced for the grid. The app provides features like random grid filling, reset functionality, and error handling for constraint violations.

## Features

- **Grid Interaction**: Click to toggle cells between "empty" and "filled".
- **Dynamic Updates**: Automatically fill adjacent cells based on user interaction (if rules allow).
- **Constraints**: 
  - No row or column can have more than 3 filled cells.
  - The grid must not form any 2x2 blocks of filled cells.
- **Random Fill**: Fill the grid randomly while respecting the constraints.
- **Reset Button**: Reset the grid to its initial empty state.
- **Real-time Row/Column Counts**: Displays the number of filled cells per row and column.
- **Error Handling**: Displays error messages when actions violate constraints.

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (Version 14 or above) – [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) – Comes with Node.js

### Steps to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ANKIT1882/Dynamic-Grid-Editor.git
