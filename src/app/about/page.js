import React from "react";

async function takeTime(){
  await new Promise((resolve)=>{
    
    setTimeout(resolve, 3000)
  })
}

export default async function About() {
  await takeTime()
  throw new Error('This is Mannul Error')
  return (
    <div>
      <h1>this is about route</h1>
    </div>
  );
}
