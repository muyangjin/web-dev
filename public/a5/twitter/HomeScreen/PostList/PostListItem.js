const PostListItem = (post_full) => {
    return(
        `
        <li class="list-group-item wd-bg-color-black">
            <div class="row">
                <div class = "col-2 col-xxl-1">
                    <img class="rounded-circle wd-post-author-img-dimension"
                        src=${post_full.user_icon}>
                </div>
                <div class = "col-10 col-xxl-11">
                    <span class="wd-font-main">${post_full.userName}</span>
                    ${post_full.verified ? '<i class="fa fa-check-circle"></i>' : ``}
                    <span class="wd-font-secondary">${post_full.handle} &middot ${post_full.time}</span><br>
                    <span class="wd-fg-color-white">${post_full.post_text}</span>
                    
                    ${post_full.link_image === '' ? '' : 
                        post_full.link_title === '' ? 
                            `
                            <div class="wd-rounded-post wd-border-post img-fluid">
                            <img class = "wd-rounded-post wd-border-post img-fluid wd-rounded-post-top wd-fill-div"
                                 src=${post_full.link_image}
                            >
                            </div>
                            ` : 
                            `
                            <div class="wd-rounded-post wd-border-post">
                                <img class = "img-fluid wd-rounded-post-top wd-fill-div"
                                     src=${post_full.link_image}
                                >
                    
                                <p class="p-3 wd-border-post-top m-0">
                                    <span class = "wd-font-main">
                                        ${post_full.link_title}
                                    </span><br>
                                    <span class = "wd-font-secondary">
                                        ${post_full.link_summary}
                                    </span>
                                </p>
                            </div>
                            `}
                    
                    <div class="row mt-3 mb-2">
                        <div class="col-3">
                            <a href="#" class="wd-font-secondary wd-remove-text-decoration">
                                <i class="fa fa-comment me-2"></i>  ${post_full.comment_count}
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="#" class="wd-font-secondary wd-remove-text-decoration">
                                <i class="fa fa-retweet me-2"></i>  ${post_full.retweet_count}
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="#" class="wd-font-secondary wd-remove-text-decoration">
                                <i class="fa fa-heart me-2"></i>  ${post_full.like_count}
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="#" class="wd-font-secondary wd-remove-text-decoration">
                                <i class="fa fa-external-link-alt me-2"></i>
                            </a>
                        </div>
                    
                    
                    </div>
                    
                </div>
            </div>
        </li>
        `
    )
}
export default PostListItem;