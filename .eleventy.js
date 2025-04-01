module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addCollection("blogs", function(collectionApi){
        return collectionApi.getFilteredByGlob("src/blogs/*.md").sort(function(a,b){
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addCollection("books", function(collectionApi){
        return collectionApi.getFilteredByGlob("src/books/*.md").sort(function(a,b){
            return a.data.order - b.data.order;
        });
    });
    return {
        dir:{
            input: "src",        
            includes: "_includes",
            layouts: "_includes",
            output: "_site"
        }
    };
};