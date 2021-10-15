import PostSummaryList from "./PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="wd-remove-border pt-0 pb-0">
            <div class = "row align-items-center">
                <div class = "col-10 col-lg-11 ">
                    <div class="input-group">
                        <span class="input-group-text wd-rounded-start"><i class="fas fa-search"></i></span>
                        <input type="text"
                               class="form-control wd-rounded-end"
                               placeholder="Search Twitter">
                    </div>
                </div>
                <div class = "col-2 col-lg-1 text-center">
                    <a href = "#">
                        <i class="fa fa-cog fa-2x wd-fg-color-twitter-blue"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="wd-remove-border p-0 mb-0">
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
        </div>

        <div class="list-group-item p-0 mb-2">
            <img src="../../../media/explore-main-spacex-starship.jpeg" class="img-fluid" alt="...">
            <p class="wd-img-caption-bottom-left-corner">SpaceX's Starship</p>
        </div>
            
        ${PostSummaryList()} 
    `);

}
export default ExploreComponent;