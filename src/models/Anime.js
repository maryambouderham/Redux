export class Anime {
    constructor(id, title, description, image, nbViews = "6.3k", rating = "8.5", animeTypes = ["animation", "drama", "action"], actors = ["Griffin Puatu", "dadaz ", "'dazdaz"],startingDate=new Date().toLocaleDateString()) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
        this.animeTypes = animeTypes
        this.actors = actors
        this.nbViews = nbViews
        this.rating = rating
        this.startingDate = startingDate

        
    }
}