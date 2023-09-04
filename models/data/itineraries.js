import 'dotenv/config.js'
import { connect } from 'mongoose'
import Itinerary from '../Itinerary.js'
import City from '../City.js'

const itineraries = [
    {
        dishes: "Curry Fish Balls",        
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://thewoksoflife.com/wp-content/uploads/2017/02/curry-fish-balls-13.jpg",
    },
    {
        dishes: "Meatloaf",
        city_id: 'https://img.bestrecipes.com.au/7tEc05QZ/w643-h428-cfill-q90/br/2016/08/easy-meatloaf-recipe-511597-1.jpg',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "",
    },
    {
        dishes: "soupe a l'oignon",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://images.ricardocuisine.com/services/recipes/496x670_88956086056c33f634c1dd.jpg",
    },
    {
        dishes: "Pad Thai",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://i.blogs.es/f9e85e/receta-de-pad-thai-pakus-directo-paladar/1366_2000.jpg",
    },
    {
        dishes: "French Dip Sandwich",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.spendwithpennies.com/wp-content/uploads/2020/01/French-Dip-SpendWithPennies-6.jpg",
    },
    {
        dishes: "Fish and chips",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.heathrowexpress.com/images/default-source/default-album/poppies7703082bec099fe487b809f13105c3987ef.png?sfvrsn=a245d568_0",
    },
    {
        dishes: "Laksa Soup",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.recipetineats.com/wp-content/uploads/2016/09/Laksa.jpg?resize=650,910",
    },
    {
        dishes: "Clam Chowder Soup",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://thecozycook.com/wp-content/uploads/2022/10/Clam-Chowder-1.jpg",
    },
    {
        dishes: "Bak Chor Mee",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://whattocooktoday.com/wp-content/uploads/2016/08/IMG_0405-768x1152.jpg",
    },
    {
        dishes: "Enchiladas",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.gourmet.cl/wp-content/uploads/2021/08/foto-istock-enchilada-tama%C3%B1o-web.jpg",
    },
    {
        dishes: "Suquet de Peix",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.hogarmania.com/archivos/202104/suquet-de-peiz-guiso-de-pescado-receta-karlos-arguinano-karl67480321-848x477x80xX.jpg",
    },
    {
        dishes: "Takoyaki",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.japonalternativo.com/wp-content/uploads/2018/10/receta-casera-de-takoyaki.jpg",
    },
    {
        dishes: "Hummus",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.vueltaalmundosabrosa.com/wp-content/uploads/2017/10/Dubai-humus.jpg",
    },
    {
        dishes: "Chiri Uchu",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.perurail.com/wp-content/uploads/2020/09/manco-capac-el-primer-inca.jpg",
    },
    {
        dishes: "Carpaccio",
        city_id: '',
        price:  100,
        duration: 30, 
        tags: '{"💵".repeat(props.Itineraries.price)}',
        image: "https://www.bautrip.com/images/food/beef-carpaccio.jpg",
    }
    ]

async function createItineraries(arrayItineraries) {
    try {
        await connect(process.env.DATABASE_URL)
        for (let itinerary of arrayItineraries){
            let Itinerary = await City.findOne({ name:City.city})
            let city_id = await city._id
            Itinerary.city_id = city_id
            await Itinerary.create(itinerary)
        }
        console.log('done!')
    } catch (error) {
        console.log(error)
    }
    }
    
    
    createItineraries (itineraries)
