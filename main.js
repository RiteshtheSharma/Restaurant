import './main.css'

const mainElem = document.createElement('main');
mainElem.innerHTML = `<section class="flex c pos_rel">
<div class="card carrot">
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h1 class="card-heading cursive_font">Vegan 's Meals</h1>
    </div>
  </div>
</div>

  <div class="rabbit_icon"></div>
<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <p class="card-text">
        Vegan's Meal has the best meals! The atmosphere and customer
        service make you feel like you are sitting in the middle of
        the woods, eating like a rabbit! This is exactly the kind of
        place that I like to return to again and again.
      </p>
      <h3 class="card-heading ml-3 sub_head_font">
        The White Rabbit
      </h3>
    </div>
  </div>
</div>

<div class="card">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">Hours</h3>
      <div class="ml-3"> <p class=" card-text">
        Sunday: 8am - 8pm
      </p>
      <p class=" card-text">
        Monday: 6am - 6pm
      </p>
      <p class=" card-text"> Tuesday: 6am - 6pm</p>  
       
        
        <p class="card-text">Wednesday: 6am - 6pm</p>
        <p class=" card-text">Thursday: 6am - 10pm</p>
        <p class=" card-text">Friday: 6am - 10pm</p>
        <p class="card-text">Saturday: 8am - 10pm</p></div>
     
      </p>
    </div>
  </div>
</div>

<div class="card">
 
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading  sub_head_font">
        Location
       </h3>
      <div class="ml-3"><p class="card-text">
        1675 North Buena Vista Drive
Lake Buena Vista, Florida 32830
      </p></div>
      
    </div>
  </div>
</div>


</section>` ;
document.getElementById(
    "app"
  ).appendChild(
   mainElem
  ) ;

