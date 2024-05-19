jQuery(document).ready(function($) {
    function checkUserRole() {
        $.ajax({
            url: userRoleUpdate.ajax_url,
            type: 'POST',
            data: {
                action: 'check_and_upgrade_user_role'
            },
            success: function(response) {
                // Handle the response if needed
            }
        });
    }

    // Check user role every 30 seconds
    setInterval(checkUserRole, 30000);
});
