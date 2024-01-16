// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {addData, getData, removeData} from './api/apiData';
import 'antd/dist/antd.min.css';
// import Form from './Form';
import {Button, Pagination} from 'antd';
import { FormEdit } from './components/EditData';
import { Paginate } from './components/Paginate';


function App() {
  //current data
  const [currentList, setCurrentList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [addValue, setAddValue] = useState('');

  //count total item
  const [count, setCount] = useState(0);
  //== limit
  const [itemPerPage, setItemPerPage] = useState(5);

  const [offset, setOffSet] = useState(0);
  //Edit section
  const [isSearch, setIsSearch] = useState(false)

  // const fetchSource = () => {
  //   getData(searchValue)
  //     .then(res => )
  // }
  const fetchData = async (searchValue, limit, offset) =>  
  await getData(searchValue, limit, offset)
      .then(res => res.data)
      .then(res => {
        setCurrentList(res.todos);
        console.log("get data test");
        setCount(res.todos_aggregate.aggregate.count);
      })
      .catch(console.error);
  
  
  //Pagination Item Render
  //change itemPerPost to 5 > 10 > 20

  //--- convert this section to components
  const onShowSizeChange = (current, pageSize) => {
    setItemPerPage(pageSize);
  };

  const handleSearch = (e)=> {
    e.preventDefault();
    //prevent default action submitting a form that cause page to reload.
    // fetchData(searchValue, itemPerPage, offset)
    setOffSet(0);
  };
  
  //add new data to DB
  const handleAdd = async(e) => {
    e.preventDefault();
    await addData(addValue);
    fetchData(searchValue, itemPerPage, offset);
  };
  
  useEffect(() => {
    let timer = null
    if(searchValue) {
      timer = setTimeout(()=> {
          setIsSearch(true)
      }, 500)
    } else {
      setIsSearch(false)
    }
    if(searchValue === "") {
      fetchData(searchValue, itemPerPage, offset);
    }

    return ()=> {
      setIsSearch(false)
      clearTimeout(timer)}
  }, [searchValue]);

  useEffect(() => {
    if(isSearch) {
      fetchData(searchValue, itemPerPage, offset);
    }
  },[isSearch]);

  // useEffect(() => {
  //   if(searchValue === "") {
  //     fetchData(searchValue, itemPerPage, offset);
  //   }
  // },[searchValue]);
  



  return (
    <div className="App">
      {/* {Object.keys(dataEdit).length >= 1 ? (
        <div>
          <FormEdit dataEdit={dataEdit} fetchData={fetchData} searchValue={searchValue} itemPerPage={itemPerPage} offset={offset}/>
        </div>
      ) : 
      ( */}
      <h1>TODO LIST</h1>
      {/* Search */}
      <form onSubmit={handleSearch}>
        <span className='span-title'>Search by Task name</span>
        <br />
        <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search"
        />
        <br/>
      </form>
      {/* Add new data */}
      <br />
      <form onSubmit={handleAdd}>
        <span className='span-title'>Add Task</span>
        <br />
        <input
            value={addValue}
            onChange={(e) => setAddValue(e.target.value)}
        />
        <button type="submit" className='search-bt-query'>Add</button>
      </form>
      {/* <FormEdit dataEdit={dataEdit} fetchData={fetchData} searchValue={searchValue}/> */}
      {/* Fetch + Edit Data Section */}
        { 
          currentList.map( (todo, index) => 
          // (<li key={index}>{todo.task}\\{todo.id}</li>)
          (
            //fetch data from GraphQL
            <div className='todo-ui'>
              <p key={index}>ID: {todo.id}
                  <br />
                  Task: {todo.task}
              </p>
              <Button 
                onClick = {()=> {
                  removeData(todo.id).then((result) => {
                    fetchData(searchValue, itemPerPage, offset).then((result) => {
                      console.log(result);
                    })
                }) }}
                type = "danger"
                className='edit-button'         
              >
                    Remove
              </Button>
              <FormEdit fetchData={fetchData} searchValue={searchValue} itemPerPage={itemPerPage} offset={offset} dataEdit={todo}/>
            </div>
          ))
        }
        <br/>
        <Paginate 
          count = {count} 
          setOffSet = {setOffSet} 
          searchValue = {searchValue} 
          fetchData = {fetchData}
          itemPerPage = {itemPerPage}
          setItemPerPage = {setItemPerPage}
        />
    </div>
  );
}

export default App;
 