import "./App.css";
import Histogram from 'react-chart-histogram';
import { useState } from "react";

function App() {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  const options = { fillColor: 'blue', strokeColor: '#0000FF' };

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
      return b[1] - a[1];
    });

    // Pickup only the top 20 items from the frequency array
    const top20FrequencyArray = frequencyArray.slice(0, 20);
    // Pick the top 20 words from top20FrequencyArray
    const top20Words = top20FrequencyArray.map((element) => {
      return element[0];
    });
    // Pick the top 20 frequency counts from top20FrequencyArray
    const top20Count = top20FrequencyArray.map((element) => {
      return element[1];
    })
    setXData(top20Words);
    setYData(top20Count);
  }


  return (
    <div className="App">
      <div className="button-container">
        <button className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
      <Histogram
        xLabels={xData}
        yValues={yData}
        width='1250'
        height='580'
        options={options}
      />
    </div>
  );
}

export default App;
