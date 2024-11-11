// ================== EXERCISE 1 ==================
// {
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text style={{color:'green'}}>Excellence</Text>
//         <Text style={{backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle:'italic'}}>Integrity</Text>
//         <Text style={{textAlign:'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor:'black' , color: 'white'}}>
//           Enterprising
//         </Text>
//       </View>
//      )
//   }
// }

// ================== EXERCISE 2 ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.container}>
//         {/* Green box */}
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>This is a green box</Text>
//         </View>
//
//         {/* Title */}
//         <Text style={styles.title}>This is the title</Text>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Centers content vertically
//     alignItems: 'center', // Centers content horizontally
//     padding: 20,
//   },
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//     justifyContent: 'center', // Centers text vertically within the box
//     alignItems: 'center', // Centers text horizontally within the box
//   },
//   boxText: {
//     color: 'white', // White text color
//     textAlign: 'center', // Centers text horizontally
//   },
//   title: {
//     fontWeight: 'bold', // Bold font style
//     fontSize: 20, // Optional: Adjust the font size for title
//     marginTop: 20, // Adds margin top to separate from the green box
//   },
// });

// ================== EXERCISE 3A ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.Parent}>
//         {/* Child 1 */}
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.text}>Child 1</Text>
//         </View>
//
//         {/* Child 2 */}
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.text}>Child 2</Text>
//         </View>
//
//         {/* Child 3 */}
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.text}>Child 3</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row', // Lay out children horizontally
//     backgroundColor: '#F5fcff', // Parent background color
//     borderColor: '#0099AA', // Border color for Parent
//     borderWidth: 5, // Border width for Parent
//     padding: 10, // Padding to ensure the borders are visible
//   },
//   Child: {
//     flex: 1, // Distribute the available space equally
//     borderWidth: 2, // Border width for each Child
//     justifyContent: 'center', // Centers the text vertically
//     alignItems: 'center', // Centers the text horizontally
//   },
//   text: {
//     textAlign: 'center', // Centers the text horizontally
//     fontSize: 24, // Text size for each child
//   },
// });

// ================== EXERCISE 3B ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.Parent}>
//         {/* Child 1 */}
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.text}>Child 1</Text>
//         </View>
//
//         {/* Child 2 */}
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.text}>Child 2</Text>
//         </View>
//
//         {/* Child 3 */}
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.text}>Child 3</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1, // Makes the Parent take up the full screen
//     flexDirection: 'row', // Arrange Children horizontally
//     backgroundColor: '#F5fcff', // Parent background color
//     borderColor: '#0099AA', // Border color for Parent
//     borderWidth: 5, // Border width for Parent
//   },
//   Child: {
//     flex: 1, // Each child takes up equal available space
//     borderWidth: 2, // Border width for each Child
//     justifyContent: 'center', // Center text vertically within the child
//     alignItems: 'center', // Center text horizontally within the child
//   },
//   text: {
//     textAlign: 'center', // Center the text horizontally
//     fontSize: 24, // Set the text size for each child
//   },
// });

// ================== EXERCISE 3C ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.Parent}>
//         {/* Child 1 */}
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.text}>Child 1</Text>
//         </View>
//
//         {/* Child 2 */}
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.text}>Child 2</Text>
//         </View>
//
//         {/* Child 3 */}
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.text}>Child 3</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1, // Makes the Parent take up the full screen
//     flexDirection: 'row', // Arrange Children horizontally
//     backgroundColor: '#F5fcff', // Parent background color
//     borderColor: '#0099AA', // Border color for Parent
//     borderWidth: 5, // Border width for Parent
//   },
//   Child: {
//     flex: 1, // Each child takes up equal available space
//     borderWidth: 2, // Border width for each Child
//     justifyContent: 'center', // Center text vertically within the child
//     alignItems: 'center', // Center text horizontally within the child
//   },
//   text: {
//     textAlign: 'center', // Center the text horizontally
//     fontSize: 24, // Set the text size for each child
//   },
// });

