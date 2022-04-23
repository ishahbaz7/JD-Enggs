



jQuery('#frmSubmit').on('submit',function(e){
    e.preventDefault();
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbyM_VfjA2DH3qxKTKLNxVEQuzGrVwU9zoObYmRvNglAOxZg_fZ3qATp4evMRoyu8NeJYw/exec',
        type:'post',
        data:jQuery('#frmSubmit').serialize(),
        success:function(result){
            jQuery('#frmSubmit')[0].reset();
            jQuery('#btnSubmit').attr('disabled',false);
            // window.location.href='https://www.google.com/';
        }
    });
  });