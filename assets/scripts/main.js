// JavaScript Document

var desktopVolume = {
    0: '<span class="violet-text" style="line-height: 2.5;">Ei soovi</span>',
    1: '<span class="violet-text">1M / 0,5M</span><br>alla / üles',
    2: '<span class="violet-text">10M / 5M</span><br>alla / üles',
    3: '<span class="violet-text">20M / 5M</span><br>alla / üles',
    4: '<span class="violet-text">30M / 10M</span><br>alla / üles',
    5: '<span class="violet-text">50M / 30M</span><br>alla / üles'
};

var desktopPrice = {
    0: "0",
    1: "25",
    2: "32",
    3: "45",
    4: "135",
    5: "300"
};

var phoneVolume = {
    0: '<span class="violet-text">60</span> minutit',
    1: '<span class="violet-text">120</span> minutit',
    2: '<span class="violet-text">240</span> minutit',
};

var phonePrice = {
    0: "1.66",
    1: "2.99",
    2: "5.66",
};

var mobileVolume = {
    0: '<br /><span class="violet-text">0GB</span>',
    1: '<span class="violet-text">1,5GB</span><br>3M alla /<br>1M üles',
    2: '<span class="violet-text">5GB</span><br>21,6M alla /<br>5,7M üles',
    3: '<span class="violet-text">10GB</span><br>50M alla /<br>5M üles',
    4: '<span class="violet-text">20GB</span><br>100M alla /<br>50M üles',
    5: '<span class="violet-text">25GB</span><br>100M alla /<br>50M üles',
};

var mobilePrice = {
    0: "0",
    1: "6.49",
    2: "9.95",
    3: "16.96",
    4: "29.95",
    5: "35.95"
};

var mobileAddedMin = {
    0: "0",
    1: "0",
    2: "0",
    3: "150",
    4: "300",
    5: "500"
};

var mobileAddedSms = {
    0: "0",
    1: "0",
    2: "0",
    3: "50",
    4: "100",
    5: "200"
};

var mobileVolumeVol = {

    0: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
    1: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
    2: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
    3: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
};

var mobileVolumeVolSms = {

    0: "0",
    1: "40",
    2: "90",
    3: "200"
};

var mobileVolumeVolMin = {
    0: "0",
    1: "400",
    2: "900",
    3: "2000"
};

var mobilePriceVol = {

    0: "3",
    1: "6",
    2: "12",
    3: "24",
};

var dongleVolume = {
    0: '<span class="violet-text">15GB</span><br>2,5M alla /<br>384K üles',
    1: '<span class="violet-text">15GB</span><br>5M alla /<br>1M üles',
    2: '<span class="violet-text">30GB</span><br>15M alla /<br>3M üles',
    3: '<span class="violet-text">30GB</span><br>50M alla /<br>25M üles',
    4: '<span class="violet-text">60GB</span><br>150M alla /<br>50M üles'
};

