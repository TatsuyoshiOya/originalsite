var header = $("#vue-header");
// スクロール量
$scrollTopDistance = $(window).scrollTop();
// ヘッダーの高さ量
var headerHeight = header.outerHeight(true);


// スクロール操作するたびに起動
$window.on('scroll', function() {
    $scrollTopDistance = $(window).scrollTop();
    if($scrollTopDistance >= headerHeight) {
        header.addClass('is-loaded');
    } else if($scrollTopDistance <= headerHeight) {
        header.removeClass('is-loaded');
    }
});


// 送信ボタンが押されたら
$(document).on()


// 写真のスライド部分
$(".single-item").slick({
    dots: true;
});

// < !--スムーズスクロール部分の記述 -->
    // <script>
        $(function(){
            // #で始まるアンカーをクリックした場合に処理
            $('a[href^=#]').click(function () {
                // スクロールの速度
                var speed = 400; // ミリ秒
                // アンカーの値取得
                var href = $(this).attr("href");
                // 移動先を取得
                var target = $(href == "#" || href == "" ? 'html' : href);
                // 移動先を数値で取得
                var position = target.offset().top;
                // スムーススクロール
                $('body,html').animate({ scrollTop: position }, speed, 'swing');
                return false;
            });
        });






$(function() {
    jQuery.easing.quart = function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };

    $(function () {
        jQuery(‘.scroll’).click(function () {
            if (location.pathname.replace(/^\//, ‘’) == this.pathname.replace(/^\//, ‘’) && location.hostname == this.hostname) {
                var $target = jQuery(this.hash);
                $target = $target.length && $target || jQuery(‘[name =’ + this.hash.slice(1) + ‘]’);
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    jQuery(‘html, body’).animate({ scrollTop: targetOffset }, 1200, ‘quart’);
                    return false;
                }
            }
        });
    });
});