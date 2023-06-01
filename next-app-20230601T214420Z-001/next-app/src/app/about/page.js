import Image from 'next/image'
export default function About() {
 return (
    
<div className="container">
<div className="banner-item-02">
 <div className="text-content">
 <h4>About us</h4>
 <h2>Our company</h2>
 </div>
 </div>
 <div className="row">
 <div className="col-md-12">
 </div>
 <div className="col-md-8">
 <div>
 <Image src="/images/federation.jpg" alt="" width="700"
height="400" priority />
 </div>
 </div>
 <div className="col-md-4">
 <div>
 <h4>Who we are &amp; What we do?</h4>
 <div>
 La Fédération tunisienne de football (arabe : الجامعة التونسية لكرة القدم) ou FTF est une association regroupant les clubs de football de Tunisie et organisant les compétitions nationales et les matchs internationaux de la sélection de Tunisie.
La fédération nationale de Tunisie est fondée le 29 mars 1957. Elle prend la place de la Ligue de Tunisie de football créée en 1921. Elle est affiliée à la FIFA depuis 1960 et est membre de la CAF.
 </div>
 </div>
 </div>
 </div>
 </div>
 )
 } 
