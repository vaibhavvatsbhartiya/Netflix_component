import React from "react";
import Card from "./Cards";
import Heading from "./Heading";
import "./index.css"
import Sdata from "./Sdata";

function Netflixcard(val){
  // console.log(Sdata);
  return(
    <Card
        key ={val.id}
        imgsrc ={val.imgsrc}
        title ={val.title}
        sname ={val.sname}
        category ={val.category}
        link ={val.links}
      />
  );
}


function App() {
  return (
    <>
      <Heading />
      {Sdata.map(Netflixcard)}
      {/* {Sdata.map(const c = (v) =>return()  normally arrow function looks*/}
      {/* const c hata diya gya because Sdata phle he define hai so again usko kisi const 'c' assign krne k need nhi as we directly access that as we see below */}
{/*        
      {Sdata.map((v) => {return(
        <Card
        imgsrc ={v.imgsrc}
        title ={v.title}
        sname ={v.sname}
        category ={v.category}
        link ={v.links}
      />
    )})}
 */}
    </>
    // array.map(function(current vlue, index num, arr)this value)
  );
}

export default App;




// ................................................
// function
// function V2(Val,sum){
//   return Val+sum;
// }


// .................................................
// fat arrow function
// const V = (val, sum) => val + sum ;