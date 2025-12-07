<?php
session_start();
require_once 'config/config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Patient Record</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" type="image/png" href="./assets/image/hcm.png">

    <style>
        body {
            background-color:#5343ff;
        }
        label {
            font-weight: 600;
            font-size: 16px;
        }
        .required-note {
            color:#a11306;
            font-weight:700;
        }
        .page-title {
            font-size:42px;
            text-align:center;
            font-family:'Oswald',Helvetica,Arial,sans-serif;
            margin-top:15px;
            color:#e9ebff;
        }
        .form-section {
            background:#fff;
            border-radius:12px;
            padding:30px;
            box-shadow:0 5px 15px rgba(0,0,0,0.12);
        }
        .btn-next {
            background-color:rgb(50,50,200);
            color:white;
            padding:12px 20px;
            font-size:1.3rem;
        }
        .btn-next:hover {
            opacity:0.85;
        }
    </style>
</head>

<body>

<div class="container mt-3">
    <?php include 'header2.php'; ?>
</div>

<h2 class="page-title"><b>New Patient Record</b></h2>

<div class="container mt-4 mb-5">

    <form method="post" action="index2.php">

        <div class="form-section">

            <!-- Visit Reason -->
            <div class="mb-3">
                <label for="visit_reason">What brings you to the hospital/office today?</label>
                <textarea class="form-control" id="visit_reason" name="visit_reason" rows="3"></textarea>
            </div>

            <!-- Self Harm -->
            <div class="mb-3">
                <label for="self_harm">Do you think about harming yourself?</label>
                <select class="form-select" id="self_harm" name="self_harm">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <!-- Symptoms -->
            <div class="mb-3">
                <label for="symptoms">Describe your symptoms and severity:</label>
                <textarea class="form-control" id="symptoms" name="symptoms" rows="3"></textarea>
            </div>

            <div class="mb-3">
                <label for="symptoms_before" class="required-note">If yes, have you had these symptoms before?</label>
                <select class="form-select" id="symptoms_before" name="symptoms_before">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <!-- Medical Conditions -->
            <div class="mb-3">
                <label for="medical_conditions">What medical conditions do you have?</label>
                <textarea class="form-control" id="medical_conditions" name="medical_conditions" rows="4"></textarea>
            </div>

            <!-- Medications -->
            <div class="mb-3">
                <label for="medications">List medications/supplements and dosage:</label>
                <textarea class="form-control" id="medications" name="medications" rows="3"></textarea>
            </div>

            <!-- Allergies -->
            <div class="mb-3">
                <label for="has_allergies">Do you have allergies?</label>
                <select class="form-select" id="has_allergies" name="has_allergies">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="allergies" class="required-note">If yes, list your allergies:</label>
                <textarea class="form-control" id="allergies" name="allergies" rows="3"></textarea>
            </div>

            <!-- Insurance -->
            <div class="mb-3">
                <label for="has_insurance">Does the patient have insurance?</label>
                <select class="form-select" id="has_insurance" name="has_insurance">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="insurance" class="required-note">If yes, which insurance?</label>
                <input type="text" class="form-control" id="insurance" name="insurance">
            </div>

            <!-- Surgeries -->
            <div class="mb-3">
                <label for="had_surgeries">Have you had past surgeries?</label>
                <select class="form-select" id="had_surgeries" name="had_surgeries">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="surgeries" class="required-note">If yes, describe your surgeries:</label>
                <textarea class="form-control" id="surgeries" name="surgeries" rows="3"></textarea>
            </div>

            <!-- Family disease -->
            <div class="mb-3">
                <label for="fam_disease">Family disease history?</label>
                <select class="form-select" id="fam_disease" name="fam_disease">
                    <option value="">Select Yes, No, or Unsure</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">Unsure</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="fam_diseases" class="required-note">If yes, list family diseases:</label>
                <textarea class="form-control" id="fam_diseases" name="fam_diseases" rows="3"></textarea>
            </div>

            <!-- Tobacco -->
            <div class="mb-3">
                <label for="use_tobacco">Do you smoke or use tobacco?</label>
                <select class="form-select" id="use_tobacco" name="use_tobacco">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="tobacco_usage" class="required-note">If yes, describe usage:</label>
                <textarea class="form-control" id="tobacco_usage" name="tobacco_usage" rows="3"></textarea>
            </div>

            <!-- Alcohol -->
            <div class="mb-3">
                <label for="drink_alcohol">Do you drink alcohol?</label>
                <select class="form-select" id="drink_alcohol" name="drink_alcohol">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="alcohol_usage" class="required-note">If yes, describe usage:</label>
                <textarea class="form-control" id="alcohol_usage" name="alcohol_usage" rows="3"></textarea>
            </div>

            <!-- Spiritual Beliefs -->
            <div class="mb-3">
                <label for="spiritual_beliefs">Any important spiritual/cultural beliefs?</label>
                <select class="form-select" id="spiritual_beliefs" name="spiritual_beliefs">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="what_spiritual_beliefs" class="required-note">If yes, describe:</label>
                <textarea class="form-control" id="what_spiritual_beliefs" name="what_spiritual_beliefs" rows="3"></textarea>
            </div>

            <!-- Consent -->
            <div class="mb-4">
                <label for="pt_consent">Do you consent to the proposed treatment?</label>
                <select class="form-select" id="pt_consent" name="pt_consent">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <!-- Submit -->
            <div class="text-end">
                <button type="submit" class="btn btn-next">Next</button>
            </div>

        </div><!-- /form-section -->

    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/script.js"></script>

</body>
</html>