var donglePrice = {
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
    $jq("#js-price-desktop").val(desktopPrice[$jq("#js-slider-desktop").val()]);
    $jq("#js-volume-desktop").html(desktopVolume[$jq("#js-slider-desktop").val()]);

    $jq("#js-price-phone").val(phonePrice[$jq("#js-slider-phone").val()]);
    $jq("#js-volume-phone").html(phoneVolume[$jq("#js-slider-phone").val()]);

    $jq("#js-price-mobile").val(mobilePrice[$jq("#js-slider-mobile").val()]);
    $jq("#js-volume-mobile").html(mobileVolume[$jq("#js-slider-mobile").val()]);
    $jq("#js-volume-mobile-minutes").val(mobileAddedMin[$jq("#js-slider-mobile").val()]);
    $jq("#js-volume-mobile-sms").val(mobileAddedSms[$jq("#js-slider-mobile").val()]);

    $jq("#js-price-mobile-vol").val(mobilePriceVol[$jq("#js-slider-mobile-vol").val()]);
    $jq("#js-volume-mobile-vol").html(mobileVolumeVol[$jq("#js-slider-mobile-vol").val()]);
    // $jq("#js-volume-mobile-vol").html(mobileVolumeVol[$jq("#js-slider-mobile-vol").val()]);

    // $jq(function() {
    // var x = $jq("#js-slider-mobile-vol").slider();
    // $jq("#js-slider-mobile").slide(function() {
    //     x.slider('setValue', 2);
    //     });
    // });

    $jq("#js-volume-mobile-sms-val").val(mobileVolumeVolSms[$jq("#js-slider-mobile-vol").val()]);
    $jq("#js-volume-mobile-min-val").val(mobileVolumeVolMin[$jq("#js-slider-mobile-vol").val()]);

    $jq("#js-price-dongle").val(donglePrice[$jq("#js-slider-dongle").val()]);
    $jq("#js-volume-dongle").html(dongleVolume[$jq("#js-slider-dongle").val()]);

    var desktop = parseFloat($jq("#js-price-desktop").val());
    var phonecount = parseFloat($jq("#js-counted-phone").val());
    var phone = parseFloat($jq("#js-price-phone").val());
    var mobilecount = parseFloat($jq("#js-counted-mobile").val());
    var mobile = parseFloat($jq("#js-price-mobile").val());
    var mobilevol = parseFloat($jq("#js-price-mobile-vol").val());
    var donglecount = parseFloat($jq("#js-counted-dongle").val());
    var dongle = parseFloat($jq("#js-price-dongle").val());

    var phonecountsum;

    if (desktop > 0 && phonecount > 0) {
        phonecountsum = (phonecount * 4.15) - 4.15;
    }

    else {
        phonecountsum = phonecount * 4.15;
    }

    var phonesum = ( phonecount * phone ) + phonecountsum;
    var mobilesum = mobilecount * (mobile + mobilevol);
    var donglesum = donglecount * dongle;
    

    var counted =  desktop + phonesum + mobilesum + donglesum;

    var countedround = counted.toFixed(2);
    var comnum = ReplaceNumberWithCommas(countedround);
    $jq("#js-sum").html(comnum);


    var summedsms = parseFloat($jq("#js-volume-mobile-sms").val());
    var summedsmsval = parseFloat($jq("#js-volume-mobile-sms-val").val());
    var smssum = summedsms + summedsmsval;
    $jq('#smssum').html(smssum);

    var summedmin = parseFloat($jq("#js-volume-mobile-minutes").val());
    var summedminval = parseFloat($jq("#js-volume-mobile-min-val").val());
    var minsum = summedmin + summedminval;
    $jq('#minsum').html(minsum);


// Fill the form //

    $jq("#js-volume-desktopStripped").val($jq("#js-volume-desktop").text());

    $jq("#js-phoneamount").html($jq("#js-counted-phone").val());
    $jq("#js-volume-phoneStripped").val($jq("#js-volume-phone").text());
    $jq("#js-counted-phonePrice").val((phonecountsum).toFixed(2));
    $jq("#js-counted-phoneSum").val((phonesum).toFixed(2));

    $jq("#js-mobileamount").html($jq("#js-counted-mobile").val());
    $jq('#js-mobilesum').val((mobilesum).toFixed(2));

    $jq("#js-dongleamount").html($jq("#js-counted-dongle").val());
    $jq("#js-volume-dongleStripped").val($jq("#js-volume-dongle").text());
    $jq('#js-donglesum').val((donglesum).toFixed(2));
    $jq("#js-yourmail").html($jq("#js-email").val());

};

// count on -+

    var addDongle = function () {
        var countD = $jq("#js-counted-dongle").val();
            countD++;
        
        $jq("#js-counted-dongle").val(countD);
        calculatePrice();
    };

    var removeDongle = function () {
        var countD = $jq("#js-counted-dongle").val();
        if (countD > 0)
            countD--;

        $jq("#js-counted-dongle").val(countD);
        calculatePrice();
    };

    var addMobile = function () {
        var countM = $jq("#js-counted-mobile").val();
            countM++;
        $jq("#js-counted-mobile").val(countM);

        calculatePrice();
    };

    var removeMobile = function () {
        var countM = $jq("#js-counted-mobile").val();
        if (countM > 0)
            countM--;
        $jq("#js-counted-mobile").val(countM);
        calculatePrice();
    };

    var addPhone = function () {
        var countP = $jq("#js-counted-phone").val();
            countP++;
        $jq("#js-counted-phone").val(countP);
        calculatePrice();
    };

    var removePhone = function () {
        var countP = $jq("#js-counted-phone").val();
        if (countP > 0)
            countP--;
        $jq("#js-counted-phone").val(countP);
        calculatePrice();
    };

