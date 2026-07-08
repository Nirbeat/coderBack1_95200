import CartsRepository from "../repositories/carts.repository.js";

class CartService {

    constructor(CartsRepository) {
        this.CartsRepository = CartsRepository;
    }

    async addProductToCart(cid, pid) {
        return await this.CartsRepository.addProductToCart(cid, pid);
    }
}

export default new CartService(CartsRepository);