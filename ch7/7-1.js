class Organization {
    #name
    #country
    constructor(data) {
        this.#name = data.name;
        this.#country = data.country;
    }

    get name() {
        return this.#name
    }

    get country() {
        return this.#country
    }
}

let organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

function getOrganization() {
    return organization;
}

console.log(getOrganization().name);
console.log(getOrganization().country)
