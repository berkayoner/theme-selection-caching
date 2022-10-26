$(function(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('body').attr('mode', 'dark');
        if(Cookies.get('mode') == 'light'){
            $('body').attr('mode', 'light');
        }
    }else{
        $('body').attr('mode', 'light');
        if(Cookies.get('mode') == 'dark'){
            $('body').attr('mode', 'dark');
        }
    }

    $('.theme span').click(function(){
        $('body').attr('mode', $(this).attr('data-palette'));
        Cookies.set('mode', $(this).attr('data-palette'));
	});
});