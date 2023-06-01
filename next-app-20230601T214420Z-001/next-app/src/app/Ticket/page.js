import Image from 'next/image'

export default function Ticket() {
 return (
    
    <div class="row">
  <div class="col-sm-3">
    <div class="card h-100" >
      <img class="card-img-top" src="/images/ticket2.jpg" />
      <div class="card-body p-4">
        <div class="text-center">
          <h3 class="fw-bolder">CSS VS EST</h3>
          <p>Championnat de Tunisie</p>
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto"
          href="">Acheté</a></div>
      </div>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="card h-100" >
      <img class="card-img-top" src="/images/ticket.jpg" />
      <div class="card-body p-4">
        <div class="text-center">
          <h3 class="fw-bolder">CA VS EST</h3>
          <p>Championnat de Tunisie</p>
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto"
          href="">Acheté</a></div>
      </div>
    </div>
    </div>
  </div>



  
 )
 } 