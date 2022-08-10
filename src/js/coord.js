export default class Coord {
    key = '52VkxOmjclV4FQgQYF1LCztruBMGeKB02wkUy1Jo';
    url = 'https://api.ipbase.com/v2/info';
    ipDestiny;
    useLocation;
    constructor(ipDestiny) {
        this.ipDestiny = ipDestiny;
    }

    async #getCoordIP() {
        const response = await (await fetch(`${this.url}?ip=${this.ipDestiny}&apikey=${this.key}`)).json();
        const { latitude, longitude } = await response.data.location;
        return {latitude, longitude};
    }

    #getUserLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                this.useLocation = {latitude:coords.latitude,longitude:coords.longitude};
                resolve(this.useLocation)
            },
                (err) => {
                    console.log("No se pudo obtener la IP del navegador.")
                    reject();
                }
            );
        })
    }

    async getCoord(){
        try {
            const origin =  await this.#getUserLocation();
            const destiny = await this.#getCoordIP();
            return {
                origin,
                destiny
            }
        } catch (error) {
            console.error("ERROR#",error);
        }
    }
}

