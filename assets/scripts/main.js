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
};

var mobileMinuteSmsMinutes = {
    0: "0",
    1: "400",
    2: "900",
    3: "2000"
};

var mobileMinuteSmsSmss = {

    0: "0",
    1: "40",
    2: "90",
    3: "200"
};

var mobileMinuteSmsPrices = {

    0: "3",
    1: "6",
    2: "12",
    3: "24"
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
    3: 'Mobiiltelefoni minutimaht sisaldab kõnesid Eestist Rootsi, Soome, Norra, Taani, Läti ja Leedu numbritele (v.a. helistamine personaalnumbritele ja mittegeograafilistele numbritele). Mobiiltelefoni minutimahu täitumisel kehtib Eestist välismaale helistamise tavahind.',
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
      $("#input-mobile-gb-price").val(mobileGbPrices[$("#slider-mobile-gb").val()]);
      $("#text-mobile-gb").html(mobileGbTexts[$("#slider-mobile-gb").val()]);

    var fixinternetSlided = parseFloat(fixinternetPrices[$("#slider-fixinternet").val()]);
    $("#input-fixinternet-price").val(fixinternetSlided);

    var fixphoneSlided = parseFloat(fixphonePrices[$("#slider-fixphone").val()]);
    $("#input-fixphone-price").val(fixphoneSlided);

    var mobileGbPlusMinutesSlided = parseFloat(mobileAddedToMinuteSmsMinutes[$("#slider-mobile-gb").val()]);
    $("#input-mobile-gb-plus-minutes").val(mobileGbPlusMinutesSlided);

    var mobileGbAddedMinutesSlided = parseFloat(mobileAddedToMinuteSmsSmss[$("#slider-mobile-gb").val()]);
    $("#input-mobile-gb-plus-sms").val(mobileGbAddedMinutesSlided);

    var mobileMinuteSmsPriceSlided = parseFloat(mobileMinuteSmsPrices[$("#slider-mobile-minutesms").val()]);
    $("#input-mobile-minutesms-price").val(mobileMinuteSmsPriceSlided);

    var mobileMinuteSmsSmsSlided = parseFloat(mobileMinuteSmsSmss[$("#slider-mobile-minutesms").val()]);
    $("#input-mobile-minutesms-sms").val(mobileMinuteSmsSmsSlided);

    var mobileMinuteSmsMinuteSlided = parseFloat(mobileMinuteSmsMinutes[$("#slider-mobile-minutesms").val()]);
    $("#input-mobile-minutesms-minutes").val(mobileMinuteSmsMinuteSlided);

    var donglePriceSlided = parseFloat(donglePrices[$("#slider-dongle").val()]);
    $("#input-dongle-price").val(donglePriceSlided);

// Prices and numbers logic
    var fixinternetPrice = parseFloat($("#input-fixinternet-price").val());
    var numberOfPhones = parseFloat($("#input-fixphone-amount").val());
    var phonePrice = parseFloat($("#input-fixphone-price").val());
    var numberOfMobiles = parseFloat($("#input-mobile-amount").val());
    var mobilePrice = parseFloat($("#input-mobile-gb-price").val());
    var mobileAddedMinuteSmsPrice = parseFloat($("#input-mobile-minutesms-price").val());
    var numberOfDongles = parseFloat($("#input-dongle-amount").val());
    var donglePrice = parseFloat($("#input-dongle-price").val());

    // Tax reduced when internet is chosen
    var phoneTax;
    if (fixinternetPrice > 0 && numberOfPhones > 0) {
        phoneTax = (numberOfPhones * 4.15) - 4.15;
    } else {
        phoneTax = numberOfPhones * 4.15;
    }

    var fixinternetSum = fixinternetPrice;
    var phoneSum = ( numberOfPhones * phonePrice ) + phoneTax;
    var mobileSum = numberOfMobiles * (mobilePrice + mobileAddedMinuteSmsPrice);
    var dongleSum = numberOfDongles * donglePrice;
    var allSum =  fixinternetSum + phoneSum + mobileSum + dongleSum;
    var allSumDecimal = allSum.toFixed(2);
    var allSumFormatted = ReplaceNumberWithCommas(allSumDecimal);
    $("#total-sum").html(allSumFormatted);

// Fill the html 
    $("#text-fixinternet").html(fixinternetTexts[$("#slider-fixinternet").val()]);
    $("#text-fixphone").html(fixphoneTexts[$("#slider-fixphone").val()]);
    $("#text-mobile-minutesms").html(mobileMinuteSmsTexts[$("#slider-mobile-minutesms").val()]);
    // what about slider-mobile-gb-text?
    $("#description-mobile").html(mobileDescriptions[$("#slider-mobile-minutesms").val()]);
    $("#text-dongle").html(dongleTexts[$("#slider-dongle").val()]);
    // Fill global vars
    var mobileGbSliderSms = parseFloat($("#input-mobile-gb-plus-sms").val());
    var mobileMinuteSmsSliderSms = parseFloat($("#input-mobile-minutesms-sms").val());
    var mobileSmsSum = mobileGbSliderSms + mobileMinuteSmsSliderSms;
    $('#mobile-sms-sum').html(mobileSmsSum);
    var mobileGbSliderMinutes = parseFloat($("#input-mobile-gb-plus-minutes").val());
    var mobileMinuteSmsSliderMinutes = parseFloat($("#input-mobile-minutesms-minutes").val());
    var mobileMinuteSum = mobileGbSliderMinutes + mobileMinuteSmsSliderMinutes;
    $('#mobile-minute-sum').html(mobileMinuteSum);

// Fill the form //
    $("#input-fixinternet-speed").val($("#text-fixinternet").text());

    $("#number-fixphone").html($("#input-fixphone-amount").val());
    $("#input-fixphone-minutes").val($("#text-fixphone").text());
    $("#input-fixphone-singleprice").val((phoneTax).toFixed(2));
    $("#input-fixphone-sum").val((phoneSum).toFixed(2));

    $("#number-mobile").html($("#input-mobile-amount").val());
    $('#input-mobile-sum').val((mobileSum).toFixed(2));

    $("#number-dongle").html($("#input-dongle-amount").val());
    $("#input-dongle-gb").val($("#text-dongle").text());
    $('#input-dongle-sum').val((dongleSum).toFixed(2));

    $("#js-yourmail").html($("#js-email").val());
};

