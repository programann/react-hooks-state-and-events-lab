import React, { useState } from "react"; // Import useState hook
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initialize state variable for dark mode

  // Set the appClass based on the isDarkMode state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Event handler to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle between true and false
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button> {/* Attach event handler */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;