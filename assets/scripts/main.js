// Global variables are named in Plural

var fixinternetTexts = {
    0: '<span class="violet-text" style="line-height: 2.5;">Ei soovi</span>',
    1: '<span class="violet-text">1M / 0,5M</span><br>alla / üles',
    2: '<span class="violet-text">10M / 5M</span><br>alla / üles',
    3: '<span class="violet-text">20M / 5M</span><br>alla / üles',
    4: '<span class="violet-text">30M / 10M</span><br>alla / üles',
    5: '<span class="violet-text">50M / 30M</span><br>alla / üles'
};

var fixinternetPrices = {
    0: "0",
    1: "25",
    2: "32",
    3: "45",
    4: "135",
    5: "300"
};

var fixphoneTexts = {
    0: '<span class="violet-text">60</span> minutit',
    1: '<span class="violet-text">120</span> minutit',
    2: '<span class="violet-text">240</span> minutit',
};

var fixphonePrices = {
    0: "1.66",
    1: "2.99",
    2: "5.66",
};

// Global variable with local variables 
var mobileMinuteSmsTexts = {
    0: '<span class="violet-text" id="mobile-minute-sum"></span> minutit<br><span class="violet-text" id="mobile-sms-sum"></span> sms-i',
    1: '<span class="violet-text" id="mobile-minute-sum"></span> minutit<br><span class="violet-text" id="mobile-sms-sum"></span> sms-i',
    2: '<span class="violet-text" id="mobile-minute-sum"></span> minutit<br><span class="violet-text" id="mobile-sms-sum"></span> sms-i',
    3: '<span class="violet-text" id="mobile-minute-sum"></span> minutit<br><span class="violet-text" id="mobile-sms-sum"></span> sms-i',
    4: '<span class="violet-text" id="mobile-minute-sum"></span> minutit<br><span class="violet-text" id="mobile-sms-sum"></span> sms-i',
};

var mobileMinuteSmsMinutes = {
    0: "0",
    1: "400",
    2: "900",
    3: "1000",
    4: "2000"
};

var mobileMinuteSmsSmss = {

    0: "0",
    1: "40",
    2: "90",
    3: "1000",
    4: "200"
};

var mobileMinuteSmsPrices = {

    0: "3",
    1: "6",
    2: "12",
    3: "0",
    4: "24"
};


var mobileGbTexts = {
    0: '<br /><span class="violet-text">0GB</span>',
    1: '<span class="violet-text">1,5GB</span><br>3M alla /<br>1M üles',
    2: '<span class="violet-text">5GB</span><br>21,6M alla /<br>5,7M üles',
    3: '<span class="violet-text">10GB</span><br>50M alla /<br>5M üles',
    4: '<span class="violet-text">20GB</span><br>100M alla /<br>50M üles',
    5: '<span class="violet-text">25GB</span><br>100M alla /<br>50M üles',
};

var mobileGbPrices = {
    0: "0",
    1: "6.49",
    2: "9.95",
    3: "16.96",
    4: "29.95",
    5: "35.95"
};

var mobileGbTexts1000 = {
    0: '<span class="violet-text">5GB</span><br>21,6M alla /<br>5,7M üles',
    1: '<span class="violet-text">10GB</span><br>50M alla /<br>5M üles',
    2: '<span class="violet-text">20GB</span><br>100M alla /<br>50M üles',
};

var mobileGbPrices1000 = {
    0: "18.99",
    1: "23.99",
    2: "28.99",
};

var mobileAddedToMinuteSmsMinutes = {
    0: "0",
    1: "0",
    2: "0",
    3: "150",
    4: "300",
    5: "500"
};

var mobileAddedToMinuteSmsSmss = {
    0: "0",
    1: "0",
    2: "0",
    3: "50",
    4: "100",
    5: "200"
};

