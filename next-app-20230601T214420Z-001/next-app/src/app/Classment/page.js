import Image from 'next/image'
export default function Classment() {
 return (

<ul class="list-group">
  <li class="list-group-item active">  <Image src="/images/tn.png" alt="" width="20"  height="20" priority />
Classment du Championnat tunisienne</li>
  <li class="list-group-item"> <Image src="/images/css.gif" alt="" width="20"  height="20" priority />Club sportif sfaxien</li>
  <li class="list-group-item">Esperance sportive de tunis</li>
  <li class="list-group-item">Club africain</li>
  <li class="list-group-item">Equipe Sportif Sehel</li>
</ul> )
 } 