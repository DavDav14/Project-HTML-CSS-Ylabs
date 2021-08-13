// event pada saat link di klik
$('.page-scroll').on('click',function(e){

    //ambil isi dari href nya
    var tujuan = $(this).attr('href');

    //tangkap elemennya
    var elemenTujuan = $(tujuan);

    //Pindahkan scrollnya ke bawah
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});

//============= Buat efek PARALLAX =============
$(window).scroll(function(){

    //Menampung Var Scroll 
    var wScroll = $(this).scrollTop();

    // =========== Untuk mengatur Jumbotron======
    //Untuk mengatur kecepatan scroll foto profil
    $("#profile .cont-jumbotron .fotoDav").css({
        'transform': 'translate(0px,'+ wScroll/22 +'%)'
    });

    //Untuk mengatur kecepatan scroll dari nama
    $("#profile .cont-jumbotron h1").css({
        'transform': 'translate(0px,'+ wScroll/2 +'%)'
    });

    //Untuk mengatur kecepatan scroll dari p
    $("#profile .cont-jumbotron p").css({
        'transform': 'translate(0px,'+ wScroll/1.2 +'%)'
    });
    // ============ Akhir dari Jumbotron ========

    // ========= Awal dari deskripsi ============
    if(wScroll > $('.deskripsi').offset().top -50){
        $('.deskripsi .desKiri').each(function(i){
            setTimeout(function(){
                $('.deskripsi .desKiri').eq(i).addClass('desMuncul');
            },350 * (i+1));
        });
        $('.deskripsi .desKanan').each(function(i){
            setTimeout(function(){
                $('.deskripsi .desKanan').eq(i).addClass('desMuncul');
            },650 * (i+1));
        });
        $('.deskripsi .desTengah').each(function(i){
            setTimeout(function(){
                $('.deskripsi .desTengah').eq(i).addClass('desMuncul');
            },950 * (i+1));
        });
    };


    //========== Awal mengatur About Me =========
    //buat about muncul pas di scroll
    if(wScroll >  $('#work-experience').offset().top - 210){
        $('#work-experience .pKiri').addClass('pMuncul');
        $('#work-experience .pKanan').addClass('pMuncul');
    };
    // ======== Akhir mengatur About Me =========

    // ======== Awal mengatur Education =========
    if(wScroll > $('#education').offset().top - 210){
        $('#education .eduProfile').each(function(i){
            setTimeout(function(){
                $('#education .eduProfile').eq(i).addClass('eduMuncul');
            },350 * (i+1));
        });
    };
    // ======= Akhir mengatur Education =========

    // ======= Awal mengatur Skills ============
    if(wScroll > $('#skills').offset().top -210){
        $('#skills .sKiri').each(function(i){
            setTimeout(function(){
                $('#skills .sKiri').eq(i).addClass('sMuncul');
            }, 200 * (i+1));
        });
        $('#skills .sKanan').each(function(i){
            setTimeout(function(){
                $('#skills .sKanan').eq(i).addClass('sMuncul');
            }, 200 * (i+1));
        });
    };
    // ======= Akhir mengatur skills ===========

    //======= Awal mengatur FORM ==============
    if(wScroll > $('#contact-me').offset().top - 210){
        $('#contact-me .fKiri').each(function(i){
            setTimeout(function(){
                $('#contact-me .fKiri').eq(i).addClass('fMuncul');
            }, 300 * (i+1));
        });
        $('#contact-me .fKanan').each(function(i){
            setTimeout(function(){
                $('#contact-me .fKanan').eq(i).addClass('fMuncul');
            }, 500 * (i+1));
        });
        $('#contact-me .fBawah').each(function(i){
            setTimeout(function(){
                $('#contact-me .fBawah').eq(i).addClass('fMuncul');
            }, 1200 * (i+1));
        });
    };
});

//Event console.log (soal Js no 4)
var form = document.getElementById('form-contact')

form.addEventListener('submit',function(event){
    event.preventDefault() //membuat form menjadi auto submit menggunakan code yang sudah kita buat

    var firstName = document.getElementById('firstname').value //mengambil data firstname
    console.log(firstName)

    var lastName = document.getElementById('lastname').value //mengambil data lastname
    console.log(lastName)

    var select = document.getElementById('select').value //mengambil data select
    console.log(select)

    var textarea = document.getElementById('textarea').value //mengambil data dari textarea (message)
    console.log(textarea)
})

