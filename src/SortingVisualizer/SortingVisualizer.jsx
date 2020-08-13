import React from "react";
import * as sortingAlgorithms from '../SortingAlgorithms/sortingAlgorithms.js';
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let x = 0; x < 125; x++) {
      array.push(randomIntFromInterval(5, 1800));
    }
    this.setState({ array });
  }

  mergeSort(){
    const animations = sortingAlgorithms.mergeSort(this.state.array);
    const newAnimations = [];
    for ( const animation of animations) {
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }
    for (let i = 0; i < newAnimations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if(isColorChange){
        const [barOneIdx, barTwoIdx] = newAnimations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'rgb(145, 170, 239)';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 3);
      } else {
        setTimeout(() => {
          const [barOneIdx, newWidth] = newAnimations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.width = `${newWidth}px`;

        }, i * 3)
      }
    }
  }

  HeapSort(){}
  BubbleSort(){}
  QuickSort(){}

  testSortingAlgorithms(){
    for (let i = 0; i < 100; i++){
      const array = [];
      const length = randomIntFromInterval(1,1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000,1000));
      }
      const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
      const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <button onClick={() => this.resetArray()}> Generate New Array</button>
        <button onClick={() => this.mergeSort()}> Merge Sort</button>
        <button onClick={() => this.HeapSort()}> Heap Sort</button>
        <button onClick={() => this.BubbleSort()}> Bubble Sort</button>
        <button onClick={() => this.QuickSort()}> Quick Sort</button>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{width: `${value}px` }}
          ></div>
        ))}
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(array1, array2){
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}
