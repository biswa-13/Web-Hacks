/***
@author BiswaRanjan Samal
@contactMe bichhubiswa@gmail.com
// Want to convert your entire web-application to a dark theme(Dark Mode) but fearing to write lots of code for it, then chilll here is the sollution for you, 2 lines of code can change your flavour.
// Execute below function in your application whenever you want to convert your application into Dark Theme mode, either you can call this on adhoc manner or you can call this on loading of your application 
//or based upon some condition/ user inputs, choice is yours and yes below function is also yours, enjoy :) …

**/




function setDarkMode(){
    document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
    document.body.querySelectorAll('img, picture, video').forEach(el => el.style.filter = 'invert(1) hue-rotate(180deg)');
}
setDarkMode()
