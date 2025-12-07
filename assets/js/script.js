$(document).ready(function(){
 
    $('#btn_reason_details').click(function(){
     
        var error_visit_reason = '';
        var error_self_harm = '';
        var error_symptoms = '';
        var error_symptoms_before = '';
        var medical_conditions = '';
        var medications = '';
        var has_alleries = '';
        var allergies = '';
        var has_insurance = '';
        var insurance = '';
        var had_surgeries = '';
        var surgeries = '';
        var fam_disease = '';
        var fam_diseases = '';
        var use_tobacco = '';
        var tobacco_usage = '';
        var drink_alcohol = '';
        var alcohol_usage = '';
        var spiritual_beliefs = '';
        var what_spiritual_beliefs = '';
        var pt_consent = '';

        
        if($.trim($('#visit_reason').val()).length == 0)
        {
            error_visit_reason = "Please enter the reason for the patient's visit";
            $('#error_visit_reason').text(error_visit_reason);
            $('#visit_reason').addClass('has-error');
        }
        else
        {
           error_visit_reason = '';
           $('#error_visit_reason').text(error_visit_reason);
           $('#visit_reason').removeClass('has-error');  
        }
   
        if($.trim($('#self_harm').val()).length == 0)
        {
            error_self_harm = 'Has the patient self-harmed himself/herself?';
            $('#error_self_harm').text(error_self_harm);
            $('#self_harm').addClass('has-error');
        }
        else
        {
           error_self_harm = '';
           $('#error_self_harm').text(error_self_harm);
           $('#self_harm').removeClass('has-error');  
        }
   
        if($.trim($('#symptoms').val()).length == 0)
        {
            error_symptoms = 'Please enter what symptoms the patient is experiencing and the severity';
            $('#error_symptoms').text(error_symptoms);
            $('#symptoms').addClass('has-error');
        }
        else
        {
           error_symptoms = '';
           $('#error_symptoms').text(error_symptoms);
           $('#symptoms').removeClass('has-error');  
        }

        if($.trim($('#symptoms_before').val()).length == 0)
        {
            error_symptoms_before = 'Please select Yes or No if the patient has had these symptoms before today';
            $('#error_symptoms_before').text(error_symptoms_before);
            $('#symptoms_before').addClass('has-error');
        }
        else
        {
           error_symptoms_before = '';
           $('#error_symptoms_before').text(error_symptoms_before);
           $('#symptoms_before').removeClass('has-error');  
        }

        if($.trim($('#medical_conditions').val()).length == 0)
        {
            error_medical_conditions = 'Please enter what medical conditions the patient has';
            $('#error_medical_conditions').text(error_medical_conditions);
            $('#medical_conditions').addClass('has-error');
        }
        else
        {
           error_medical_conditions = '';
           $('#error_medical_conditions').text(error_medical_conditions);
           $('#medical_conditions').removeClass('has-error');  
        }

        if($.trim($('#medications').val()).length == 0)
        {
            error_medications = 'Please enter what medications the patient takes and the dosages';
            $('#error_medications').text(error_medications);
            $('#medications').addClass('has-error');
        }
        else
        {
           error_medications = '';
           $('#error_medications').text(error_medications);
           $('#medications').removeClass('has-error');  
        }

        if($.trim($('#has_allergies').val()).length == 0)
        {
            error_has_allergies = 'Does the patient have any allergies?';
            $('#error_has_allergies').text(error_has_allergies);
            $('#has_allergies').addClass('has-error');
        }
        else
        {
           error_has_allergies = '';
           $('#error_has_allergies').text(error_has_allergies);
           $('#has_allergies').removeClass('has-error');  
        }

        if($.trim($('#allergies').val()).length == 0)
        {
            error_allergies = 'Please list the allergies the patient has';
            $('#error_allergies').text(error_allergies);
            $('#allergies').addClass('has-error');
        }
        else
        {
           error_allergies = '';
           $('#error_allergies').text(error_allergies);
           $('#allergies').removeClass('has-error');  
        }

        if($.trim($('#has_insurance').val()).length == 0)
        {
            error_has_insurance = 'Does the patient have any health insurance?';
            $('#error_has_insurance').text(error_has_insurance);
            $('#has_insurance').addClass('has-error');
        }
        else
        {
           error_has_insurance = '';
           $('#error_has_insurance').text(error_has_insurance);
           $('#has_insurance').removeClass('has-error');  
        }

        if($.trim($('#insurance').val()).length == 0)
        {
            error_insurance = 'Which health insurance does the patient have?';
            $('#error_insurance').text(error_insurance);
            $('#insurance').addClass('has-error');
        }
        else
        {
           error_insurance = '';
           $('#error_insurance').text(error_insurance);
           $('#insurance').removeClass('has-error');  
        }

        if($.trim($('#had_surgeries').val()).length == 0)
        {
            error_had_surgeries = 'Please select Yes or No if the patient has ever had a surgical procedure';
            $('#error_had_surgeries').text(error_had_surgeries);
            $('#had_surgeries').addClass('has-error');
        }
        else
        {
           error_had_surgeries = '';
           $('#error_had_surgeries').text(error_had_surgeries);
           $('#had_surgeries').removeClass('has-error');  
        }

        if($.trim($('#surgeries').val()).length == 0)
        {
            error_surgeries = 'Please list all the surgeries the patient has had';
            $('#error_surgeries').text(error_surgeries);
            $('#surgeries').addClass('has-error');
        }
        else
        {
           error_surgeries = '';
           $('#error_surgeries').text(error_surgeries);
           $('#surgeries').removeClass('has-error');  
        }

        if($.trim($('#fam_disease').val()).length == 0)
        {
            error_fam_disease = 'Please select Yes, No, or Unsure if the patient has information about any family disease';
            $('#error_fam_disease').text(error_fam_disease);
            $('#fam_disease').addClass('has-error');
        }
        else
        {
           error_fam_disease = '';
           $('#error_fam_disease').text(error_fam_disease);
           $('#fam_disease').removeClass('has-error');  
        }

        if($.trim($('#fam_diseases').val()).length == 0)
        {
            error_fam_diseases = 'If the patient has any information about any family diseases, please document them here';
            $('#error_fam_diseases').text(error_fam_diseases);
            $('#fam_diseases').addClass('has-error');
        }
        else
        {
           error_fam_diseases = '';
           $('#error_fam_diseases').text(error_fam_diseases);
           $('#fam_diseases').removeClass('has-error');  
        }

        if($.trim($('#use_tobacco').val()).length == 0)
        {
            error_use_tobacco = 'Does the patient use any tobacco-type of products?';
            $('#error_use_tobacco').text(error_use_tobacco);
            $('#use_tobacco').addClass('has-error');
        }
        else
        {
           error_use_tobacco = '';
           $('#error_use_tobacco').text(error_use_tobacco);
           $('#use_tobacco').removeClass('has-error');  
        }

        if($.trim($('#tobacco_usage').val()).length == 0)
        {
            error_tobacco_usage = 'If the patient uses tobacco products, which one(s) and what is the frequency of usage?';
            $('#error_tobacco_usage').text(error_tobacco_usage);
            $('#tobacco_usage').addClass('has-error');
        }
        else
        {
           error_tobacco_usage = '';
           $('#error_tobacco_usage').text(error_tobacco_usage);
           $('#tobacco_usage').removeClass('has-error');  
        }

        if($.trim($('#drink_alcohol').val()).length == 0)
        {
            error_drink_alcohol = 'Does the patient drink alcohol?';
            $('#error_drink_alcohol').text(error_drink_alcohol);
            $('#drink_alcohol').addClass('has-error');
        }
        else
        {
           error_drink_alcohol = '';
           $('#error_drink_alcohol').text(error_drink_alcohol);
           $('#drink_alcohol').removeClass('has-error');  
        }

        if($.trim($('#alcohol_usage').val()).length == 0)
        {
            error_alcohol_usage = 'If the patient drinks alcohol, what type and what is the frequency of usage?';
            $('#error_alcohol_usage').text(error_alcohol_usage);
            $('#alcohol_usage').addClass('has-error');
        }
        else
        {
           error_alcohol_usage = '';
           $('#error_alcohol_usage').text(error_alcohol_usage);
           $('#alcohol_usage').removeClass('has-error');  
        }

        if($.trim($('#spiritual_beliefs').val()).length == 0)
        {
            error_spiritual_beliefs = 'Does the patient have any spiritual beliefs?';
            $('#error_spiritual_beliefs').text(error_spiritual_beliefs);
            $('#spiritual_beliefs').addClass('has-error');
        }
        else
        {
           error_spiritual_beliefs = '';
           $('#error_spiritual_beliefs').text(error_spiritual_beliefs);
           $('#spiritual_beliefs').removeClass('has-error');  
        }

        if($.trim($('#what_spiritual_beliefs').val()).length == 0)
        {
            error_what_spiritual_beliefs = 'If the patient any spiritual/cultural beliefs or rituals, what type and how could staff help with them?';
            $('#error_what_spiritual_beliefs').text(error_what_spiritual_beliefs);
            $('#what_spiritual_beliefs').addClass('has-error');
        }
        else
        {
           error_what_spiritual_beliefs = '';
           $('#error_what_spiritual_beliefs').text(error_what_spiritual_beliefs);
           $('#what_spiritual_beliefs').removeClass('has-error');  
        }

        if($.trim($('#pt_consent').val()).length == 0)
        {
            error_pt_consent = 'Does the patient consent to having recommended treatment?';
            $('#error_pt_consent').text(error_pt_consent);
            $('#pt_consent').addClass('has-error');
        }
        else
        {
           error_pt_consent = '';
           $('#error_pt_consent').text(error_pt_consent);
           $('#pt_consent').removeClass('has-error');  
        }



        
        if(error_visit_reason != '' || error_self_harm != '' || error_symptoms != '' || error_symptoms_before != '' || error_medical_conditions != '' || error_medications != '' || error_has_allergies != '' || error_allergies != '' || error_has_insurance != '' || error_insurance != '' || error_had_surgeries != '' || error_surgeries != '' || error_fam_disease != '' || error_fam_diseases != '' || error_use_tobacco != '' || error_tobacco_usage != '' || error_drink_alcohol != '' || error_alcohol_usage != '' || error_spiritual_beliefs != '' || error_what_spiritual_beliefs != '' || error_pt_consent != ''-)
        {
         return false;
     }
     else
     {
      $('#list_reason_details').removeClass('active active_tab1');
      $('#list_reason_details').removeAttr('href data-toggle');
      $('#reason_details').removeClass('active');
      $('#list_reason_details').addClass('inactive_tab1');
      $('#list_personal_details').removeClass('inactive_tab1');
      $('#list_personal_details').addClass('active_tab1 active');
      $('#list_personal_details').attr('href', '#personal_details');
      $('#list_personal_details').attr('data-toggle', 'tab');
      $('#personal_details').addClass('active in');
     }
    });
    
    $('#btn_personal_details').click(function(){
     var error_fname = '';
     var error_lname = '';
     var error_street_address = '';
     var error_home_city = '';
     var error_home_state = '';
     var error_home_zip = '';
     var zip_validation = /^\d{5}$/;
     var error_pt_phone = '';
     var phone_validation = /^\d{10}$/;
     var error_email = '';
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     var error_pt_dob = '';
     var error_pt_notes = '';
     
     if($.trim($('#fname').val()).length == 0)
     {
      error_fname = 'First Name is required';
      $('#error_fname').text(error_fname);
      $('#fname').addClass('has-error');
     }
     else
     {
      error_fname = '';
      $('#error_fname').text(error_fname);
      $('#fname').removeClass('has-error');
     }
     
     if($.trim($('#lname').val()).length == 0)
     {
      error_lname = 'Last Name is required';
      $('#error_lname').text(error_lname);
      $('#lname').addClass('has-error');
     }
     else
     {
      error_lname = '';
      $('#error_lname').text(error_lname);
      $('#lname').removeClass('has-error');
     }

     if($.trim($('#street_address').val()).length == 0)
     {
      error_street_address = 'Address is required';
      $('#error_street_address').text(error_street_address);
      $('#street_address').addClass('has-error');
     }
     else
     {
      error_home_street = '';
      $('#error_street_address').text(error_street_address);
      $('#street_address').removeClass('has-error');
     }

     if($.trim($('#home_city').val()).length == 0)
     {
      error_home_city = "The patient's home city is required";
      $('#error_home_city').text(error_home_city);
      $('#home_city').addClass('has-error');
     }
     else
     {
      error_home_city = '';
      $('#error_home_city').text(error_home_city);
      $('#home_city').removeClass('has-error');
     }

     if($.trim($('#home_state').val()).length == 0)
     {
      error_home_state = 'State is required';
      $('#error_home_state').text(error_home_state);
      $('#home_state').addClass('has-error');
     }
     else
     {
      error_home_state = '';
      $('#error_home_state').text(error_home_state);
      $('#home_state').removeClass('has-error');
     }

     if($.trim($('#home_zip').val()).length == 0)
     {
      error_home_zip = "The patient's home zip code is required";
      $('#error_home_zip').text(error_home_zip);
      $('#home_zip').addClass('has-error');
     }
     else
     {
     if (!zip_validation.test($('#home_zip').val()))
     {
       error_home_zip = 'Please enter the 5 number home zip code of the patient';
       $('#error_home_zip').text(error_home_zip);
       $('#home_zip').addClass('has-error');
     }
     else
     {
       error_home_zip = '';
       $('#error_home_zip').text(error_home_zip);
       $('#home_zip').removeClass('has-error');
      }
    }

     if($.trim($('#pt_phone').val()).length == 0)
     {
      error_pt_phone = 'Phone number is required';
      $('#error_pt_phone').text(error_pt_phone);
      $('#pt_phone').addClass('has-error');
     }
     else
     {
     if (!phone_validation.test($('#pt_phone').val()))
     {
       error_pt_phone = 'Please enter 10 numbers';
       $('#error_pt_phone').text(error_pt_phone);
       $('#pt_phone').addClass('has-error');
     }
     else
     {
       error_pt_phone = '';
       $('#error_pt_phone').text(error_pt_phone);
       $('#pt_phone').removeClass('has-error');
      }
    }
    

     if($.trim($('#email').val()).length == 0)
     {
      error_email = 'Email is required';
      $('#error_email').text(error_email);
      $('#email').addClass('has-error');
     }
     else
     {
      if (!filter.test($('#email').val()))
      {
       error_email = 'Invalid Email';
       $('#error_email').text(error_email);
       $('#email').addClass('has-error');
      }
      else
      {
       error_email = '';
       $('#error_email').text(error_email);
       $('#email').removeClass('has-error');
      }
     }

      if($.trim($('#pt_dob').val()).length == 0)
     {
      error_pt_dob = 'Message is required';
      $('#error_pt_dob').text(error_pt_dob);
      $('#pt_dob').addClass('has-error');
     }
     else
     {
      error_pt_dob = '';
      $('#error_pt_dob').text(error_pt_dob);
      $('#pt_dob').removeClass('has-error');
     }

     if($.trim($('#pt_dob').val()).length == 0)
     {
      error_pt_dob = 'Message is required';
      $('#error_pt_dob').text(error_pt_dob);
      $('#pt_dob').addClass('has-error');
     }
     else
     {
      error_pt_dob = '';
      $('#error_pt_dob').text(error_pt_dob);
      $('#pt_dob').removeClass('has-error');
     }
   
     if(error_fname != '' || error_lname != ''|| error_street_address != '' || error_home_city != '' || error_home_state != '' || error_home_zip != '' || error_pt_phone != '' || error_email != '' || error_dob != '' || error_pt_notes != '')
     {
      return false;
     }
     else
     {
        $('#btn_personal_details').attr("disabled", "disabled");
        $(document).css('cursor', 'prgress');
        $("#pt_form").submit();
       }
    });    
   });
