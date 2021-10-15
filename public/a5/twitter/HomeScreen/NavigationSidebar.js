const NavigationSidebar = (active) => {
    const nav_bar = `<ul class="list-group">
        <a class="list-group-item list-group-item-action wd-remove-border">
            <i class="fab fa-twitter"></i>
        </a>

        <a id="navbar-home" class="list-group-item list-group-item-action ${active === 'home'? 'active' : ''}
         wd-remove-border" href="../HomeScreen/index.html">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-home"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Home
                </div>
            </div>
        </a>

        <a id="navbar-explore" class="list-group-item list-group-item-action ${active === 'explore'? 'active' : ''}
         wd-remove-border" href="../ExploreScreen/index.html">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-hashtag"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Explore
                </div>
            </div>
        </a>

        <a id="navbar-notifications" class="list-group-item list-group-item-action ${active === 'notifications'? 'active' : ''}
         wd-remove-border" href="#">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-bell"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Notifications
                </div>
            </div>
        </a>

        <a id="navbar-messages" class="list-group-item list-group-item-action ${active === 'messages'? 'active' : ''}
         wd-remove-border" href="#">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Messages
                </div>
            </div>
        </a>

        <a id="navbar-bookmarks" class="list-group-item list-group-item-action ${active === 'bookmarks'? 'active' : ''}
         wd-remove-border" href="#">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-bookmark"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Bookmarks
                </div>
            </div>
        </a>

        <a id="navbar-lists" class="list-group-item list-group-item-action ${active === 'lists'? 'active' : ''}
         wd-remove-border" href="#">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-list"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Lists
                </div>
            </div>
        </a>

        <a id="navbar-profile" class="list-group-item list-group-item-action ${active === 'profile'? 'active' : ''}
         wd-remove-border" href="#">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-user"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    Profile
                </div>
            </div>
        </a>

        <a id="navbar-more" class="list-group-item list-group-item-action ${active === 'more'? 'active' : ''}
         wd-remove-border" href="#">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <i class="fa fa-ellipsis-h"></i>
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    More
                </div>
            </div>
        </a>

    </ul>

    <div class="d-grid ">
        <button class="btn btn-primary mt-2 rounded-pill wd-bg-color-twitter-blue">
            Tweet
        </button>
    </div>`

    return(nav_bar);
}
export default NavigationSidebar;
