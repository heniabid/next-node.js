import Image from 'next/image'
export default function Stade() {
 return (
     <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Les Stades :</h1>
          </div>
        </div>
    
<div className="container">
<div>
 <Image src="/images/Rades.jpg" alt="" width="700"
height="400" priority />
 </div>
 <div>
 <Image src="/images/mhiri.jpg" alt="" width="700"
height="400" priority />
 </div>
 </div>
 </header>
 )
 } 