// ================== EXERCISE 3D ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.Parent}>
//         {/* Child 1 */}
//         <View style={[styles.Child, styles.childOne, { backgroundColor: 'powderblue' }]}>
//           <Text style={[styles.text, { flex: 1 }]}>Child One</Text>
//         </View>
//
//         {/* Child 2 */}
//         <View style={[styles.Child, styles.childTwo, { backgroundColor: 'skyblue' }]}>
//           <Text style={[styles.text, { flex: 2 }]}>Child Two</Text>
//         </View>
//
//         {/* Child 3 */}
//         <View style={[styles.Child, styles.childThree, { backgroundColor: 'steelblue' }]}>
//           <Text style={[styles.text, { flex: 3 }]}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1, // Makes the Parent take up the full screen
//     flexDirection: 'row', // Arrange Children horizontally
//     backgroundColor: '#F5fcff', // Parent background color
//     borderColor: '#0099AA', // Border color for Parent
//     borderWidth: 5, // Border width for Parent
//   },
//   Child: {
//     borderWidth: 2, // Border width for each Child
//     justifyContent: 'center', // Center text vertically within the child
//     alignItems: 'center', // Center text horizontally within the child
//   },
//   // Child One takes up 1/6 of the available space
//   childOne: {
//     flex: 1, // 1/6 of the space
//   },
//   // Child Two takes up 2/6 of the available space
//   childTwo: {
//     flex: 2, // 2/6 of the space
//   },
//   // Child Three takes up 3/6 of the available space
//   childThree: {
//     flex: 3, // 3/6 of the space
//   },
//   text: {
//     textAlign: 'center', // Center the text horizontally
//     fontSize: 24, // Set the text size for each child
//     width: '100%', // Ensure the text element takes up the full width of the child view
//   },
// });

// ================== EXERCISE 3E ==================
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.container}>
//         {/* Flex Start */}
//         <View style={[styles.Parent, { justifyContent: 'flex-start' }]}>
//           <Text style={styles.label}>flex-start</Text>
//           <ChildViews />
//         </View>
//
//         {/* Flex End */}
//         <View style={[styles.Parent, { justifyContent: 'flex-end' }]}>
//           <Text style={styles.label}>flex-end</Text>
//           <ChildViews />
//         </View>
//
//         {/* Center */}
//         <View style={[styles.Parent, { justifyContent: 'center' }]}>
//           <Text style={styles.label}>center</Text>
//           <ChildViews />
//         </View>
//
//         {/* Space Between */}
//         <View style={[styles.Parent, { justifyContent: 'space-between' }]}>
//           <Text style={styles.label}>space-between</Text>
//           <ChildViews />
//         </View>
//
//         {/* Space Around */}
//         <View style={[styles.Parent, { justifyContent: 'space-around' }]}>
//           <Text style={styles.label}>space-around</Text>
//           <ChildViews />
//         </View>
//
//         {/* Space Evenly */}
//         <View style={[styles.Parent, { justifyContent: 'space-evenly' }]}>
//           <Text style={styles.label}>space-evenly</Text>
//           <ChildViews />
//         </View>
//       </View>
//   );
// };
//
// const ChildViews = () => (
//     <>
//       <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//         <Text style={styles.text}>Child 1</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//         <Text style={styles.text}>Child 2</Text>
//       </View>
//       <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//         <Text style={styles.text}>Child 3</Text>
//       </View>
//     </>
// );
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   Parent: {
//     flexDirection: 'row',
//     borderColor: '#0099AA',
//     borderWidth: 2,
//     marginBottom: 20,
//     padding: 5,
//     height: 100,
//   },
//   Child: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   label: {
//     position: 'absolute',
//     top: -20,
//     left: 5,
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 12,
//     color: '#FFF',
//   },
// });

// ================== EXERCISE 4 ==================
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
//
// const App = () => {
//   return (
//       <View style={styles.Parent}>
//         {/* Child Views */}
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]} />
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]} />
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]} />
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1, // Takes the full screen
//     backgroundColor: 'whitesmoke',
//     marginTop: 30,
//     justifyContent: 'center', // Centers children vertically
//     alignItems: 'center', // Centers children horizontally
//   },
//   Child: {
//     width: 80,
//     height: 80,
//     margin: 10, // Adds spacing between the squares
//   },
// });

