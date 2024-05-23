import React , {useState , useEffect} from 'react';
function App() {

  const [text , setText] = useState('');
  const [name , setName] = useState('');

  // each render the use effect executes
  // variation 1
  // useEffect(() => {
  //     console.log('done')
  // })

  // variation 2 only first render

  // useEffect(() => {
  //   console.log("Done...");
  // }, [])


  // variation 3 first render default + dependency met or (change);
  // useEffect(() => {
  //   console.log("Done...")
  // },[name])
  

  // variation 4 

  useEffect(() => {
    console.log("Listnear Added....");

    return () => {
      console.log("Listnear Removerd...");
    }
  },[text]);

  const inputHandler = (event) => {
    setText(event.target.value);
    setName(event.target.value);
    console.log(text);
  }


  return (
  <div className="flex justify-center p-10">
    <input className="ring-1 py-3 px-10 rounded" type="text" placeholder="Enter Something :- " onChange={ inputHandler }/>
  </div>
  )
}
export default App