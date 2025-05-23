import photo from "./photo.jpg"
function About(){
    return        <section className="sec-1">
    <div className="sec-1__text">
        <h1 className="sec-1__title" >The Big Recipe Book Team</h1>
        <p className="sec-1__txt">Our website includes recipes from all over the world. You will find here both recipes of national cuisine and recipes of dishes of world cuisines.
And also, dishes from various products.
We try to constantly add new recipes so that you can cook delicious, fast and beautiful. Enjoy your appetite! The recipes of dishes that you see in this section are collected from various sources and represent the most popular.
We offer you recipes that are most popular with our guests and site visitors.
If you know any other interesting recipe that you want to share with us, send it to us and we will definitely publish it</p>
    </div>
    <div className="sec-1__img">
        <img src={photo} alt=""/>


    </div>
</section>


}

export{About};