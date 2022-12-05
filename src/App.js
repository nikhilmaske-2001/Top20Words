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


  // Find the frequency of each word using Map
  var frequencyMap = new Map();
  // first set all words frequency to zero
  words.forEach(element => {
    frequencyMap[element] = 0;
  });

  // Then increase frequency of all words
  words.forEach(element => {
    frequencyMap[element] += 1;
  })

  // Tried to sort the map but failed,
  // Hence copying the complete frequencyMap into a new
  // array and sort the array according to the second element
  var frequencyArray = Object.keys(frequencyMap).map(function (key) {
    return [key, frequencyMap[key]];
  });

  // Sort the frequencyArray according to count
  frequencyArray.sort(function (a, b) {
    return a[1] - b[1];
  });

  console.log(frequencyArray);

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
