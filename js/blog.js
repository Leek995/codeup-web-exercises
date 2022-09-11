(function(){
    "use strict"
    $(document).ready(function (){
            // requesting file data from server
        function renderHTML(blogPost) {
            let content = '';
            for(let i = 0; i < blogPost.length; ++i){
                content += `<div id="post">\n
                              <h1>${blogPost[i]['title']}</h1>\n
                              <textarea>${blogPost[i]['content']}</textarea>\n
                              <ul>\n
                                  <li>${blogPost[i]['categories']}</li>\n
                              </ul>\n
                              <input type="date" id="start" value="2022-09-10" min="2020-09-01" max="2025-09-01">\n
                          </div>`;
            }
            return content;
        }
        function postCat(blogPost){
            blogPost.forEach(function (post){
                if(post['categories'] < 1){
                    console.log(`categories are greater than one`);
                }
            })
        }
        function getDataLoad() {
            $.get('../data/blog.json')
                .done(function (blogPost) {
                    console.log(blogPost);
                    let blogPostHTML = renderHTML(blogPost);
                    $('#post').html(blogPostHTML);
                    console.log(blogPost[0]['categories']);
                })
                .fail(function (jqXhr, status, error) {
                    console.log(jqXhr);
                    console.log(status);
                    console.log(error);
                })
        }
        getDataLoad();

    })
})();