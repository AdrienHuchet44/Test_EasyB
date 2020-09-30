
/////////////////////////// Input quantity ///////////////////////////
$('.btn-number').click(function(e){
    e.preventDefault();
    // var initialization
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    // if value is number
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            // if value > number in input then next value = input current value - 1
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {
            // if current value < number in input then next value = input current value + 1
            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});

$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});

// allow to remove - or + when min value or max value reached
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Vous devez ajouter un produit pour commander');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Vous avez atteint le nombre maximum de commande pour ce produit');
        $(this).val($(this).data('oldValue'));
    }
    
});

/////////////////////////// Swiper ///////////////////////////
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

/////////////////////////// Modal image ///////////////////////////
  $(function() {
    $('.swiper-slide').on('click', function() {
        $('.imagePreview').attr('src', $(this).find('img').attr('src'));
        $('#imageModal').modal('show');   
    });		
});