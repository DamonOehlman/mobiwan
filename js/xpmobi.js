XPMOBI = (function() {
    
    var supportsTouch = 'ontouchstart' in window;
    
    /* internals */
    
    function init() {
        $('#togglenav').click(function() {
            $('#topdrop').toggleClass('dropped');
        });
        
        window.scrollTo(0,1);
    } // init
    
    /* exports */
    
    $(document).ready(init);
})();