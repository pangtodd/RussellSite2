module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addCollection("books", function(collectionApi){
        return collectionApi.getFilteredByGlob("books/*.md")
    });
    return {
        dir:{
            input: ".",
            output: "_site"
        }
    };
};