fetch("https://api.escuelajs.co/api/v1/users")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mx-auto border border-danger border-2 mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 700px;">
                    <div class="row g-0">
                        <div class="col-md-4 mb-4 border border-secondary border-2 mb-3 shadow p-3 mb-5 bg-body rounded">
                            <img src="${db.avatar}" class="card-img-top mt-3 mb-3" alt="${db.name}">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title text-center">${db.name}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Email:</strong> ${db.email}</li>
                                    <li class="list-group-item"><strong>Password:</strong> ${db.password}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>`
            }
        document.getElementById("lista").innerHTML = card
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });
    