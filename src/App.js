import "./App.css";

const handleClick = async () => {
  // Fetch the data from url and store the text result in a variable
  const url = "https://www.terriblytinytales.com/test.txt";
  var textResponse;
  await fetch(url)
    .then(response => response.text())
    .then((response) => {
      textResponse = response;
    })
    .catch((error) => console.log(error));

  // The textResponse is a paragraph which contain words
  // Each words are seperated by spaces 
  var words = [];
  words = textResponse.replace(/[^A-Za-z0-9]+/g, " ").split(" ");
  console.log(words);
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
