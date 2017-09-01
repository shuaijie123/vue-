import $ from "zepto"

let affix = {
    // 当绑定元素插入到 DOM 中。
    inserted(el, binding) {

        let elTop = $(el).offset().top;

        $(document).on("scroll", function() {
            let scrollTop = this.body.scrollTop;
            if (scrollTop >= elTop) {
                $(el).css({
                    "position": "fixed",
                    "top": binding.value,
                    "z-index": 100
                }).parent().css({
                    "padding-top": $(el).height()
                })
                $(".bigbox").css({ "margin-top":".48rem","overflow":"hidden"});
            } else {
                
                $(el).css({
                    "position": "relative",
                    "top": 0
                }).parent().css({
                    "padding-top": 0
                })
            }

        })
    },
    unbind() {
        $(document).off("scroll")
    }
}

export default affix;