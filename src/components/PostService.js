import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get("http://localhost:1747/api/v1/products/")
        return response.data
    }
}