var mobileDescriptions = {
    0: 'Soodsa Eesti-sisese minutihinnaga ja madala miinimumarvega pakkumine, mis sisaldab ka tasuta firmasiseseid kõnesid. Miinimumarve sisse arvestatakse kõik kasutatud põhiteenused. Miinimumarvele lisanduvad mobiilsete maksete teenused, annetuskampaaniad, kõnekaardi laadimised ja järelmaksuga ostetud kauba arveldusteenus.',
    1: 'Mobiiltelefoni minutimaht sisaldab kõnesid Eestist Rootsi, Soome, Norra, Taani, Läti ja Leedu numbritele (v.a. helistamine personaalnumbritele ja mittegeograafilistele numbritele). Mobiiltelefoni minutimahu täitumisel kehtib Eestist välismaale helistamise tavahind.',
    2: 'Mobiiltelefoni minutimaht sisaldab kõnesid Eestist Rootsi, Soome, Norra, Taani, Läti ja Leedu numbritele (v.a. helistamine personaalnumbritele ja mittegeograafilistele numbritele). Mobiiltelefoni minutimahu täitumisel kehtib Eestist välismaale helistamise tavahind.',
    4: 'Mobiiltelefoni minutimaht sisaldab kõnesid Eestist Rootsi, Soome, Norra, Taani, Läti ja Leedu numbritele (v.a. helistamine personaalnumbritele ja mittegeograafilistele numbritele). Mobiiltelefoni minutimahu täitumisel kehtib Eestist välismaale helistamise tavahind.',
    3: 'Piiramatud kõned EMT ja Elioni võrgus ning piiramatud sõnumid EMT võrgus. Teistesse Eesti võrkudesse helistamiseks ja sõnumite saatmiseks 1000 minutit ja 1000 sõnumit. Lisaks on selle pakkumise kasutajal võimalik jagada interneti paketti kuni viie oma erineva seadme vahel.'
};

var dongleTexts = {
    0: '<span class="violet-text">15GB</span><br>2,5M alla /<br>384K üles',
    1: '<span class="violet-text">15GB</span><br>5M alla /<br>1M üles',
    2: '<span class="violet-text">30GB</span><br>15M alla /<br>3M üles',
    3: '<span class="violet-text">30GB</span><br>50M alla /<br>25M üles',
    4: '<span class="violet-text">60GB</span><br>150M alla /<br>50M üles'
};

var donglePrices = {
    0: "7.45",
    1: "11.95",
    2: "15.95",
    3: "24.95",
    4: "50.00"
};

function ReplaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n= yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(",");
}

