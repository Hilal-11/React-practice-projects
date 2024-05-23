import './App.css';
import Background from './Components/Background';
import Practice from './Components/practice1';
import InputHandling from './Components/inputHandling';
function App() {

  const titles = [
    {
      id : 1,
      title : "Popcorn",

    },
    {
      id : 2,
      title : "Icecream",

    }
    ,  {
      id : 3,
      title : "Education Fee",

    }
    ,  {
      id : 4,
      title : "Self Expense",

    }
  ]


  const GetChildData = (expenseData) => {
    const fullData = [expenseData , ...titles];
    console.log(fullData)
  }

  
  return (
    <div className='grid gap-4 p-5'>
      {/* <Background></Background> <br></br> <br></br> */}
      <InputHandling FetchingChildData={ GetChildData }></InputHandling>

      <Practice title={titles[0].title}></Practice>
      <Practice title={titles[1].title}></Practice>
      <Practice title={titles[2].title}></Practice>



    </div>
  );
}

export default App;
