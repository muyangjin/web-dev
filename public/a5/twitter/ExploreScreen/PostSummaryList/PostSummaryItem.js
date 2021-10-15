const PostSummaryItem = (post) => {
    return(
        `
        <li class="list-group-item">
            <div class="row">
                <div class="col-9 col-md-10">
                    <span class="wd-font-secondary">${post.topic}</span><br>
                    <span class="font-main">${post.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="wd-font-secondary"> - ${post.time}</span><br>
                    <span class="wd-font-main">
                        ${post.title}
                    </span>
                </div>
                <div class="col-3 col-md-2">
                    <img src = ${post.image} class="img-fluid ">
                </div>
            </div>
        </li>
        `
    )
}
export default PostSummaryItem;