module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addCollection("books", function(collectionApi){
        return collectionApi.getFilteredByGlob("books/*.md").sort(function(a,b){
            return a.data.order - b.data.order;
        });
    });
    return {
        dir:{
            input: ".",
            output: "_site"
        }
    };
};