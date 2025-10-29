function ApplyLPSFieldPermissions() {
    // Remove bgcolor attributes for cleaner styling
    $j("table:first tr").removeAttr("bgcolor");

    // Disable PowerSchool's default fields that we don't want users editing
    // (Only fields NOT in your custom HTML files)
    $j("input[data-validation*='students.lunch_id']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.phone_id']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.studentcorefields.family_rep']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.studentcorefields.parttimestudent']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.districtentrydate']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.districtentrygradelevel']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.schoolentrydate']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("input[data-validation*='students.schoolentrygradelevel']").attr({ 'disabled': 'disabled', 'title': 'Disabled' });
    $j("select[data-validation*='students.studentcorefields.tracker']").attr({ 'disabled': 'disabled', 'title': '' });

    // Enable specific fields if needed (fields that default to disabled but you want editable)
    $j("input[data-validation*='students.alert_otherexpires']").attr({ 'disabled': false, 'title': false });
}

$j(document).ready(function () {
    setTimeout(ApplyLPSFieldPermissions, 300); // Run slightly after the row insertions
});

