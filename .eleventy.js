module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir:{
            input: ".",
            output: "_site"
        }
    };
};