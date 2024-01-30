
import '../main.css'

const mainElem = document.createElement('main');
mainElem.innerHTML = `<section class="flex c pos_rel">

<div class="card carrot fit-content">
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h1 class="card-heading cursive_font">Contact Us</h1>
    </div>
  </div>
</div>



  
<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Mr White Rabbit
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Chef       </p>
        <p class="card-text">
          555-555-5554     </p>
          <p class="card-text">
            totallyRealEmail@notFake.com  </p>
    </div>
    </div>
  </div>

  
</div>


<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Mr Black Rabbit
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Waiter      </p>
        <p class="card-text">
          555-555-5555     </p>
          <p class="card-text">
            totallyRealEmail@notFake.com  </p>
    </div>
    </div>
  </div>

  
</div>




<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Mr Parrot
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Manager     </p>
        <p class="card-text">
          555-555-5556     </p>
          <p class="card-text">
            totallyRealEmail@notFake.com  </p>
    </div>
    </div>
  </div>

  
</div>

</section>` ;
document.getElementById(
    "app"
  ).appendChild(
    mainElem
  ) 
