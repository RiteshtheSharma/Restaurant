import '../main.css'

const mainElem = document.createElement('main');
mainElem.innerHTML = `<section class="flex c pos_rel">

<div class="card carrot">
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h1 class="card-heading cursive_font">Menu</h1>
    </div>
  </div>
</div>


<div class="card menu_item">
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h1 class="card-heading cursive_font">Beverages</h1>
    </div>
  </div>
</div>
  
<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Black Tea
      </h3>
      <div class="ml-3">
      <p class="card-text">
        A warm, sweet tea without refined sugar but stavea, made with the highest quality tea leaves to start your day off right!
      </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $2
      </h3>
      <img class="mt-3" src="../src/assets/Black_Tea.jpg" alt="black tea" width="200">

    </div>
    </div>
    </div>
  </div>
</div>

<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        coffee
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Freshly roasted, single-origin coffees       </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $1
      </h3>
      <img class="mt-3" src="../src/assets/coffee.jpeg" alt="coffee" width="200">

    </div>
    </div>
    </div>
  </div>
</div>

<div class="card menu_item">
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h1 class="card-heading cursive_font">Sides</h1>
    </div>
  </div>
</div>
  
<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Toast and Jam
      </h3>
      <div class="ml-3">
      <p class="card-text">
        A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.       </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $2
      </h3>
      <img class="mt-3" src="../src/assets/toast_and_jam.jpg" alt="toast and jam" width="200">

    </div>
    </div>
    </div>
  </div>
</div>

<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Fresh Fruit
      </h3>
      <div class="ml-3">
      <p class="card-text">
        A small bowl of fresh fruit, whatever we find at the market for the day.   </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $1
      </h3>
      <img class="mt-3" src="../src/assets/fruit.jpg" alt="Fresh Fruit" width="200">

    </div>
    </div>
    </div>
  </div>
</div>


<div class="card menu_item">
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h1 class="card-heading cursive_font">Dishes</h1>
    </div>
  </div>
</div>
  
<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Pancakes
      </h3>
      <div class="ml-3">
      <p class="card-text">
        A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.      </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $4
      </h3>
      <img class="mt-3" src="../src/assets/pancake.jpeg" alt="Pancake" width="200">

    </div>
    </div>
    </div>
  </div>
</div>

<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        French Toast
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.  </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $3
      </h3>
      <img class="mt-3" src="../src/assets/french_toast.jpeg" alt="French Toast" width="200">

    </div>
    </div>
    </div>
  </div>
</div>

<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Sandwich
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up. </p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $5
      </h3>
      <img class="mt-3" src="../src/assets/sandwich.jpeg" alt="Sandwitch" width="200">

    </div>
    </div>
    </div>
  </div>
</div>


<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Bagel
      </h3>
      <div class="ml-3">
      <p class="card-text">
      A batch of these lovely vegan bagels and serve them with favourite dairy-free spread</p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $3
      </h3>
      <img class="mt-3" src="../src/assets/bagel.webp" alt="Bagel" width="200">

    </div>
    </div>
    </div>
  </div>
</div>



<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Idli Dosa
      </h3>
      <div class="ml-3">
      <p class="card-text">
        THE TEXTURE IS UNPARALLELED!</p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $3
      </h3>
      <img class="mt-3" src="../src/assets/idli_dosa.jpg" alt="Idli Dosa" width="200">

    </div>
    </div>
    </div>
  </div>
</div>


<div class="card ">
  
  <div class="card-body flex c g2 vcenter">
    <div class="wrapper">
      <h3 class="card-heading sub_head_font">
        Oliver twist 's Porridge
      </h3>
      <div class="ml-3">
      <p class="card-text">
        Most affordable and easy to digest</p>
      <div class="with-img flex space-bw">
      <h3 class="sub_head_font">
        $1
      </h3>
      <img class="mt-3" src="../src/assets/Porridge.webp" alt="Oliver twist 's Porridge" width="200">

    </div>
    </div>
    </div>
  </div>
</div>

</section>`;
document.getElementById(
    "app"
  ).appendChild(
    mainElem 
  ) ;

    