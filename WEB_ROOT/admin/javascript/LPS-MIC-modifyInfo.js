function AddLPSAdditionalInformationTable() {

    // Find the <tr> containing the "Auto-assign IDs for this student" link
    var $autoAssignIdRow = $j('form div table tbody tr#modifyDataPageTRCounselor').next()

    // Grab all the rows from the hidden Additional Information table (except the wrapper table/tbody)
    // $additionalInfoRows stores all the rows from the hidden Additional Information table
    var $additionalInfoRows = $j('#LPS-AdditionalInformation-Table').find('tr');

    // Insert the Additional Information rows after the "Auto-assign IDs" row
    if ($autoAssignIdRow.length > 0 && $additionalInfoRows.length > 0) {
        $autoAssignIdRow.after($additionalInfoRows);

        // Show the newly inserted rows (they inherit display:none from parent table)
        $additionalInfoRows.show();

        // Remove the temporary hidden table
        $j('#LPS-AdditionalInformation-Table').remove();
    }
}

function AddLPSEnrolledStatusTable() {
    // Find the "Modify Info" header row within the first table's tbody
    var $modifyInfoHeaderRow = $j('table:first tbody th').filter(function () {
        return $j(this).text().trim() === 'Modify Info';
    }).closest('tr');

    // Grab all the rows from the hidden Enrolled Status table
    var $enrolledStatusRows = $j('#LPS-EnrolledStatus-Table').find('tr');

    // Insert the Enrolled Status rows before the Modify Info header
    if ($modifyInfoHeaderRow.length > 0 && $enrolledStatusRows.length > 0) {
        $modifyInfoHeaderRow.before($enrolledStatusRows);

        // Show the newly inserted rows (they inherit display:none from parent table)
        $enrolledStatusRows.show();

        // Remove the temporary hidden table
        $j('#LPS-EnrolledStatus-Table').remove();
    }
}

function EditExistingModifyInformationTable() {

    // Insert custom rows into the Modify Info table in precise positions

    // Move Home Room Teacher row after Home Room
    var $homeRoomRow = $j('table:first tbody tr').filter(function () {
        // Find <td> whose text (ignoring whitespace and case) is "Home Room"
        return $j(this).children('td').first().text().trim().toLowerCase() === 'home room';
    }).first();

    var $homeroomTeacherRow = $j('#LPS-EditExistingModifyInfo-Home_Room_Teacher');
    if ($homeRoomRow.length > 0 && $homeroomTeacherRow.length > 0) {
        $homeRoomRow.after($homeroomTeacherRow);
        $homeroomTeacherRow.show();
    }

    // Move Current Scheduled House, Current Campus/Building, and Track rows after Current House
    var $currentHouseRow = $j('table:first tbody tr').filter(function () {
        // Find <td> whose text (ignoring whitespace and case) is "Current House"
        return $j(this).children('td').first().text().trim().toLowerCase() === 'current house';
    }).first();

    var $scheduledHouseRow = $j('#LPS-EditExistingModifyInfo-Current_Scheduled_House');
    var $buildingRow = $j('#LPS-EditExistingModifyInfo-Current_Campus_Building');
    var $trackRow = $j('#LPS-EditExistingModifyInfo-Track');

    // Only insert these in order if $currentHouseRow exists
    if ($currentHouseRow.length > 0) {
        if ($scheduledHouseRow.length > 0) {
            $currentHouseRow.after($scheduledHouseRow);
            $scheduledHouseRow.show();
            $currentHouseRow = $scheduledHouseRow; // update insertion point
        }
        if ($buildingRow.length > 0) {
            $currentHouseRow.after($buildingRow);
            $buildingRow.show();
            $currentHouseRow = $buildingRow; // update insertion point
        }
        if ($trackRow.length > 0) {
            $currentHouseRow.after($trackRow);
            $trackRow.show();
            // $currentHouseRow = $trackRow; // not necessary as this is the last
        }
    }

    // Remove the temporary hidden table if it exists
    $j('#LPS-EditExistingModifyInfo-Table').remove();
}

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

function AddLPSModifyInfoTagLine() {
    // Find the button-row div that contains the Submit button
    var $buttonRow = $j('div.button-row');

    // Grab the tagline div
    var $tagLine = $j('#LPS-ModifyInfo-TagLine');

    // Insert the tagline after the button-row
    if ($buttonRow.length > 0 && $tagLine.length > 0) {
        $buttonRow.after($tagLine);

        // Show the tagline (it may be hidden)
        $tagLine.show();
    }
}

function LPSaddHookstoModifyInfo() {
    AddLPSAdditionalInformationTable();
    AddLPSEnrolledStatusTable();
    EditExistingModifyInformationTable();
    ApplyLPSFieldPermissions();
    AddLPSModifyInfoTagLine();
}

$j(document).ready(LPSaddHookstoModifyInfo);
