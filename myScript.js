const virtualPet = {
    name: "Charcadet",
    type: "Fire Child Pokémon",
    age: 1,
    happiness: 50,
    hunger: 50,

    evolve: function() {
        if (this.happiness > 80 && this.hunger < 20) {
            this.type = "Fire Warrior Pokémon";
            this.name = "Armarouge";
        } else if (this.happiness < 30 && this.hunger > 70) {
            this.type = "Fire Blades Pokémon";
            this.name = "Ceruledge";
        }
        this.updateImage();
    },

    feed: function(amount) {
        this.hunger = Math.max(this.hunger - amount, 0); // Ensure hunger doesn't go below 0
        this.happiness = Math.min(this.happiness + amount / 2, 100); // Ensure happiness doesn't exceed 100
        this.updateStatus();
    },

    play: function(time) {
        this.happiness = Math.min(this.happiness + time, 100); // Ensure happiness doesn't exceed 100
        this.hunger = Math.min(this.hunger + time / 2, 100); // Ensure hunger doesn't exceed 100
        this.updateStatus();
    },

    passTime: function() {
        this.age += 1;
        this.happiness = Math.max(this.happiness - 10, 0); // Ensure happiness doesn't go below 0
        this.hunger = Math.min(this.hunger + 10, 100); // Ensure hunger doesn't exceed 100
        this.evolve();
        this.updateStatus();
    },

    updateStatus: function() {
        document.getElementById('petStatus').innerHTML = `
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Type:</strong> ${this.type}</p>
            <p><strong>Age:</strong> ${this.age}</p>
            <p><strong>Happiness:</strong> ${this.happiness}</p>
            <p><strong>Hunger:</strong> ${this.hunger}</p>
        `;
    },

    updateImage: function() {
        let imageUrl = '';
        switch (this.type) {
            case "Fire Warrior Pokémon":
                imageUrl = 'images/Fire Warrior Pokémon.png';
                break;
            case "Fire Blades Pokémon":
                imageUrl = 'images/Fire Blades Pokémon.png';
                break;
            default:
                imageUrl = 'images/Fire Child Pokémon.png';
                break;
        }
        document.getElementById('petImage').innerHTML = `<img src="${imageUrl}" alt="${this.type}">`;
    }
};

function feedPet() {
    virtualPet.feed(20);
}

function playWithPet() {
    virtualPet.play(30);
}

function passTime() {
    virtualPet.passTime();
}

// Initial display of the pet's status and image
virtualPet.updateStatus();
virtualPet.updateImage();
