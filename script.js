class MovieTable{
    constructor(){
        //Gets a bunch of global variables from the page
        this.$table = $("#movie-table");
        this.$nameForm = $("#movie-name");
        this.$ratingForm = $("#movie-rating");
        this.$submitButton = $("#submit-button");
        
    }

    //Function to add the movie
    addMovie(){
        let [movieName, movieRating] = this.getNameRating();
        //If either value is undefined nothing happens
        if (!movieName || !movieRating){
            return;
        }
        //console.log(movieName, movieRating);
        //Creates a new table row
        let $tableRow = $("<tr>");
        let $nameCell = $("<th>"+movieName+"</th>");
        let $ratingCell = $("<th>"+movieRating+"</th>");
        let $delButtonCell = $("<th>");
        let $delButton = $("<input type='Submit' value='Delete'>");
        const self = this;
        $delButton.click(function(event){
            self.removeMovie(event);
        });
        this.$table.append($tableRow.append([$nameCell,$ratingCell,$delButtonCell.append($delButton)]));
    }

    //Function to get the name and rating
    getNameRating(){
        //Gets and checks the movie name
        let name = this.$nameForm.val();
        if(name.length < 2){
            alert("Movie name must have at least 2 characters in it!");
            name = undefined;
        }
        //Gets and checks the movie rating
        let rating = Number(this.$ratingForm.val());
        if(!rating || rating < 0 || rating > 10){;
            alert("Movie rating must be a number between 0 and 10!");
            rating = undefined;
        }
        return [name, rating];
    }

    removeMovie(event){
        let target = event.target;
        let parentRow = target.parentElement.parentElement;
        parentRow.remove();
    }

}
const movieTable = new MovieTable();
movieTable.$submitButton.click(function(){
    movieTable.addMovie();
});