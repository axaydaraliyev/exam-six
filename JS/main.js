async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Xatolik yuz berdi: " + response.status);
  }

  let data = await response.json();
  updateUi(data);
}

const listEl = document.querySelector(".list");

const updateUi = function (users) {
  if (!users) return;
  listEl.innerHTML = "";

  users.forEach(
    ({ name, username, email, phone, website, address, company }) => {
      const li = document.createElement("li");
      li.classList.add("card")

      li.innerHTML = `
      <h2>${name}</h2>
     <p><b>Username:</b> ${username}</p>
     <p> <b>Email:</b> ${email}</p>
     <p> <b>Phone:</b> ${phone}</p>
     <p> <b>Website:</b> 
     <a href="https://${website}" target="_blank"">${website}</a></p>

      <div class="address">
        <span><b>🏠 Address:</b></span>
        <span>${address.street}, ${address.suite}</span>
        <span>${address.city}, ${address.zipcode}</span>
      </div>

      <div class="company">
        <span class="company-name">🏢 ${company.name}</span>
        <span><i>${company.catchPhrase}</i></span>
        <span>"${company.bs}"</span>
      </div>
    `;

      listEl.append(li);
    }
  );
};
getData();