var calculatePrice = function () {

// Sliders dependencies
    var $sliderMobileGb = $('#slider-mobile-gb');
    var value = $sliderMobileGb.sliderBs('getValue');

    if ($("#slider-mobile-minutesms").val() == 3 ) {
      $sliderMobileGb.data('slider').max = 2;
      $sliderMobileGb.sliderBs('setValue', value);
      $("#input-mobile-gb-price").val(mobileGbPrices1000[$("#slider-mobile-gb").val()]);
      $("#text-mobile-gb").html(mobileGbTexts1000[$("#slider-mobile-gb").val()]);

    } else {
      $sliderMobileGb.data('slider').max = 5;
      $sliderMobileGb.sliderBs('setValue', value);
      $("#input-mobile-gb-price").val(mobileGbPrices[$("#slider-mobile-gb").val()]);
      $("#text-mobile-gb").html(mobileGbTexts[$("#slider-mobile-gb").val()]);
    }

    $("#input-fixinternet-price").val(fixinternetPrices[$("#slider-fixinternet").val()]);

    // $("#text-mobile-gb").html(mobileGbTexts[$("#slider-mobile-gb").val()]);

    $("#input-fixphone-fixphonePrices").val(fixphonePrices[$("#slider-fixphone").val()]);

    $("#input-mobile-gb-plus-minutes").val(mobileAddedToMinuteSmsMinutes[$("#slider-mobile-gb").val()]);
    var foo = parseFloat(mobileAddedToMinuteSmsMinutes[$("#slider-mobile-gb").val()]);
    $("#input-mobile-gb-plus-sms").val(mobileAddedToMinuteSmsSmss[$("#slider-mobile-gb").val()]);

    $("#input-mobile-minutesms-price").val(mobileMinuteSmsPrices[$("#slider-mobile-minutesms").val()]);


    $("#input-mobile-minutesms-sms").val(mobileMinuteSmsSmss[$("#slider-mobile-minutesms").val()]);
    $("#input-mobile-minutesms-minutes").val(mobileMinuteSmsMinutes[$("#slider-mobile-minutesms").val()]);

    $("#input-dongle-price").val(donglePrices[$("#slider-dongle").val()]);

    var desktop = parseFloat($("#input-fixinternet-price").val());
    var phonecount = parseFloat($("#input-fixphone-howmany").val());
    var phone = parseFloat($("#input-fixphone-fixphonePrices").val());
    var mobilecount = parseFloat($("#input-mobile-howmany").val());
    var mobile = parseFloat($("#input-mobile-gb-price").val());
    var mobilevol = parseFloat($("#input-mobile-minutesms-price").val());
    var donglecount = parseFloat($("#input-dongle-howmany").val());
    var dongle = parseFloat($("#input-dongle-price").val());

    var phonecountsum;

    if (desktop > 0 && phonecount > 0) {
        phonecountsum = (phonecount * 4.15) - 4.15;
    } else {
        phonecountsum = phonecount * 4.15;
    }

    var phonesum = ( phonecount * phone ) + phonecountsum;
    var mobilesum = mobilecount * (mobile + mobilevol);
    var donglesum = donglecount * dongle;

    var counted =  desktop + phonesum + mobilesum + donglesum;

    var countedround = counted.toFixed(2);
    var comnum = ReplaceNumberWithCommas(countedround);
    $("#total-sum").html(comnum);

    var mobileGbSliderSms = parseFloat($("#input-mobile-gb-plus-sms").val());
    var mobileMinuteSmsSliderSms = parseFloat($("#input-mobile-minutesms-sms").val());
    var mobileSmsSum = mobileGbSliderSms + mobileMinuteSmsSliderSms;
    $('#mobile-sms-sum').html(mobileSmsSum);

    var mobileGbSliderMinutes = parseFloat($("#input-mobile-gb-plus-minutes").val());
    var mobileMinuteSmsSliderMinutes = parseFloat($("#input-mobile-minutesms-minutes").val());
    var mobileMinuteSum = mobileGbSliderMinutes + mobileMinuteSmsSliderMinutes;
    $('#mobile-minute-sum').html(mobileMinuteSum);

// Fill the html 
    $("#text-fixinternet").html(fixinternetTexts[$("#slider-fixinternet").val()]);
    $("#text-fixphone").html(fixphoneTexts[$("#slider-fixphone").val()]);
    $("#text-mobile-minutesms").html(mobileMinuteSmsTexts[$("#slider-mobile-minutesms").val()]);

    $("#description-mobile").html(mobileDescriptions[$("#slider-mobile-minutesms").val()]);
    $("#text-dongle").html(dongleTexts[$("#slider-dongle").val()]);

// Fill the form //

    $("#input-fixinternet-speed").val($("#text-fixinternet").text());

    $("#number-fixphone").html($("#input-fixphone-howmany").val());
    $("#input-fixphone-minutes").val($("#text-fixphone").text());
    $("#input-fixphone-singleprice").val((phonecountsum).toFixed(2));
    $("#input-fixphone-sum").val((phonesum).toFixed(2));

    $("#number-mobile").html($("#input-mobile-howmany").val());
    $('#input-mobile-sum').val((mobilesum).toFixed(2));

    $("#number-dongle").html($("#input-dongle-howmany").val());
    $("#input-dongle-gb").val($("#text-dongle").text());
    $('#input-dongle-sum').val((donglesum).toFixed(2));
    $("#js-yourmail").html($("#js-email").val());

};

