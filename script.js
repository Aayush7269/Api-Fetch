
var card = document.querySelector(".card")

      fetch("https://randomuser.me/api/")
    .then( raw=> raw.json())
    .then(result => {
        console.log(result)
        
        const {name, email, picture, location} = result.results[0]

        card.innerHTML = `
          <div class="w-64 bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
                <img class="w-full h-56 object-cover" src="${picture.medium}" alt="">
                <div class="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2">
                    <h2 class="text-xl font-bold">${name.first + name.last}</h2>
                    <p class="text-sm">${email}</p>
                </div>
            </div>
            <div class="px-6 py-4">
                <p class="text-gray-700 text-base">
                    ${location.state + location.country}
                </p>
            </div>
        </div>`
    }

    )