import { useContext } from "react";
import { DataContext } from "./context/ContextProvider";
import { SideContext } from "./context/SideContext";

// Func to get Data
export const useData = () => useContext(DataContext);



// Func to get SideContext
export const useSideContext = () => useContext(SideContext);


// func return date string
export const SetDate=()=> {
    let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}/${month<10?`0${month}`:`${month}`}/${year}`
}

// Func returns time string
export const SetTime = () => {
    let time = new Date();
    let hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
    let minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    // let seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();
    return `${hours}:${minutes}`
  }