// count on -+

    var addDongle = function () {
        var countD = $("#input-dongle-howmany").val();
            countD++;
        
        $("#input-dongle-howmany").val(countD);
        calculatePrice();
    };

    var removeDongle = function () {
        var countD = $("#input-dongle-howmany").val();
        if (countD > 0)
            countD--;

        $("#input-dongle-howmany").val(countD);
        calculatePrice();
    };

    var addMobile = function () {
        var countM = $("#input-mobile-howmany").val();
            countM++;
        $("#input-mobile-howmany").val(countM);

        calculatePrice();
    };

    var removeMobile = function () {
        var countM = $("#input-mobile-howmany").val();
        if (countM > 0)
            countM--;
        $("#input-mobile-howmany").val(countM);
        calculatePrice();
    };

    var addPhone = function () {
        var countP = $("#input-fixphone-howmany").val();
            countP++;
        $("#input-fixphone-howmany").val(countP);
        calculatePrice();
    };

    var removePhone = function () {
        var countP = $("#input-fixphone-howmany").val();
        if (countP > 0)
            countP--;
        $("#input-fixphone-howmany").val(countP);
        calculatePrice();
    };

// add one to count when slided

    function addOnePhone() {
        if (($("#slider-fixphone").val() != 0) && ($("#input-fixphone-howmany").val() == 0)) {
            $("#input-fixphone-howmany").val(1);
            // window.addOnePhone = function (){};
        }
    }

    function addOneMobile() {
        if (($("#slider-mobile-gb").val() > 0) && ($("#input-mobile-howmany").val() == 0)) {
            $("#input-mobile-howmany").val(1);
        }
    }

    function addOneMobileVol() {
        if (($("#slider-mobile-minutesms").val() != 0) && ($("#slider-mobile-gb").val() == 0)  && ($("#input-mobile-howmany").val() == 0)) {
            $("#input-mobile-howmany").val(1);
        }
    }

    function addOneDongle() {
        if (($("#slider-dongle").val() != 0) && ($("#input-dongle-howmany").val() == 0) ) {
            $("#input-dongle-howmany").val(1);
        }
    }

$(document).ready( function() {

    $("#slider-fixinternet").sliderBs()
    .on('slide slideStop', function (ev) {
        calculatePrice();
    });

    $("#slider-fixphone").sliderBs()
    .on('slide slideStop', function (ev) {
        addOnePhone();
        calculatePrice();
    });

    
    $("#slider-mobile-gb").sliderBs()
    .on('slideStart slide slideStop', function (ev) {
        addOneMobile();
        calculatePrice();
    });

    $("#slider-mobile-minutesms").sliderBs()
    .on('slideStart  slide slideStop', function (ev) {
        addOneMobileVol();
        calculatePrice();
    });

    $("#slider-dongle").sliderBs()
    .on('slide slideStop', function (ev) {
        addOneDongle();
        calculatePrice();
    });

    $("#input-fixinternet-price").val("0");

    $("#input-fixphone-howmany").val("0");
    $("#input-fixphone-fixphonePrices").val("0");

    $("#input-mobile-howmany").val("0");
    $("#input-mobile-gb-price").val("0");
    $("#input-mobile-minutesms-price").val("0");

    $("#input-mobile-gb-plus-minutes").val("0");
    $("#input-mobile-minutesms-minutes").val("0");
    $("#input-mobile-gb-plus-sms").val("0");
    $("#input-mobile-minutesms-sms").val("0");

    $("#input-dongle-howmany").val("0");
    $("#input-dongle-price").val("0");

    calculatePrice();
});


// Animations to look nice
$("#js-confirm-calc").click(function(){
    $("#js-calcwrapper").slideUp('slow');
    $("#js-contactwrapper").show();
});

$("#js-back").click(function(){
    $("#js-contactwrapper").hide();
    $("#js-calcwrapper").show();
});

// AJAX stuff
$("#js-sendIt").click(function(){
    // Check for required 
    var empt = $(".form-group :input").val();
    if ( !empt ) {
        $(".form-group").addClass("has-error");
        $(".alert-danger").slideDown("fast");
        return false;
    }
    else {
        $(".alert-danger").slideUp("fast");
        $(".form-group").removeClass("has-error");
    }

    // var url = "path/to/script";
   
    $.ajax({
           type: "POST",
           url: url,
           data: $("#"+formId).serialize(),
           success: function(data) {
                $("#js-contactwrapper").slideUp('slow');
                $("#js-thankswrapper").show();
           }
         });
    console.log($("#"+formId).serialize());
    return false;
});

document.addEventListener("touchstart", function(){}, true);