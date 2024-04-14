// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let notes = [{
//   title: "Toan",
//   content: "Giai de toan"
// }];

// function menu() {
//   const actions =
//     `
//     \n-----Menu-----
//     \n1.View all note
//     \n2.Get note by index
//     \n3.Create note
//     \n4.Update note by index
//     \n5.Delete note by index
//     \n6.Close
//     \n
//     \n=>Your choice: `;

//   rl.question(actions, (answer) => {
//     switch (Number(answer)) {
//       case 1:
//         ViewAllNote();
//         break;
//       case 2:
//         GetNote();
//         break;
//       case 3:
//         CreateNote();
//         break;
//       case 4:
//         UpdateNote();
//         break;
//       case 5:
//         DeleteNote();
//         break;
//       case 6:
//         console.log("Thank you for using the program");
//         rl.close();
//         break;
//       default:
//         console.log("Invalid option, please choose again");
//         menu();
//         break;
//     }
//   });
// }

// function ViewAllNote() {
//   console.log("\nAction perform View All Note\n");
//   console.table(notes);
//   menu();
// }

// function GetNote() {
//   console.log("\nAction perform Get Note\n");
//   rl.question("Please enter index of the note: ", (answer) => {
//     printNote(Number(answer));
//     menu();
//   });
// }

// function CreateNote() {
//   console.log("\nAction perform Create\n");
//   rl.question("Please enter title: ", (title) => {
//     rl.question("Please enter content: ", (content) => {
//       notes.push({
//         title: title,
//         content: content
//       });
//       console.log("New note added successfully");
//       menu();
//     });
//   });
// }

// function UpdateNote() {
//   console.log("\nAction perform Update\n");
//   rl.question("Edit note with index: ", (index) => {
//     rl.question("Please enter new title: ", (title) => {
//       rl.question("Please enter new content: ", (content) => {
//         notes[Number(index)] = { title: title, content: content };
//         console.log("New note added successfully");
//         menu();
//       });
//     });
//   });
// }

// function DeleteNote() {
//   console.log("\nAction perform Delete\n");
//   rl.question("Delete note with index: ", (index) => {
//     rl.question("Are you sure to delete this note (y/n): ", (confirm) => {
//       if (confirm.toLowerCase() === "y") {
//         // notes = notes.filter((note, idx) => idx !== Number(index));
//         notes.splice(index, 1);
//       } else {
//         console.log("Action canceled");
//       }
//       menu();
//     });
//   });
// }

// function printNote(index) {
//   console.log(`#${index}`);
//   console.log(`Title: ${notes.at(index).title}`);
//   console.log(`Content: ${notes.at(index).content}`);
//   console.log();
// }

// menu();


let yellowcat = {
  name: 'lucy',
  age: 1.5,
  isgirl: false,
  major: 'mouse hunter',
};

if (yellowcat.isgirl == false) {
  console.log('this cat is a boy cat');


} else {
  console.log(' this cat is a girl cat');
}
if (yellowcat.age >= 1) {
  console.log('meo truong thanh');

} else {
  console.log('meo nho tuoi');
}