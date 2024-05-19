import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
      </Routes>
    </>
  )
}

export default App
