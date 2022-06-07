import React from 'react'
import { useDispatch } from 'react-redux'
import { filterSliceActions } from '../../store/FilterSlice'
const Categories = ({categories}) => {
  const dispatch = useDispatch()
  const selectCategory = (cat, e) => {
    dispatch(filterSliceActions.addCategory(cat))
  
  }
  return (
    <div className='categories'>
       
      {categories?.map((cat, index) => <button key={index} onClick={selectCategory.bind(this, cat)}>{cat}</button>)}
    </div>
  )
}

export default Categories