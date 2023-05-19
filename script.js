document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('userList');
    const professionSelect = document.getElementById('profession');
    const filterBtn = document.getElementById('filterBtn');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const addProfessionInput = document.getElementById('addProfession');
    const addBtn = document.getElementById('addBtn');
  
    let users
     = [
      { id: 1, name: "John", age: "18", profession: "developer" },
      { id: 2, name: "Jack", age: "20", profession: "developer" },
      { id: 3, name: "Karen", age: "19", profession: "admin" }
    ];
  
    function renderUserList() {
        userList.innerHTML = '';
        users.forEach(function(user) {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
          <section>  ${user.id}.&nbsp  Name: ${user.name}&nbsp &nbsp  Profession: ${user.profession}&nbsp &nbsp Age: ${user.age} </section>`
         
          userList.appendChild(card);
        });
      }
  
    filterBtn.addEventListener('click', function() {
      const selectedProfession = professionSelect.value;
      if (selectedProfession === '') {
        alert('Please select a profession before clicking the button.');
      } else {
        const filteredUsers = users.filter(function(user) {
          return user.profession === selectedProfession;
        });
        users = filteredUsers;
        renderUserList();
      }
    });
  
    addBtn.addEventListener('click', function() {
        const name = nameInput.value;
        const age = ageInput.value;
        const profession = addProfessionInput.value;
    
        if (name && age && profession) {
          const newUser = {
            id: users.length + 1,
            name: name,
            age: age,
            profession: profession
          };
          users.push(newUser);
          renderUserList();
        } else {
          alert('Please fill in all fields before adding a user.');
        }
      });
    
      renderUserList();
    });