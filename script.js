// const productsDiv = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((categories) => loadData(categories));

const loadData = (data) => {
    console.log(data)
    const categoriesDiv = document.getElementById("categories");
    // categoriesDiv.innerHTML = "";
    data.forEach((element) => {
        console.log(element);
        const productsDiv = document.createElement("div");
        
    productsDiv.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${element.title}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        `;
        categoriesDiv.append(productsDiv);
  });
};