// count on -+

    var addDongle = function () {
        var countD = $("#input-dongle-amount").val();
            countD++;
        
        $("#input-dongle-amount").val(countD);
        calculatePrice();
    };

    var removeDongle = function () {
        var countD = $("#input-dongle-amount").val();
        if (countD > 0)
            countD--;

        $("#input-dongle-amount").val(countD);
        calculatePrice();
    };

    var addMobile = function () {
        var countM = $("#input-mobile-amount").val();
            countM++;
        $("#input-mobile-amount").val(countM);

        calculatePrice();
    };

    var removeMobile = function () {
        var countM = $("#input-mobile-amount").val();
        if (countM > 0)
            countM--;
        $("#input-mobile-amount").val(countM);
        calculatePrice();
    };

    var addPhone = function () {
        var countP = $("#input-fixphone-amount").val();
            countP++;
        $("#input-fixphone-amount").val(countP);
        calculatePrice();
    };

    var removePhone = function () {
        var countP = $("#input-fixphone-amount").val();
        if (countP > 0)
            countP--;
        $("#input-fixphone-amount").val(countP);
        calculatePrice();
    };

// add one to count when slided

    function addOnePhone() {
        if (($("#slider-fixphone").val() != 0) && ($("#input-fixphone-amount").val() == 0)) {
            $("#input-fixphone-amount").val(1);
            // window.addOnePhone = function (){};
        }
    }

    function addOneMobile() {
        if (($("#slider-mobile-gb").val() > 0) && ($("#input-mobile-amount").val() == 0)) {
            $("#input-mobile-amount").val(1);
        }
    }

    function addOneMobileVol() {
        if (($("#slider-mobile-minutesms").val() != 0) && ($("#slider-mobile-gb").val() == 0)  && ($("#input-mobile-amount").val() == 0)) {
            $("#input-mobile-amount").val(1);
        }
    }

    function addOneDongle() {
        if (($("#slider-dongle").val() != 0) && ($("#input-dongle-amount").val() == 0) ) {
            $("#input-dongle-amount").val(1);
        }
    }

$(document).ready( function() {

    $("#slider-fixinternet").sliderBs()
    .on('slide', function (ev) {
        calculatePrice();
    });

    $("#slider-fixphone").sliderBs()
    .on('slide', function (ev) {
        addOnePhone();
        calculatePrice();
    });

    
    $("#slider-mobile-gb").sliderBs()
    .on('slide', function (ev) {
        addOneMobile();
        calculatePrice();
    });

    $("#slider-mobile-minutesms").sliderBs()
    .on('slide', function (ev) {    
		addOneMobileVol();
        calculatePrice();
    });

    $("#slider-dongle").sliderBs()
    .on('slide', function (ev) {
        addOneDongle();
        calculatePrice();
    });

    $("#input-fixinternet-price").val("0");

    $("#input-fixphone-amount").val("0");
    $("#input-fixphone-price").val("0");

    $("#input-mobile-amount").val("0");
    $("#input-mobile-gb-price").val("0");
    $("#input-mobile-gb-plus-minutes").val("0");
    $("#input-mobile-gb-plus-sms").val("0");
    $("#input-mobile-minutesms-price").val("0");
    $("#input-mobile-minutesms-minutes").val("0");
    $("#input-mobile-minutesms-sms").val("0");

    $("#input-dongle-amount").val("0");
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