import axios from "axios";

class Api{
    constructor () {
        this.api = axios.create({
            baseURL:'http://localhost:5005/'
        })
        
        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            return config
        }, (error) => {
            console.log(error)
        })
        this.api.interceptors.response.use((response) => response , 
        (error) => {
            if(error.response.status === 401){
                localStorage.removeItem('token')
                window.location = '/'
            }
            throw error
        })
    }
    //Auth
    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/auth/login', loginInfo)
            localStorage.setItem('token', data.token)
            return { data }
        } catch (error) {
            throw error
        }
    }
    register = async(registerInfo) => {
        try{
            const { data } = await this.api.post('/auth/signup', registerInfo)
           
            return data
        } catch (error) {
            throw error
        }
    }
    //Products
    getAllProducts = async () => {
        try {
            const { data } = await this.api.get('/products')
            return data
        } catch (error) {
            throw error
        }
    }
    getOneProduct = async (id) => {
        try{
            const {data} = await this.api.get(`/products/${id}`)
            return data
        } catch (error){
            throw error
        }
    }
    //Favorites
    getAllFavorites = async () => {
        try {
            const { data } = await this.api.get('/myFavorites')
            return data
        } catch (error) {
            throw error
        }
    }
    addFavorites = async (productId, newFavorite) => {
        try {
            const { data } = await this.api.post(`/myFavorites/${productId}`, newFavorite)
            return data
        } catch (error) {
            throw error
        }
    }
    deleteFavorite = async (productId) => {
        try {
            const { data } = await this.api.delete(`/myFavorites/${productId}`)
            return data
        } catch (error) {
            throw error
        }
    }
    //Reviews Products - without auth
    getAllReviews = async (productId) => {
        try {
            const { data } = await this.api.get(`/reviews/${productId}`)
            return data
        } catch (error) {
            throw error
        }
    }

    //Reviews user
    addReview = async (productId, newReview) => {
        try {
            const { data } = await this.api.post(`/review/${productId}`, newReview)
            return data
        } catch (error) {
            throw error
        }
    }
    updateReview = async (reviewId, upReview) => {
        try {
            const { data } = await this.api.put(`/review/${reviewId}`, upReview)
            return data
        } catch (error) {
            throw error
        }
    }

    deleteReview = async (reviewId) => {
        try {
            const { data } = await this.api.delete(`/review/${reviewId}`)
            return data
        } catch (error) {
            throw error
        }
    }
    
    //Cart Products
    getCartProduct = async () => {
        try {
            const { data } = await this.api.get('/cartproduct/cart-product')
            return data
        } catch (error) {
            throw error
        }
    }
    addProductsInTheCart = async (productId, newProduct) => {
        try {
            const { data } = await this.api.post(`/cartproduct/add-product/${productId}`, newProduct)
            return data
        } catch (error) {
            throw error
        }
    }

    updateQuantity = async (productId, upQuantity) => {
        try {
            const { data } = await this.api.put(`/cartproduct/add-quantity-of-product/${productId}`, upQuantity)
            return data
        } catch (error) {
            throw error
        }
    }
    
    //Cart
    createCart = async (productId, newProduct) => {
        try {
            const { data } = await this.api.post(`/cart/${productId}`, newProduct)
            return data
        } catch (error) {
            throw error
        }
    }
    updateCart = async (productId, update) => {
        try {
            const { data } = await this.api.put(`/cart/update/${productId}`, update)
            return data
        } catch (error) {
            throw error
        }
    }
    cartOpenedToPlaced = async () => {
        try {
            const { data } = await this.api.put('/cart/placed-order')
            return data
        } catch (error) {
            throw error
        }
    } 
    cartPlacedToPaid = async () => {
        try {
            const { data } = await this.api.put('/cart/paid-order')
            return data
        } catch (error) {
            throw error
        }
    } 
    deleteProductInTheCart  = async (productId) => {
        try {
            const { data } = await this.api.delete(`/cart/remove/${productId}`)
            return data
        } catch (error) {
            throw error
        }
    } 
    cleanClart = async (cartId) => {
        try {
            const { data } = await this.api.delete(`/cart/clean-cart/${cartId}`)
            return data
        } catch (error) {
            throw error
        }
    }
    deleteCart = async (cartId) => {
        try {
            const { data } = await this.api.delete(`/cart/delete-cart/${cartId}`)
            return data
        } catch (error) {
            throw error
        }
    }
}