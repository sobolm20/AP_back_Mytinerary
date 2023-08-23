import 'dotenv/config.js'
import { connect } from 'mongoose'
import City from '../City.js'
import User from '../User.js'

const cities = [
    {
        city: "Hong Kong City",
        country: "Hong Kong",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/hong-kong-imagenes-de-noche-600x347.jpg",
        currency: "Hong Kong dollar",
        language: "Chino",
        population: "7413000000",
        dishes: "Curry Fish Balls",
        interest: "No",
       admin_id: "fran@mh.com"
    },
    {
        city: "Sydney",
        country: "Australia",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/sydney-imagenes-de-noche-600x349.jpg",
        currency: "Australian dollar",
        language: "English",
        population: "5312000000",
        dishes: "Meatloaf",
        interest: "No",
        admin_id: "fran@mh.com"
    },
    {
        city: "París",
        country: "Francia",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/paris-imagenes-de-noche-600x448.jpg",
        currency: "Euro",
        language: "French",
        population: "2161000000",
        dishes: "soupe a l'oignon",
        interest: "No",
        admin_id: "cin@mh.com"
    },
    {
        city: "Bangkok",
        country: "Tailandia",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/bangkok-imagenes-de-noche-600x400.jpg",
        currency: "Hong Kong dollar",
        language: "Thai",
        population: "10539000000",
        dishes: "Pad Thai",
        interest: "The Grand Palace in Bangkok",
        admin_id: "fran@mh.com"
    },
    {
        city: "Los Angeles",
        country: "Estados Unidos",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/los-angeles-imagenes-de-noche-600x337.jpg",
        currency: "American dollar",
        language: "English",
        population: "3849000000",
        dishes: "French Dip Sandwich",
        interest: "No",
        admin_id: "igna@mh.com"
    },
    {
        city: "Londres",
        country: "Inglaterra",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/londres-imagenes-de-noche-600x398.jpg",
        currency: "pound sterling",
        language: "English",
        population: "8982000000",
        dishes: "Fish and chips",
        interest: "No",
        admin_id: "cin@mh.com"
    },
    {
        city: "Kuala Lumpur",
        country: "Malasia",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/kuala-lumpur-malasia-imagenes-de-noche-600x377.jpg",
        currency: "Ringgit malayo",
        language: "Malayo",
        population: "1808000000",
        dishes: "Laksa Soup",
        interest: "No",
        admin_id: "fran@mh.com"
    },
    {
        city: "San Francisco",
        country: "Estados Unidos",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/san-francisco-imagenes-de-noche-600x395.jpg",
        currency: "American dollar",
        language: "English",
        population: "815201",
        dishes: "Clam Chowder Soup",
        interest: "No",
        admin_id: "igna@mh.com"
    },
    {
        city: "Singapur City",
        country: "Singapur",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/singapur-imagenes-de-noche-600x454.jpg",
        currency: "Singapur dollar",
        language: "Malayo",
        population: "5454000000",
        dishes: "Bak Chor Mee",
        interest: "No",
        admin_id: "fran@mh.com"
    },
    {
        city: "Ciudad de México",
        country: "México",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/ciudad-de-mexico-imagenes-de-noche-600x400.jpg",
        currency: "Mexican Peso",
        language: "Spanish",
        population: "126700000",
        dishes: "Enchiladas",
        interest: "No",
        admin_id: "igna@mh.com"
    },
    {
        city: "Barcelona",
        country: "España",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/barcelona-imagenes-de-noche-600x360.jpg",
        currency: "Euro",
        language: "Catalan",
        population: "1620000",
        dishes: "Suquet de Peix",
        interest: "No",
        admin_id: "cin@mh.com"
    },
    {
        city: "Osaka",
        country: "Japón",
        image: "https://coyotitos.com/wp-content/uploads/2015/09/osaka-imagenes-de-noche-600x373.jpg",
        currency: "Yen",
        language: "Japanese",
        population: "2691000000",
        dishes: "Takoyaki",
        interest: "No",
        admin_id: "fran@mh.com"
    },
    {
        city: "Dubai",
        country: "Emiratos Arabes",
        image: "https://viajes.nationalgeographic.com.es/medio/2017/04/24/dubai-emiratos-arabes-unidos_e7e63fff.jpg",
        currency: "Dirham",
        language: "Arabic",
        population: "3331000000",
        dishes: "Hummus",
        interest: "No",
        admin_id: "fran@mh.com"
    },
    {
        city: "Cuzco",
        country: "Peru",
        image: "https://viajes.nationalgeographic.com.es/medio/2017/04/24/cuzco-peru_f68afd77.jpg",
        currency: "Sol peruvian",
        language: "Spanish",
        population: "428450",
        dishes: "Chiri Uchu",
        interest: "No",
        admin_id: "igna@mh.com"
    },
    {
        city: "Roma",
        country: "Italy",
        image: "https://viajes.nationalgeographic.com.es/medio/2017/04/24/roma_2d72ff93.jpg",
        currency: "Lira Italian",
        language: "Italian",
        population: "2873000000",
        dishes: "Carpaccio",
        interest: "No",
        admin_id: "cin@mh.com"
    }
    ]

    async function createCities(arrayCities) {
        try {
            await connect(process.env.DATABASE_URL)
            for (let city of arrayCities){
                let user = await User.findOne({ mail:city.admin_id})
                let admin_id = await user._id
                city.admin_id = admin_id
                await City.create(city)
            }
            console.log('done!')
        } catch (error) {
            console.log(error)
        }
        }
        
        
        createCities (cities)




    // connect(process.env.DATABASE_URL)
    // .then(()=>{
    //     City.insertMany(cities)
    //     console.log('done!');
    // })
    // .catch(err=>console.log(err))


