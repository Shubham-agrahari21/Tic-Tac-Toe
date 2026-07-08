import React, { use } from 'react'
import { useState } from 'react'

const App = () => {
const [user, setUser] = useState(Array(9).fill(""))
const [player, setplayer] = useState(true)
 const [winner, setwinner] = useState("")
function handle(index) {
  //if(!player ||user[index]!=="") return ;
  const newUser=[...user]
    if(player){
      newUser[index]="X";
          
        setUser(newUser)
        setplayer(false)
        
    }
    else{
        
        newUser[index]="O";
         setUser(newUser)
        setplayer(true)
       
        

      }
      if(chickWinner(newUser)) return;
      chickWinner(newUser)

   //   setplayer.disabled=true;
    
//players(newUser);
    }

// function players(curr){
//       const newplayer=[...curr];
//       newplayer[index]="O";
//       setUser(newplayer);


// }
  
function chickWinner(user){
  const l=[
            [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
     for(let p of l ){
    const [a,b,c]=p;
    if(
         user[a]&&
         user[a]===user[b]&&
         user[b]===user[c]
    ){
         setwinner(user[a]);
         return true
    }
  }

return false
}
function NewGame(){
   setUser(Array(9).fill(""));
   setwinner("")

}



function reSet(){
   setUser(Array(9).fill(""))
}
  return (
    <div  className='min-h-screen  flex justify-center items-center flex-wrap
       bg-slate-900  '>
        <div className='text-white min-h-full w-full  ' >

          <h1 className='justify-center  h-15 text-center flex justify-center flex-wrap  text-3xl font-bold italic text-shadow-2xs text-[#13a9d3fe] '>Tic Toc Toe Game</h1>

        <div className='text-center flex justify-between gap-15 h-22 '>
          <div className='w-1/3  h-15 rounded-3xl bg-cyan-50 text-4xl text-gray-400 font-bold '><h1 className='flex items-center justify-center [text-shadow:2px_2px_5px_#00ffcc]'>Player X </h1></div>
          <button onClick={NewGame} className='bg-black rounded-4xl h-15 w-30 active:scale-95'>New Game</button>
          <div className='w-1/3 h-15 rounded-3xl bg-gray-300  shadow-sm text-gray-400 text-4xl font-bold [text-shadow:2px_2px_5px_#00ffcc]'><h1>Player O </h1> </div>
        
</div> 
        <h1 className='text-center text-green-500 font-bold h-15 text-2xl'>{winner &&`Congratulation Winner is : ${winner}`} </h1> 


     {/* // <div className=' flex justify-center  items-center h-full w-[80%]  gap-4 grid grid-cols-3'> */}
        

           
        </div>
         <div className='flex justify-between items-center  border-[#00ffcc] px-2 py-2  grid grid-cols-3 gap-4 w-96  rounded-2xl '>
          {user.map((box,index)=>(
            <button key={index} onClick={()=>{handle(index)}}
            disabled={user[index]} disabled={winner} className='h-24 p-4 rounded-xl hover:border-4 hover:border-[#d0de0f] border-white active:scale-95 active:border-[#d0de0f] transition-all duration-300" bg-cyan-800 text-6xl text-[#b8d70b] [text-shadow:2px_2px_5px_#00ffcc]' >{box}</button>
          ))

          }
         









           
            <div className='border-none' >
  <button onClick={reSet} className= ' bg-gray-400 rounded-3xl p-5 h-15 w-50 active:scale-95 '>Reset</button>
            </div>
            </div>
        

    </div>
      
  )
} 

export default App
