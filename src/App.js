import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Welcome to IAIF</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quam
        fuga suscipit magni, saepe iure aut assumenda at laborum placeat, enim
        sint. Exercitationem corporis atque pariatur dolorem repellat itaque
        enim cum ad neque assumenda numquam aut quisquam eaque doloremque,
        beatae quaerat cupiditate cumque, tenetur eligendi dignissimos sapiente
        consequuntur. Totam, illo!
      </p>
      <h2>Vision</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, unde!
      </p>
      <h2>Mission</h2>
      <ul className="item-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} by IAIF</p>
      </footer>
    </div>
  );
}

export default App;
