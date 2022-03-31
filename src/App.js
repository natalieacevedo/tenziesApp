import "./App.css";
import Die from "./components/Die";

function App() {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="mainBody">
      <h1 className="mainTitle">Tenzies app</h1>
      <div className="boxesContainer">
        {boxes.map((box) => (
          <Die value={box} />
        ))}
      </div>
    </main>
  );
}

export default App;

// export default function Sidebar(props) {

//     const noteElements = props.notes.map((note, index) =>  {

//        let firstLine = note.body.split("\n");
//        console.log(firstLine);

//       return  (
//       <div key={note.id}>
//             <div
//                 className={`title ${
//                     note.id === props.currentNote.id ? "selected-note" : ""
//                 }`}
//                 onClick={() => props.setCurrentNoteId(note.id)}
//             >
//                 <h4 className="text-snippet">Note {index + 1}</h4>
//             </div>
//         </div>
//     )
//     }

//     return (
//         <section className="pane sidebar">
//             <div className="sidebar--header">
//                 <h3>Notes</h3>
//                 <button className="new-note" onClick={props.newNote}>+</button>
//             </div>
//             {noteElements}
//         </section>
//     )
// }

// function updateNote(text) {

//   let newArr = [];
//   for(let i=0; i < notes.length; i++){
//       if(notes[i].id === currentNoteId){
//           notes[i].body = text;
//           newArr.unshift(notes[i]);
//       }else{
//           newArr.push(notes[i])
//       }
//   }

//    setNotes(newArr);

// }

// function findCurrentNote() {
//   return notes.find(note => {
//       return note.id === currentNoteId
//   }) || notes[0]
// }

// function deleteNote(event, noteId) {
//   event.stopPropagation();
//   console.log(noteId);

//   setNotes(prev => {
//       return prev.filter(el => el.id !== noteId)
//   })
// }

// {/* <button
//                     className="delete-btn"
//                     onClick={(e)=> props.deleteNote(e, note.id)}// Your onClick event handler here
//                 ></button> */}
