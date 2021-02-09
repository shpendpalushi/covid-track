jQuery(document).ready(function($){
    $('select').select2({width:100});
    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');
});