// ================== EXERCISE 5 ==================
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
//
// // Custom reusable component for displaying questions
// const Question = ({ questionText, imageSource, options, selectedAnswer, onSelectAnswer }) => {
//     return (
//         <View style={styles.questionContainer}>
//             <Text style={styles.question}>{questionText}</Text>
//             <Image style={styles.image} source={imageSource} />
//             <RNPickerSelect
//                 style={pickerSelectStyles}
//                 onValueChange={onSelectAnswer}
//                 items={options}
//                 value={selectedAnswer}
//             />
//         </View>
//     );
// };
//
// const App = () => {
//     // State to store the selected answers
//     const [answers, setAnswers] = useState(new Array(16).fill(null)); // Increased size for more questions
//     const [scoreMessage, setScoreMessage] = useState("");
//
//     // Options for each question
//     const options = [
//         { label: 'Bee', value: 'bee' },
//         { label: 'Crocodile', value: 'crocodile' },
//         { label: 'Tiger', value: 'tiger' },
//         { label: 'Giraffe', value: 'giraffe' },
//     ];
//
//     const animalOptions = [
//         { label: 'Peacock', value: 'peacock' },
//         { label: 'Lion', value: 'lion' },
//         { label: 'Leopard', value: 'leopard' },
//         { label: 'Elephant', value: 'elephant' },
//         { label: 'Rabbit', value: 'rabbit' },
//         { label: 'Zebra', value: 'zebra' },
//         { label: 'Turtle', value: 'turtle' },
//         { label: 'Kingfisher', value: 'kingfisher' },
//         { label: 'Owl', value: 'owl' },
//         { label: 'Squirrel', value: 'squirrel' },
//     ];
//
//     // Correct answers for each question
//     const correctAnswers = [
//         'bee', 'crocodile', 'giraffe', 'peacock', 'rabbit', 'elephant',
//         'zebra', 'turtle', 'kingfisher', 'owl', 'squirrel', 'leopard',
//         'lion', 'tiger', 'hummingbird', 'deer'
//     ];
//
//     // Function to check answers and show the result
//     const checkAnswers = () => {
//         let correctCount = 0;
//
//         // Compare selected answers with correct answers
//         answers.forEach((answer, index) => {
//             if (answer === correctAnswers[index]) {
//                 correctCount++;
//             }
//         });
//
//         let message = "";
//         if (correctCount === 16) {
//             message = "Well done!";
//         } else if (correctCount >= 12) {
//             message = "Good job!";
//         } else {
//             message = "You can do better next time!";
//         }
//
//         // Show the result in an alert
//         Alert.alert(`You got ${correctCount} out of 16 correct!`, message);
//         setScoreMessage(message); // Optionally display a message below the submit button
//     };
//
//     return (
//         <View style={styles.container}>
//             {/* Title and Icon */}
//             <Text style={styles.title}>Quiz Time! 🏆</Text>
//
//             {/* Questions */}
//             <Question
//                 questionText="1. What animal is this?"
//                 imageSource={require('./img/bee.jpg')} // Updated to your image path
//                 options={options}
//                 selectedAnswer={answers[0]}
//                 onSelectAnswer={(value) => setAnswers([value, ...answers.slice(1)])}
//             />
//
//             <Question
//                 questionText="2. What animal is this?"
//                 imageSource={require('./img/crocodile.jpg')} // Updated to your image path
//                 options={options}
//                 selectedAnswer={answers[1]}
//                 onSelectAnswer={(value) => setAnswers([answers[0], value, ...answers.slice(2)])}
//             />
//
//             <Question
//                 questionText="3. What animal is this?"
//                 imageSource={require('./img/giraffe.jpg')} // Updated to your image path
//                 options={options}
//                 selectedAnswer={answers[2]}
//                 onSelectAnswer={(value) => setAnswers([answers[0], answers[1], value, ...answers.slice(3)])}
//             />
//
//             <Question
//                 questionText="4. What animal is this?"
//                 imageSource={require('./img/peacock.jpg')} // Updated to your image path
//                 options={animalOptions}
//                 selectedAnswer={answers[3]}
//                 onSelectAnswer={(value) => setAnswers([answers[0], answers[1], answers[2], value, ...answers.slice(4)])}
//             />
//
//             {/* Add remaining questions... */}
//
//             {/* Submit Button */}
//             <TouchableOpacity style={styles.button} onPress={checkAnswers}>
//                 <Text style={styles.buttonText}>Submit Answers</Text>
//             </TouchableOpacity>
//
//             {/* Feedback message */}
//             <Text style={styles.feedbackMessage}>{scoreMessage}</Text>
//         </View>
//     );
// };
//
// // Styling for the App component
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 20,
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color: '#007BFF',
//     },
//     questionContainer: {
//         marginBottom: 30,
//         alignItems: 'center',
//     },
//     question: {
//         fontSize: 20,
//         marginBottom: 10,
//         fontWeight: 'bold',
//     },
//     image: {
//         width: 200,
//         height: 200,
//         marginBottom: 20,
//     },
//     button: {
//         backgroundColor: '#007BFF',
//         padding: 15,
//         borderRadius: 5,
//         marginTop: 20,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//     },
//     feedbackMessage: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginTop: 20,
//         color: '#007BFF',
//     },
// });
//
// // Custom styles for the picker
// const pickerSelectStyles = StyleSheet.create({
//     inputIOS: {
//         width: '80%',
//         height: 40,
//         paddingLeft: 10,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     inputAndroid: {
//         width: '80%',
//         height: 40,
//         paddingLeft: 10,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
// });
//
// export default App;




