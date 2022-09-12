(function(){
    "use strict"
    $(document).ready(function (){
            // requesting file data from server
        function renderHTML(blogPost) {
            let content = '';

            for(let i = 0; i < blogPost.length; ++i){
                if(blogPost[i]['categories'].length === 1){
                    blogPost[i]['categories'].forEach(function (category){
                        var ul = document.getElementsByTagName('ul')[0]
                        var li = document.createElement('li');
                        li.innerText = `${category}`;
                        ul.append(li);
                        content += `<div id="post">\n
                            \t<h1>${blogPost[i]['title']}</h1>\n
                            \t<textarea>${blogPost[i]['content']}</textarea>\n
                            \t<li>${blogPost[i]['categories'][0]}</li>\n
                            \t<input type="date" id="start" value="2022-09-10" min="2020-09-01" max="2025-09-01">\n
                            </div>`;
                    })

                }else if(blogPost[i]['categories'].length > 1) {
                    content += `<div id="post">\n
                            \t<h1>${blogPost[i]['title']}</h1>\n
                            \t<textarea>${blogPost[i]['content']}</textarea>\n
                            \t<li>${blogPost[i]['categories'][0]}</li>\n
                            \t<li>${blogPost[i]['categories'][1]}</li>\n
                            \t<li>${blogPost[i]['categories'][2]}</li>\n
                            \t<li>${blogPost[i]['categories'][3]}</li>\n
                         
                            \t<input type="date" id="start" value="2022-09-10" min="2020-09-01" max="2025-09-01">\n
                            </div>`;
                }
            }
            return content;

        }



        function getDataLoad() {
            $.get('../data/blog.json')
                .done(function (blogPost) {
                    let blogPostHTML = renderHTML(blogPost);
                    $('#post').html(blogPostHTML);
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