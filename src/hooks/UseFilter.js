import React from "react";

const useFilter = (catArray, list) => {
  const compare = (catArray, itemFilters) => {
      let count=0
   
    catArray.forEach((cat) => {
        if(count>0){
            
            return true
        }
      let ind = itemFilters.findIndex((category) => category === cat);
     if(ind>=0){
         count++
     }
 
     
    });

    return count>0 ? true : false;
  };

  const filteredList = list.filter((item) =>{
      if(compare(catArray, item.filterList)===true){
       return true
      }
  }
   
  );


  return {
    filteredList
  };
};

export default useFilter;