// add one to count when slided

    function addOnePhone() {
        if (($jq("#js-slider-phone").val() != 0) && ($jq("#js-counted-phone").val() == 0)) {
            $jq("#js-counted-phone").val(1);
            // window.addOnePhone = function (){};
        }
    }

    function addOneMobile() {
        if (($jq("#js-slider-mobile").val() > 0) && ($jq("#js-counted-mobile").val() == 0)) {
            $jq("#js-counted-mobile").val(1);
        }
    }

    function addOneMobileVol() {
        if (($jq("#js-slider-mobile-vol").val() != 0) && ($jq("#js-slider-mobile").val() == 0)  && ($jq("#js-counted-mobile").val() == 0)) {
            $jq("#js-counted-mobile").val(1);
        }
    }

    function addOneDongle() {
        if (($jq("#js-slider-dongle").val() != 0) && ($jq("#js-counted-dongle").val() == 0) ) {
            $jq("#js-counted-dongle").val(1);
        }
    }

    function init(){
         $jq("#js-slider-desktop").slider()
        .on('slide slideStop', function (ev) {
            calculatePrice();
        });

        $jq("#js-slider-phone").slider()
        .on('slide slideStop', function (ev) {
            addOnePhone();
            calculatePrice();
        });

        
        $jq("#js-slider-mobile").slider()
        .on('slide slideStop', function (ev) {
            addOneMobile();
            calculatePrice();
        });

        $jq("#js-slider-mobile-vol").slider()
        .on('slide slideStop', function (ev) {
            addOneMobileVol();
            calculatePrice();
        });

        $jq("#js-slider-dongle").slider()
        .on('slide slideStop', function (ev) {
            addOneDongle();
            calculatePrice();
        });


        $jq("#js-price-desktop").val("0");

        $jq("#js-counted-phone").val("0");
        $jq("#js-price-phone").val("0");

        $jq("#js-counted-mobile").val("0");
        $jq("#js-price-mobile").val("0");
        $jq("#js-price-mobile-vol").val("0");

        $jq("#js-volume-mobile-minutes").val("0");
        $jq("#js-volume-mobile-min-val").val("0");
        $jq("#js-volume-mobile-sms").val("0");
        $jq("#js-volume-mobile-sms-val").val("0");

        $jq("#js-counted-dongle").val("0");
        $jq("#js-price-dongle").val("0");

        calculatePrice();
    }

$jq(document).ready( function() {
    init();
});


$jq("#js-confirm-calc").click(function(){
    $jq("#js-calcwrapper").slideUp('slow');
    $jq("#js-contactwrapper").show();
    _gaq.push(['_trackPageview', '/misiganes-struktuur/ misiganes-struktuur/tellimine-step-2']);
});

$jq("#js-back").click(function(){
    $jq("#js-contactwrapper").hide();
    $jq("#js-calcwrapper").show();
});


$jq("#js-sendIt").click(function(){
    // Check for required 
    var empt = $jq(".form-group :input").val();
    if ( !empt ) {
        $jq(".form-group").addClass("has-error");
        $jq(".alert-danger").slideDown("fast");
        return false;
    }
    else {
        $jq(".alert-danger").slideUp("fast");
        $jq(".form-group").removeClass("has-error");
    }

    // var url = "path/to/script";

    $.ajax({
           type: "POST",
           // url: url,
           data: $jq("#theData").serialize(),
           success: function(data) {
                $jq("#js-contactwrapper").slideUp('slow');
                $jq("#js-thankswrapper").show();
           }
         });
    console.log($jq("#theData").serialize());

    //GA
    _gaq.push(['_trackPageview', '/misiganes-struktuur/ misiganes-struktuur/tellimine-step-3']);
    return false;
});

document.addEventListener("touchstart", function(){}, true);






