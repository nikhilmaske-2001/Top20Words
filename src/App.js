import "./App.css";

const handleClick = async () => {
  const url = "https://www.terriblytinytales.com/test.txt";
  var textResponse;
  await fetch(url)
    .then(response => response.text())
    .then((response) => {
      textResponse = response;
    })
    .catch((error) => console.log(error));

  console.log(textResponse);
}

function App() {
  return (
    <div className="App">
      <div className="button-container">
        <button className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
