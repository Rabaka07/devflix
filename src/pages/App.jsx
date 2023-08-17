import { useEffect, useState } from "react";
import logo from "../assets/devflix.png"
import searchIcon from "../assets/search.svg"

import "./App.css"

const App =() =>{
    const [searchTerm,setSearchTerm]= useState("");
const apiKey = "e4d577fa";
const apiUrl = `https://omdbapi.com//?apiKey=${apiKey}&s=Batman`

useEffect(() =>{
searchMovies("Batman")
},[])

const searchMovies = async (title) =>{
const response =await fetch(`${apiUrl}&s=${title}`);
const data =await response.json();
console.log(data);
};

const handleKeyPress =(e)=>{
    e.key === "Enter" &&searchMovies(searchTerm)
}
// fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data));
    return(
        <div id="app">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search">
            <input value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pesquise Aqui" />
            <img src={searchIcon} alt="Icone de pesquisa"
            onClick={()=> searchMovies(searchTerm)} />
        </div>
    </div>
    )
}

export default App;